import React, { useState, useMemo, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useToast } from '../../components/common/Toast';
import Pagination from '../../components/common/Pagination';
import LoadingSkeleton from '../../components/common/LoadingSkeleton';
import EmptyState from '../../components/common/EmptyState';
import './ServiceRequestManager.css'; // Reuse common admin styles
import './PaymentsMonitor.css';

const PaymentsMonitor = () => {
    const { recentPayments, stats } = useAdmin();
    const toast = useToast();

    // State
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 300);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: 'time', direction: 'desc' });
    const [isLoading, setIsLoading] = useState(true);

    // Simulate initial loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Filter & Search Logic
    const filteredData = useMemo(() => {
        return recentPayments.filter(pay => {
            const searchLower = debouncedSearch.toLowerCase();
            return (
                pay.id.toLowerCase().includes(searchLower) ||
                pay.consumerId.toLowerCase().includes(searchLower) ||
                pay.service.toLowerCase().includes(searchLower)
            );
        });
    }, [recentPayments, debouncedSearch]);

    // Sorting Logic
    const sortedData = useMemo(() => {
        let sortableItems = [...filteredData];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                // Handle currency strings for amount
                if (sortConfig.key === 'amount') {
                    aValue = parseFloat(aValue.toString().replace(/[^0-9.-]+/g, ""));
                    bValue = parseFloat(bValue.toString().replace(/[^0-9.-]+/g, ""));
                }

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableItems;
    }, [filteredData, sortConfig]);

    // Pagination Logic
    const itemsPerPage = 8;
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const currentData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Reset page on search change
    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch]);

    // Handlers
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleExport = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + "Transaction ID,Consumer ID,Service,Amount,Time,Status\n"
            + sortedData.map(row => `${row.id},${row.consumerId},${row.service},${row.amount},${row.time},${row.status}`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "transactions.csv");
        document.body.appendChild(link);
        link.click();
        toast.success("Transactions exported successfully");
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) return '↕';
        return sortConfig.direction === 'asc' ? '↑' : '↓';
    };

    return (
        <div className="request-manager payments-monitor">
            {/* Header */}
            <div className="manager-header">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search Transactions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="header-actions-right">
                    <div className="revenue-pill">
                        Today's Revenue: <span>₹{stats.revenueToday.toLocaleString()}</span>
                    </div>
                    <button className="btn-bulk export small" onClick={handleExport}>
                        ⬇ Export
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="requests-table-container">
                {isLoading ? (
                    <LoadingSkeleton rows={6} />
                ) : filteredData.length > 0 ? (
                    <>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort('id')} className="sortable">
                                        Transaction ID {getSortIcon('id')}
                                    </th>
                                    <th onClick={() => handleSort('consumerId')} className="sortable">
                                        Consumer ID {getSortIcon('consumerId')}
                                    </th>
                                    <th onClick={() => handleSort('service')} className="sortable">
                                        Service {getSortIcon('service')}
                                    </th>
                                    <th onClick={() => handleSort('amount')} className="sortable">
                                        Amount {getSortIcon('amount')}
                                    </th>
                                    <th onClick={() => handleSort('time')} className="sortable">
                                        Time {getSortIcon('time')}
                                    </th>
                                    <th onClick={() => handleSort('status')} className="sortable">
                                        Status {getSortIcon('status')}
                                    </th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map(pay => (
                                    <tr key={pay.id}>
                                        <td className="font-mono">{pay.id}</td>
                                        <td className="font-mono text-sm">{pay.consumerId}</td>
                                        <td>
                                            <div className="service-icon-wrapper small">
                                                {pay.service}
                                            </div>
                                        </td>
                                        <td className="amount-cell">₹{pay.amount.toLocaleString()}</td>
                                        <td>{pay.time}</td>
                                        <td>
                                            <span className={`status-badge ${pay.status.toLowerCase()}`}>
                                                {pay.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn-icon review" title="View Receipt">
                                                📄
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={sortedData.length}
                        />
                    </>
                ) : (
                    <EmptyState
                        title="No Transactions Found"
                        description={searchTerm ? `No results for "${searchTerm}"` : "There are no recent transactions."}
                        action={searchTerm ? () => setSearchTerm('') : null}
                        actionLabel="Clear Search"
                    />
                )}
            </div>
        </div>
    );
};

export default PaymentsMonitor;
