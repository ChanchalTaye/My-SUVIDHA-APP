import React from 'react';
import './ServiceRequestCard.css';

const ServiceRequestCard = ({ request }) => {
    const serviceIcons = {
        electricity: '/assets/electricity.png',
        gas: '/assets/gas.png',
        water: '/assets/water.png',
        municipal: '/assets/municipal.png'
    };

    const serviceNames = {
        electricity: 'Electricity',
        gas: 'Gas',
        water: 'Water',
        municipal: 'Municipal'
    };

    const statusConfig = {
        submitted: { label: 'Submitted', color: '#3b82f6' },
        'under-review': { label: 'Under Review', color: '#f59e0b' },
        approved: { label: 'Approved', color: '#10b981' },
        rejected: { label: 'Rejected', color: '#ef4444' }
    };

    const status = statusConfig[request.status] || statusConfig.submitted;

    return (
        <div className="service-request-card">
            <div className="request-header">
                <img
                    src={serviceIcons[request.serviceType]}
                    alt={serviceNames[request.serviceType]}
                    className="request-service-icon"
                />
                <div className="request-info">
                    <h3 className="request-id">{request.id}</h3>
                    <p className="request-service-name">{serviceNames[request.serviceType]} Connection</p>
                </div>
            </div>

            <div className="request-details">
                <div className="detail-item">
                    <span className="detail-label">Applicant:</span>
                    <span className="detail-value">{request.applicantName}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Submitted:</span>
                    <span className="detail-value">{request.submittedDate}</span>
                </div>
            </div>

            <div className="request-footer">
                <span
                    className="status-badge"
                    style={{
                        backgroundColor: `${status.color}20`,
                        color: status.color,
                        borderColor: status.color
                    }}
                >
                    {status.label}
                </span>
                <span className="expected-time">
                    {request.expectedDays} days
                </span>
            </div>
        </div>
    );
};

export default ServiceRequestCard;
