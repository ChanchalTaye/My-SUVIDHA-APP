import React, { createContext, useState, useContext, useEffect } from 'react';
// import { mockServiceRequests, mockComplaints } from '../utils/mockData';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [adminUser, setAdminUser] = useState(null);
    const [stats, setStats] = useState({
        activeUsers: 142,
        pendingRequests: 0,
        openComplaints: 0,
        revenueToday: 12580,
        systemStatus: 'Operational'
    });

    // Initialize with mock data
    const [requests, setRequests] = useState([]);
    const [complaints, setComplaints] = useState([]);
    const [recentPayments] = useState([
        { id: 'PAY-9012', consumerId: 'CONS-8829', service: 'Electricity', amount: 1450, status: 'Success', time: '10:42 AM' },
        { id: 'PAY-9011', consumerId: 'CONS-7731', service: 'Water', amount: 450, status: 'Success', time: '10:15 AM' },
        { id: 'PAY-9010', consumerId: 'CONS-9921', service: 'Gas', amount: 890, status: 'Failed', time: '09:55 AM' },
        { id: 'PAY-9009', consumerId: 'CONS-1122', service: 'Municipal', amount: 2500, status: 'Success', time: '09:30 AM' },
        { id: 'PAY-9008', consumerId: 'CONS-3344', service: 'Electricity', amount: 3200, status: 'Success', time: '09:10 AM' },
    ]);

    const [alerts, setAlerts] = useState([
        { id: 1, message: 'Heavy Rain Alert: Power cuts expected in Sector 4', type: 'urgent', active: true },
        { id: 2, message: 'Server Maintenance scheduled for Sunday 2 AM', type: 'info', active: true }
    ]);

    // Load initial data
    useEffect(() => {
        // Simulating data fetch
        const loadData = () => {
            // In a real app, we would fetch from API
            // For now, use mock data and maybe localStorage if we implemented it before
            // But fresh mock data is fine for "session" based admin

            // We'll use the imported mocks as a base, but maybe enhance them
            // If mockServiceRequests isn't exported or structured right, we'll create some here
            const initialRequests = [
                { id: 'REQ-2026-001', type: 'New Connection', service: 'Electricity', applicant: 'Rahul Sharma', date: '2026-02-10', status: 'Pending', priority: 'High' },
                { id: 'REQ-2026-002', type: 'Address Change', service: 'Water', applicant: 'Anita Desai', date: '2026-02-09', status: 'Under Review', priority: 'Medium' },
                { id: 'REQ-2026-003', type: 'Meter Check', service: 'Gas', applicant: 'Vikram Singh', date: '2026-02-09', status: 'Approved', priority: 'Low' },
                { id: 'REQ-2026-004', type: 'New Connection', service: 'Proprerty Tax', applicant: 'Suresh Raina', date: '2026-02-08', status: 'Rejected', priority: 'Medium' },
                { id: 'REQ-2026-005', type: 'Name Change', service: 'Electricity', applicant: 'Priya Patel', date: '2026-02-08', status: 'Pending', priority: 'Low' },
            ];

            const initialComplaints = [
                { id: 'CMP-9901', service: 'Water', description: 'No water supply in block A', status: 'Open', priority: 'Urgent', date: '2026-02-10' },
                { id: 'CMP-9902', service: 'Electricity', description: 'Voltage fluctuation', status: 'In Progress', priority: 'High', date: '2026-02-09' },
                { id: 'CMP-9903', service: 'Municipal', description: 'Garbage not collected', status: 'Resolved', priority: 'Medium', date: '2026-02-08' },
            ];

            setRequests(initialRequests);
            setComplaints(initialComplaints);

            // Update stats
            setStats(prev => ({
                ...prev,
                pendingRequests: initialRequests.filter(r => r.status === 'Pending').length,
                openComplaints: initialComplaints.filter(c => c.status !== 'Resolved').length,
                // Mock historical data for charts
                revenueHistory: [
                    { day: 'Mon', amount: 8500 },
                    { day: 'Tue', amount: 10200 },
                    { day: 'Wed', amount: 9800 },
                    { day: 'Thu', amount: 11500 },
                    { day: 'Fri', amount: 12580 },
                    { day: 'Sat', amount: 14200 },
                    { day: 'Sun', amount: 13800 }
                ],
                requestsByService: [
                    { name: 'Electricity', value: 35 },
                    { name: 'Water', value: 24 },
                    { name: 'Gas', value: 18 },
                    { name: 'Municipal', value: 12 }
                ]
            }));
        };

        loadData();
    }, []);

    const login = (username, password) => {
        if (username === 'admin' && password === 'admin123') {
            setAdminUser({ name: 'City Administrator', role: 'Super Admin', lastLogin: new Date().toLocaleString() });
            return true;
        }
        return false;
    };

    const logout = () => {
        setAdminUser(null);
    };

    const updateRequestStatus = (id, newStatus) => {
        setRequests(prev => prev.map(req =>
            req.id === id ? { ...req, status: newStatus } : req
        ));
        // Update stats
        if (newStatus !== 'Pending') {
            setStats(prev => ({ ...prev, pendingRequests: prev.pendingRequests - 1 }));
        }
    };

    const resolveComplaint = (id) => {
        setComplaints(prev => prev.map(comp =>
            comp.id === id ? { ...comp, status: 'Resolved' } : comp
        ));
        setStats(prev => ({ ...prev, openComplaints: prev.openComplaints - 1 }));
    };

    const addAlert = (alert) => {
        setAlerts(prev => [alert, ...prev]);
    };

    const removeAlert = (id) => {
        setAlerts(prev => prev.filter(a => a.id !== id));
    };

    return (
        <AdminContext.Provider value={{
            adminUser,
            stats,
            requests,
            complaints,
            recentPayments,
            alerts,
            login,
            logout,
            updateRequestStatus,
            resolveComplaint,
            addAlert,
            removeAlert
        }}>
            {children}
        </AdminContext.Provider>
    );
};
