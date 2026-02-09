import React from 'react';
import './Card.css';

const Card = ({ children, className = '', onClick, hoverable = false }) => {
    const classNames = [
        'card',
        hoverable ? 'card-hoverable' : '',
        onClick ? 'card-clickable' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;
