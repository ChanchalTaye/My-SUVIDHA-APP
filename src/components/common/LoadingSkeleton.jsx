import React from 'react';
import './LoadingSkeleton.css';

const LoadingSkeleton = ({ type = 'table', rows = 5 }) => {
    if (type === 'table') {
        return (
            <div className="skeleton-table">
                {Array.from({ length: rows }).map((_, index) => (
                    <div key={index} className="skeleton-row">
                        <div className="skeleton-cell skeleton-shimmer" style={{ width: '15%' }}></div>
                        <div className="skeleton-cell skeleton-shimmer" style={{ width: '25%' }}></div>
                        <div className="skeleton-cell skeleton-shimmer" style={{ width: '20%' }}></div>
                        <div className="skeleton-cell skeleton-shimmer" style={{ width: '15%' }}></div>
                        <div className="skeleton-cell skeleton-shimmer" style={{ width: '15%' }}></div>
                        <div className="skeleton-cell skeleton-shimmer" style={{ width: '10%' }}></div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === 'stats') {
        return (
            <div className="skeleton-stats">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="skeleton-stat-card">
                        <div className="skeleton-shimmer" style={{ width: '60%', height: '16px', marginBottom: '12px' }}></div>
                        <div className="skeleton-shimmer" style={{ width: '40%', height: '32px' }}></div>
                    </div>
                ))}
            </div>
        );
    }

    return null;
};

export default LoadingSkeleton;
