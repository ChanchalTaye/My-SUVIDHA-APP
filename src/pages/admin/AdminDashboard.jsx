import { useToast } from '../../components/common/Toast';
import { useAdmin } from '../../context/AdminContext';
import StatsChart from '../../components/admin/StatsChart';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const { stats, requests, complaints, recentPayments, addAlert } = useAdmin();
    const toast = useToast();

    const handleQuickAction = (action) => {
        if (action === 'reboot') {
            toast.info('Initiating remote reboot sequence for all kiosks...');
            setTimeout(() => {
                toast.success('All terminals successfully rebooted.');
            }, 2000);
        } else if (action === 'alert') {
            const newAlert = {
                id: Date.now(),
                message: 'New Public Announcement: System Maintenance',
                type: 'info',
                active: true
            };
            addAlert(newAlert);
            toast.success('New system alert published successfully');
        }
    };

    return (
        <div className="admin-dashboard">
            {/* Stats Grid */}
            <div className="stats-grid">
                {/* ... existing stat cards ... */}
                {/* Assuming there's a stat card here that needs modification */}
                <div className="stat-card green">
                    <div className="stat-icon">💳</div>
                    <div className="stat-info">
                        <h3>Today's Collections</h3>
                        <p className="stat-value">₹{stats.revenueToday.toLocaleString()}</p>
                        <span className="stat-trend positive">↑ 8% vs yesterday</span>
                    </div>
                </div>
            </div>

            {/* Analytics Section */}
            <div className="dashboard-grid analytics-section">
                <div className="dashboard-section chart-card">
                    <div className="section-header">
                        <h3>Collection Trends (Last 7 Days)</h3>
                        <span className="trend-badge positive">↑ 14% vs last week</span>
                    </div>
                    {stats.revenueHistory && (
                        <StatsChart
                            data={stats.revenueHistory}
                            type="line"
                            color="#10b981"
                            height={180}
                        />
                    )}
                </div>
                <div className="dashboard-section chart-card">
                    <div className="section-header">
                        <h3>Requests by Service</h3>
                        <span className="trend-badge neutral">Distribution</span>
                    </div>
                    {stats.requestsByService && (
                        <StatsChart
                            data={stats.requestsByService}
                            type="bar"
                            color="#8b5cf6"
                            height={180}
                        />
                    )}
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Recent Activity */}
                {/* Recent Activity */}
                <div className="dashboard-section activity-section">
                    <div className="section-header">
                        <h3>Recent Activity</h3>
                        <button className="btn-view-all">View All</button>
                    </div>
                    <div className="activity-list">
                        {requests.slice(0, 3).map(req => (
                            <div key={req.id} className="activity-item">
                                <div className="activity-icon request">📄</div>
                                <div className="activity-details">
                                    <h4>New Request: {req.type}</h4>
                                    <p>{req.applicant} • {req.service}</p>
                                </div>
                                <span className={`status-badge ${req.status.toLowerCase().replace(' ', '-')}`}>
                                    {req.status}
                                </span>
                            </div>
                        ))}
                        {recentPayments.slice(0, 2).map(pay => (
                            <div key={pay.id} className="activity-item">
                                <div className="activity-icon payment">💰</div>
                                <div className="activity-details">
                                    <h4>Payment Received</h4>
                                    <p>{pay.service} • {pay.consumerId}</p>
                                </div>
                                <span className="amount-badge">
                                    +₹{pay.amount.toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Health */}
                <div className="dashboard-section health-section">
                    <div className="section-header">
                        <h3>System Health</h3>
                        <span className="health-status operational">Operational</span>
                    </div>
                    <div className="health-metrics">
                        <div className="metric">
                            <div className="metric-label">
                                <span>Server Load</span>
                                <span>24%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '24%' }}></div>
                            </div>
                        </div>
                        <div className="metric">
                            <div className="metric-label">
                                <span>API Latency</span>
                                <span>45ms</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '15%' }}></div>
                            </div>
                        </div>
                        <div className="metric">
                            <div className="metric-label">
                                <span>Database</span>
                                <span>Connected</span>
                            </div>
                            <div className="status-dot green"></div>
                        </div>
                        <div className="metric">
                            <div className="metric-label">
                                <span>Kiosk Terminals</span>
                                <span>12/12 Online</span>
                            </div>
                            <div className="status-dot green"></div>
                        </div>
                    </div>

                    <div className="quick-actions">
                        <h4>Quick Actions</h4>
                        <div className="action-buttons-grid">
                            <button className="btn-quick-action" onClick={() => handleQuickAction('alert')}>
                                <span className="action-icon">📢</span>
                                New Alert
                            </button>
                            <button className="btn-quick-action" onClick={() => handleQuickAction('reboot')}>
                                <span className="action-icon">🔄</span>
                                Reboot Kiosks
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
