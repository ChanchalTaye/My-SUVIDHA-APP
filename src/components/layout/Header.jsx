import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useSession } from '../../context/SessionContext';
import LanguageSelector from '../common/LanguageSelector';
import './Header.css';

const Header = ({ showBack = false, showLogout = true }) => {
    const { t } = useLanguage();
    const { resetSession } = useSession();
    const navigate = useNavigate();

    const handleLogout = () => {
        resetSession();
        navigate('/');
    };

    const [showEmergencyModal, setShowEmergencyModal] = React.useState(false);
    const [emergencyStep, setEmergencyStep] = React.useState(0); // 0: Confirm, 1: Sending, 2: Sent

    const handleEmergencyClick = () => {
        setShowEmergencyModal(true);
        setEmergencyStep(0);
    };

    const confirmEmergency = () => {
        setEmergencyStep(1);
        // Simulate network request
        setTimeout(() => {
            setEmergencyStep(2);
            // Auto close after success
            setTimeout(() => {
                setShowEmergencyModal(false);
                setEmergencyStep(0);
            }, 3000);
        }, 2000);
    };

    const cancelEmergency = () => {
        setShowEmergencyModal(false);
        setEmergencyStep(0);
    };

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="header-left">
                        <img src="/favicon.png" alt="My Suvidha App" className="header-logo" />
                        <h1 className="header-title">{t('govtBranding')}</h1>
                    </div>

                    <div className="header-right">
                        <button
                            className="header-btn header-btn-emergency"
                            onClick={handleEmergencyClick}
                        >
                            <span className="header-btn-icon">🚨</span>
                            <span className="header-btn-text">{t('emergency') || 'Emergency'}</span>
                        </button>

                        <div className="header-language-selector">
                            <LanguageSelector />
                        </div>

                        {showLogout && (
                            <button
                                className="header-btn header-btn-logout"
                                onClick={handleLogout}
                            >
                                <span className="header-btn-icon">⏻</span>
                                <span className="header-btn-text">{t('logout')}</span>
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Emergency Modal */}
            {showEmergencyModal && (
                <div className="emergency-modal-overlay">
                    <div className="emergency-modal">
                        {emergencyStep === 0 && (
                            <>
                                <div className="emergency-icon-large">🚨</div>
                                <h2>Request Immediate Assistance?</h2>
                                <p>This will alert the support team and kiosk administrator to your location.</p>
                                <div className="emergency-actions">
                                    <button className="btn-cancel" onClick={cancelEmergency}>Cancel</button>
                                    <button className="btn-confirm-emergency" onClick={confirmEmergency}>YES, HELP ME</button>
                                </div>
                            </>
                        )}
                        {emergencyStep === 1 && (
                            <>
                                <div className="emergency-loader"></div>
                                <h2>Contacting Support...</h2>
                                <p>Please wait while we connect you.</p>
                            </>
                        )}
                        {emergencyStep === 2 && (
                            <>
                                <div className="emergency-success">✓</div>
                                <h2>Alert Sent!</h2>
                                <p>Help is on the way. Please stay at the kiosk.</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
