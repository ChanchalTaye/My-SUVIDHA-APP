import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSession } from '../context/SessionContext';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import BackButton from '../components/common/BackButton';
import { mockUserProfile } from '../utils/mockData';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const { login } = useSession();

    const [loginMethod, setLoginMethod] = useState('mobile'); // 'mobile' or 'consumerId'
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        if (e) e.preventDefault();

        if (inputValue.length < 4) return; // Basic validation

        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            login(mockUserProfile);
            navigate('/dashboard');
        }, 1500);
    };

    const handleKeypadClick = (val) => {
        if (val === 'backspace') {
            setInputValue(prev => prev.slice(0, -1));
        } else {
            const maxLength = loginMethod === 'mobile' ? 10 : 15;
            if (inputValue.length < maxLength) {
                setInputValue(prev => prev + val);
            }
        }
    };

    return (
        <div className="login-page">
            <Header />
            <Container>
                <BackButton to="/home" />

                <div className="login-container">
                    <div className="login-card">
                        <div className="login-header">
                            <div className="login-icon-circle">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2>{t('citizenLogin') || 'Citizen Login'}</h2>
                            <p>{t('accessServices') || 'Access your dashboard & services'}</p>
                        </div>

                        {/* Tabs */}
                        <div className="login-tabs">
                            <button
                                className={`login-tab ${loginMethod === 'mobile' ? 'active' : ''}`}
                                onClick={() => { setLoginMethod('mobile'); setInputValue(''); }}
                            >
                                Mobile Number
                            </button>
                            <button
                                className={`login-tab ${loginMethod === 'consumerId' ? 'active' : ''}`}
                                onClick={() => { setLoginMethod('consumerId'); setInputValue(''); }}
                            >
                                Consumer ID
                            </button>
                        </div>

                        {/* Input Display */}
                        <div className="input-display">
                            <span className="input-value">
                                {inputValue || (loginMethod === 'mobile' ? 'Enter Mobile Number' : 'Enter Consumer ID')}
                            </span>
                            {inputValue && <span className="cursor-blink">|</span>}
                        </div>

                        {/* Virtual Keypad */}
                        <div className="virtual-keypad">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                                <button key={num} className="key-btn" onClick={() => handleKeypadClick(num)}>
                                    {num}
                                </button>
                            ))}
                            <button className="key-btn action-key" onClick={() => setInputValue('')}>C</button>
                            <button className="key-btn" onClick={() => handleKeypadClick(0)}>0</button>
                            <button className="key-btn action-key" onClick={() => handleKeypadClick('backspace')}>⌫</button>
                        </div>

                        <button
                            className={`btn-login ${isLoading ? 'loading' : ''}`}
                            onClick={handleLogin}
                            disabled={inputValue.length === 0 || isLoading}
                        >
                            {isLoading ? 'Verifying...' : 'Access Dashboard'}
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
