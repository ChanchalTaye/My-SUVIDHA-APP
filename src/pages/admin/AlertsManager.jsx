import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import './ServiceRequestManager.css'; // Reuse styles
import './AlertsManager.css';

const AlertsManager = () => {
    const { alerts, addAlert, removeAlert } = useAdmin();
    const [newAlert, setNewAlert] = useState({ message: '', type: 'info' });
    const [isCreating, setIsCreating] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();
        if (!newAlert.message) return;

        addAlert({
            id: Date.now(),
            message: newAlert.message,
            type: newAlert.type,
            active: true,
            date: new Date().toLocaleDateString()
        });
        setNewAlert({ message: '', type: 'info' });
        setIsCreating(false);
    };

    return (
        <div className="request-manager alerts-container">
            <div className="manager-header">
                <h3>Civic Alerts Manager</h3>
                <button
                    className="btn-create"
                    onClick={() => setIsCreating(!isCreating)}
                >
                    {isCreating ? 'Cancel' : '+ New Alert'}
                </button>
            </div>

            {isCreating && (
                <div className="create-alert-form">
                    <form onSubmit={handleCreate}>
                        <div className="form-row">
                            <select
                                value={newAlert.type}
                                onChange={(e) => setNewAlert({ ...newAlert, type: e.target.value })}
                                className="alert-type-select"
                            >
                                <option value="info">ℹ️ Info</option>
                                <option value="warning">⚠️ Warning</option>
                                <option value="urgent">🚨 Urgent</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Enter alert message (e.g., Power cut in Sector 4...)"
                                value={newAlert.message}
                                onChange={(e) => setNewAlert({ ...newAlert, message: e.target.value })}
                                autoFocus
                            />
                            <button type="submit" className="btn-publish">Publish</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="alerts-list">
                {alerts.length > 0 ? (
                    alerts.map(alert => (
                        <div key={alert.id} className={`alert-card ${alert.type}`}>
                            <div className="alert-icon">
                                {alert.type === 'urgent' ? '🚨' : alert.type === 'warning' ? '⚠️' : 'ℹ️'}
                            </div>
                            <div className="alert-content">
                                <h4>{alert.type.toUpperCase()}</h4>
                                <p>{alert.message}</p>
                                <span className="alert-meta">Posted: {alert.date || 'Today'}</span>
                            </div>
                            <button
                                className="btn-delete-alert"
                                onClick={() => removeAlert(alert.id)}
                                title="Remove Alert"
                            >
                                🗑️
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="empty-state">
                        <p>No active alerts. The system is clear.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AlertsManager;
