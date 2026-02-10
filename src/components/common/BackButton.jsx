import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from './Button';
import './BackButton.css';

const BackButton = ({ to, onClick }) => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleBack = () => {
        if (onClick) {
            onClick();
            return;
        }

        if (to) {
            navigate(to);
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="back-button-container">
            <button className="back-button-glass" onClick={handleBack} aria-label={t('back')}>
                <span className="back-icon">←</span>
                <span className="back-text">{t('back')}</span>
            </button>
        </div>
    );
};

export default BackButton;
