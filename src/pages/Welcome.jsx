import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSession } from '../context/SessionContext';
import Button from '../components/common/Button';
import LanguageSelector from '../components/common/LanguageSelector';
import { speak } from '../utils/voiceGuidance';
import './Welcome.css';

const Welcome = () => {
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const { startSession } = useSession();

    const handleStart = () => {
        // Trigger voice announcement
        speak(t('voiceWelcome'), language);
        startSession();
        navigate('/home');
    };

    return (
        <div className="welcome-page">
            {/* Floating Geometric Shapes */}
            <div className="geometric-shape shape-1"></div>
            <div className="geometric-shape shape-2"></div>
            <div className="geometric-shape shape-3"></div>

            <div className="welcome-content">
                <div className="welcome-header">
                    <img src="/favicon.png" alt="My Suvidha App" className="welcome-logo" />
                    <h1 className="welcome-title">{t('welcomeMessage')}</h1>
                    <p className="welcome-subtitle">{t('govtBranding')}</p>
                </div>

                <div className="welcome-message">
                    <p className="welcome-description">
                        {t('selectLanguage') !== 'selectLanguage'
                            ? t('selectLanguage')
                            : 'Please Select Your Language'}
                    </p>
                    <div className="welcome-language-dropdown">
                        <LanguageSelector />
                    </div>
                </div>

                <div className="welcome-action">
                    <Button
                        variant="primary"
                        size="lg"
                        fullWidth
                        onClick={handleStart}
                    >
                        {t('touchToStart')}
                    </Button>
                </div>

                <div className="privacy-notice">
                    <p>{t('privacyMessage')}</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
