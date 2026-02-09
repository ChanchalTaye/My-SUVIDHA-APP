import React from 'react';
import './ServiceStatusCard.css';

const ServiceStatusCard = ({ service, onClick }) => {

    const getStatusColor = (status) => {
        switch (status) {
            case 'paid': return '#10b981';
            case 'pending': return '#f59e0b';
            case 'overdue': return '#ef4444';
            default: return '#9ca3af';
        }
    };

    const getIcon = (serviceType) => {
        // Mapping typical service types to assets
        return `/assets/${serviceType}.png`;
    };

    return (
        <div className={`service-status-card ${service.status}`} onClick={onClick}>
            <div className="ssc-header">
                <div className="ssc-icon">
                    <img src={getIcon(service.service)} alt={service.service} />
                </div>
                <div className="ssc-badge" style={{ background: getStatusColor(service.status) }}>
                    {service.status}
                </div>
            </div>

            <h3 className="ssc-provider">{service.provider}</h3>
            <p className="ssc-consumer">ID: {service.consumerNumber}</p>

            <div className="ssc-details">
                <div className="ssc-row">
                    <span>Due Date</span>
                    <span className="ssc-value">{service.dueDate}</span>
                </div>
                <div className="ssc-divider"></div>
                <div className="ssc-row large">
                    <span>Amount</span>
                    <span className="ssc-amount">₹ {service.amount}</span>
                </div>
            </div>

            {service.status !== 'paid' && (
                <button className="ssc-pay-btn">
                    Pay Now
                </button>
            )}
            {service.status === 'paid' && (
                <button className="ssc-receipt-btn">
                    View Receipt
                </button>
            )}
        </div>
    );
};

export default ServiceStatusCard;
