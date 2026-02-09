import React, { useState, useEffect } from 'react';
import { getCivicStatusUpdates } from '../../utils/mockData';
import './CivicStatusPanel.css';

const CivicStatusPanel = ({ serviceFilter }) => {
    const [alerts, setAlerts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Load mock data and filter if necessary
        const allAlerts = getCivicStatusUpdates();
        if (serviceFilter) {
            const filtered = allAlerts.filter(alert =>
                alert.service === serviceFilter || alert.service === 'emergency'
            );
            setAlerts(filtered.length > 0 ? filtered : []);
        } else {
            setAlerts(allAlerts);
        }
    }, [serviceFilter]);

    useEffect(() => {
        if (alerts.length === 0) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % alerts.length);
                    return 0;
                }
                return prev + 2; // Updates every 100ms, reach 100 in 5s
            });
        }, 100);

        return () => clearInterval(interval);
    }, [alerts]);

    if (alerts.length === 0) return null;

    const currentAlert = alerts[currentIndex];

    const getStatusColor = (type) => {
        switch (type) {
            case 'alert': return '#ef4444'; // Red
            case 'advisory': return '#f59e0b'; // Yellow
            case 'normal': return '#3b82f6'; // Blue
            default: return '#3b82f6';
        }
    };

    return (
        <div className="civic-status-panel">
            <div className="status-header">
                <div className="live-indicator">
                    <span className="pulsing-dot"></span>
                    LIVE CIVIC STATUS
                </div>
                <div className="status-timestamp">{currentAlert.timestamp}</div>
            </div>

            <div className="status-content" style={{ borderLeft: `4px solid ${getStatusColor(currentAlert.type)}` }}>
                <div className="status-icon">
                    {/* Simplified icon logic based on color/type */}
                    <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: `${getStatusColor(currentAlert.type)}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: getStatusColor(currentAlert.type)
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v20M2 12h20"></path> {/* Placeholder icon */}
                        </svg>
                    </div>
                </div>
                <div className="status-message">
                    <span className="status-service-tag">{currentAlert.service}</span>
                    <p>{currentAlert.message}</p>
                </div>
                <button className="btn-details">View Details</button>
            </div>

            {/* Progress Bar */}
            <div className="status-progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: getStatusColor(currentAlert.type)
                    }}
                ></div>
            </div>
        </div>
    );
};

export default CivicStatusPanel;
