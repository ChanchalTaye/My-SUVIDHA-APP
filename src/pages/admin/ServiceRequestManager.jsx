import React, { useState, useMemo, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useToast } from '../../components/common/Toast';
import Pagination from '../../components/common/Pagination';
import LoadingSkeleton from '../../components/common/LoadingSkeleton';
import EmptyState from '../../components/common/EmptyState';
import './ServiceRequestManager.css';

const ServiceRequestManager = () => {
    const { requests, updateRequestStatus } = useAdmin();
    const toast = useToast();

    // State
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 300);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
    const [selectedItems, setSelectedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate initial loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Filter & Search Logic
    const filteredData = useMemo(() => {
        return requests.filter(req => {
            const matchesFilter = filter === 'All' || req.status === filter;
            const searchLower = debouncedSearch.toLowerCase();
            const matchesSearch =
                req.id.toLowerCase().includes(searchLower) ||
                req.applicant.toLowerCase().includes(searchLower) ||
                req.service.toLowerCase().includes(searchLower);
            return matchesFilter && matchesSearch;
        });
    }, [requests, filter, debouncedSearch]);

    // Sorting Logic
    const sortedData = useMemo(() => {
        let sortableItems = [...filteredData];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                // Handle basic comparisons
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

    // Reset page when filter/search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [filter, debouncedSearch]);

    // Handlers
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(currentData.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectRow = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleStatusUpdate = (id, newStatus) => {
        updateRequestStatus(id, newStatus);
        toast.success(`Request ${id} marked as ${newStatus}`);
    };

    const handleBulkAction = (action) => {
        if (action === 'export') {
            const csvContent = "data:text/csv;charset=utf-8,"
                + "ID,Applicant,Service,Type,Date,Status\n"
                + sortedData.map(row => `${row.id},${row.applicant},${row.service},${row.type},${row.date},${row.status}`).join("\n");
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "service_requests.csv");
            document.body.appendChild(link);
            link.click();
            toast.success("Requests exported successfully");
            return;
        }

        const count = selectedItems.length;
        selectedItems.forEach(id => updateRequestStatus(id, action));
        setSelectedItems([]);
        toast.success(`${count} requests marked as ${action}`);
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) return '↕';
        return sortConfig.direction === 'asc' ? '↑' : '↓';
    };

    return (
        <div className="request-manager">
            {/* Header / Controls */}
            <div className="manager-header">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search requests..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-tabs">
                    {['All', 'Pending', 'Under Review', 'Approved', 'Rejected'].map(status => (
                        <button
                            key={status}
                            className={`filter-tab ${filter === status ? 'active' : ''}`}
                            onClick={() => setFilter(status)}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bulk Actions Toolbar */}
            {selectedItems.length > 0 && (
                <div className="bulk-actions-bar">
                    <span className="selected-count">{selectedItems.length} selected</span>
                    <div className="bulk-buttons">
                        <button className="btn-bulk approve" onClick={() => handleBulkAction('Approved')}>
                            ✓ Approve All
                        </button>
                        <button className="btn-bulk reject" onClick={() => handleBulkAction('Rejected')}>
                            ✕ Reject All
                        </button>
                        <button className="btn-bulk export" onClick={() => handleBulkAction('export')}>
                            ⬇ Export CSV
                        </button>
                    </div>
                </div>
            )}

            {/* Content Area */}
            <div className="requests-table-container">
                {isLoading ? (
                    <LoadingSkeleton rows={6} />
                ) : filteredData.length > 0 ? (
                    <>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th className="checkbox-col">
                                        <input
                                            type="checkbox"
                                            onChange={handleSelectAll}
                                            checked={selectedItems.length === currentData.length && currentData.length > 0}
                                        />
                                    </th>
                                    <th onClick={() => handleSort('id')} className="sortable">
                                        ID {getSortIcon('id')}
                                    </th>
                                    <th onClick={() => handleSort('applicant')} className="sortable">
                                        Applicant {getSortIcon('applicant')}
                                    </th>
                                    <th onClick={() => handleSort('service')} className="sortable">
                                        Service {getSortIcon('service')}
                                    </th>
                                    <th>Type</th>
                                    <th onClick={() => handleSort('date')} className="sortable">
                                        Date {getSortIcon('date')}
                                    </th>
                                    <th onClick={() => handleSort('priority')} className="sortable">
                                        Priority {getSortIcon('priority')}
                                    </th>
                                    <th onClick={() => handleSort('status')} className="sortable">
                                        Status {getSortIcon('status')}
                                    </th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map(req => (
                                    <tr key={req.id} className={selectedItems.includes(req.id) ? 'row-selected' : ''}>
                                        <td className="checkbox-col">
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(req.id)}
                                                onChange={() => handleSelectRow(req.id)}
                                            />
                                        </td>
                                        <td className="font-mono">{req.id}</td>
                                        <td>
                                            <div className="text-bold">{req.applicant}</div>
                                        </td>
                                        <td>{req.service}</td>
                                        <td>{req.type}</td>
                                        <td>{req.date}</td>
                                        <td>
                                            <span className={`priority-badge ${req.priority ? req.priority.toLowerCase() : 'low'}`}>
                                                {req.priority || 'Low'}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${req.status.toLowerCase().replace(' ', '-')}`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-buttons-cell">
                                                {req.status === 'Pending' && (
                                                    <>
                                                        <button
                                                            className="btn-icon approve"
                                                            title="Approve"
                                                            onClick={(e) => { e.stopPropagation(); handleStatusUpdate(req.id, 'Approved'); }}
                                                        >
                                                            ✓
                                                        </button>
                                                        <button
                                                            className="btn-icon review"
                                                            title="Mark Under Review"
                                                            onClick={(e) => { e.stopPropagation(); handleStatusUpdate(req.id, 'Under Review'); }}
                                                        >
                                                            👁️
                                                        </button>
                                                        <button
                                                            className="btn-icon reject"
                                                            title="Reject"
                                                            onClick={(e) => { e.stopPropagation(); handleStatusUpdate(req.id, 'Rejected'); }}
                                                        >
                                                            ✕
                                                        </button>
                                                    </>
                                                )}
                                                <button className="btn-details">Details</button>
                                            </div>
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
                        title="No Requests Found"
                        description={searchTerm ? `No results for "${searchTerm}"` : "There are no service requests in this category."}
                        action={searchTerm ? () => setSearchTerm('') : null}
                        actionLabel="Clear Search"
                    />
                )}
            </div>
        </div>
    );
};

export default ServiceRequestManager;
