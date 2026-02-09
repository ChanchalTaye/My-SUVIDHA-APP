import React from 'react';
import './EmptyState.css';

const EmptyState = ({
    icon = '📭',
    title = 'No Data Found',
    description = 'There are no items to display at this time.',
    action,
    actionLabel
}) => {
    return (
        <div className="empty-state">
            <div className="empty-state-icon">{icon}</div>
            <h3 className="empty-state-title">{title}</h3>
            <p className="empty-state-description">{description}</p>
            {action && actionLabel && (
                <button onClick={action} className="empty-state-action">
                    {actionLabel}
                </button>
            )}
        </div>
    );
};

export default EmptyState;
