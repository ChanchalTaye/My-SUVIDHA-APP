import React, { useState, useMemo, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useToast } from '../../components/common/Toast';
import Pagination from '../../components/common/Pagination';
import LoadingSkeleton from '../../components/common/LoadingSkeleton';
import EmptyState from '../../components/common/EmptyState';
import './ServiceRequestManager.css'; // Reuse common admin styles
import './ComplaintManager.css';      // Specific overrides

const ComplaintManager = () => {
    const { complaints, resolveComplaint } = useAdmin();
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
        return complaints.filter(comp => {
            const matchesFilter = filter === 'All' ||
                (filter === 'Open' && comp.status !== 'Resolved') ||
                comp.status === filter;

            const searchLower = debouncedSearch.toLowerCase();
            const matchesSearch =
                comp.id.toLowerCase().includes(searchLower) ||
                comp.service.toLowerCase().includes(searchLower) ||
                comp.description.toLowerCase().includes(searchLower);

            return matchesFilter && matchesSearch;
        });
    }, [complaints, filter, debouncedSearch]);

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

    // Reset page on filter change
    useEffect(() => {
        setCurrentPage(1);
        setSelectedItems([]);
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

    const handleResolve = (id) => {
        resolveComplaint(id);
        toast.success(`Complaint ${id} resolved successfully`);
    };

    const handleBulkAction = (action) => {
        if (action === 'export') {
            const csvContent = "data:text/csv;charset=utf-8,"
                + "ID,Service,Description,Priority,Date,Status\n"
                + sortedData.map(row => `${row.id},${row.service},"${row.description}",${row.priority},${row.date},${row.status}`).join("\n");
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "complaints.csv");
            document.body.appendChild(link);
            link.click();
            toast.success("Complaints exported successfully");
            return;
        }

        if (action === 'resolve') {
            const count = selectedItems.length;
            selectedItems.forEach(id => resolveComplaint(id));
            setSelectedItems([]);
            toast.success(`${count} complaints resolved`);
        }
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) return '↕';
        return sortConfig.direction === 'asc' ? '↑' : '↓';
    };

    return (
        <div className="request-manager complaint-manager">
            {/* Header */}
            <div className="manager-header">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search complaints..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-tabs">
                    {['All', 'Open', 'In Progress', 'Resolved'].map(status => (
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

            {/* Bulk Actions */}
            {selectedItems.length > 0 && (
                <div className="bulk-actions-bar">
                    <span className="selected-count">{selectedItems.length} selected</span>
                    <div className="bulk-buttons">
                        <button className="btn-bulk approve" onClick={() => handleBulkAction('resolve')}>
                            ✓ Resolve Selected
                        </button>
                        <button className="btn-bulk export" onClick={() => handleBulkAction('export')}>
                            ⬇ Export CSV
                        </button>
                    </div>
                </div>
            )}

            {/* Content */}
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
                                        Complaint ID {getSortIcon('id')}
                                    </th>
                                    <th onClick={() => handleSort('service')} className="sortable">
                                        Service {getSortIcon('service')}
                                    </th>
                                    <th>Description</th>
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
                                {currentData.map(comp => (
                                    <tr key={comp.id} className={selectedItems.includes(comp.id) ? 'row-selected' : ''}>
                                        <td className="checkbox-col">
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(comp.id)}
                                                onChange={() => handleSelectRow(comp.id)}
                                            />
                                        </td>
                                        <td className="font-mono">{comp.id}</td>
                                        <td>
                                            <div className="service-icon-wrapper">
                                                {comp.service}
                                            </div>
                                        </td>
                                        <td className="desc-cell" title={comp.description}>
                                            {comp.description.length > 40
                                                ? comp.description.substring(0, 40) + '...'
                                                : comp.description}
                                        </td>
                                        <td>{comp.date}</td>
                                        <td>
                                            <span className={`priority-badge ${comp.priority.toLowerCase()}`}>
                                                {comp.priority}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${comp.status.toLowerCase().replace(' ', '-')}`}>
                                                {comp.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-buttons-cell">
                                                {comp.status !== 'Resolved' && (
                                                    <button
                                                        className="btn-resolve"
                                                        onClick={(e) => { e.stopPropagation(); handleResolve(comp.id); }}
                                                    >
                                                        Resolve
                                                    </button>
                                                )}
                                                <button className="btn-icon review" title="View Details">
                                                    👁️
                                                </button>
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
                        title="No Complaints Found"
                        description={searchTerm ? `No results for "${searchTerm}"` : "There are no complaints matchings this filter."}
                        action={searchTerm ? () => setSearchTerm('') : null}
                        actionLabel="Clear Search"
                    />
                )}
            </div>
        </div>
    );
};

export default ComplaintManager;
