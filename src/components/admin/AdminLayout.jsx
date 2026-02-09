import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { useKeyboardShortcut } from '../../hooks/useKeyboardShortcut';
import './AdminLayout.css';

const AdminLayout = () => {
    const { adminUser, logout } = useAdmin();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    // Keyboard shortcuts for navigation
    useKeyboardShortcut('o', () => navigate('/admin/dashboard'), { alt: true });
    useKeyboardShortcut('r', () => navigate('/admin/requests'), { alt: true });
    useKeyboardShortcut('c', () => navigate('/admin/complaints'), { alt: true });
    useKeyboardShortcut('p', () => navigate('/admin/payments'), { alt: true });
    useKeyboardShortcut('a', () => navigate('/admin/alerts'), { alt: true });

    if (!adminUser) {
        // Fallback for direct access protection, though routes should handle this
        navigate('/admin/login');
        return null;
    }

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-brand">
                    <div className="brand-logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" fillOpacity="0.2" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13ZM12 15C9.33 15 4 16.34 4 19V20H20V19C20 16.34 14.67 15 12 15Z" fill="white" />
                        </svg>
                    </div>
                    <div className="brand-text">
                        <h2>Smart City</h2>
                        <span>Admin Console</span>
                    </div>
                </div>

                <nav className="admin-nav">
                    <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>

                        <span className="nav-label">Overview</span>

                    </NavLink>
                    <NavLink to="/admin/requests" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>

                        <span className="nav-label">Requests</span>

                    </NavLink>
                    <NavLink to="/admin/complaints" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>

                        <span className="nav-label">Complaints</span>

                    </NavLink>
                    <NavLink to="/admin/payments" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>

                        <span className="nav-label">Payments</span>

                    </NavLink>
                    <NavLink to="/admin/alerts" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>

                        <span className="nav-label">Alerts</span>

                    </NavLink>
                </nav>

                <div className="admin-user-mini">
                    <div className="user-avatar">AD</div>
                    <div className="user-info">
                        <h4>{adminUser.name}</h4>
                        <span>{adminUser.role}</span>
                    </div>
                </div>
            </aside>

            <main className="admin-main">
                <header className="admin-header">
                    <h2 className="page-title">
                        {window.location.pathname.split('/').pop().charAt(0).toUpperCase() + window.location.pathname.split('/').pop().slice(1)}
                    </h2>
                    <div className="header-actions">
                        <span className="current-time">{new Date().toLocaleDateString()}</span>
                        <button className="btn-logout" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </header>

                <div className="admin-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
