import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import BackButton from '../components/common/BackButton';
import Card from '../components/layout/Card';
import VirtualKeyboard from '../components/common/VirtualKeyboard';
import { generateBillData, mockServiceInfo } from '../utils/mockData';
import MockPaymentModal from '../components/common/MockPaymentModal';
import { speak } from '../utils/voiceGuidance';
import './ServicePage.css';

const Gas = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, language } = useLanguage();
    const [showBillInput, setShowBillInput] = useState(false);
    const [lookupMethod, setLookupMethod] = useState('consumer');
    const [consumerId, setConsumerId] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [billData, setBillData] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    // Check for pre-fill data from Dashboard
    useEffect(() => {
        if (location.state?.prefill && location.state?.autoFetch) {
            const { consumerId, type } = location.state.prefill;
            setShowBillInput(true);
            setLookupMethod(type);
            setConsumerId(consumerId);

            // Auto fetch bill
            const bill = generateBillData('gas', consumerId);
            setBillData(bill);
        }
    }, [location.state]);

    // Keyboard State
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [activeInput, setActiveInput] = useState(null);

    const handleInputFocus = (inputType) => {
        setActiveInput(inputType);
        setIsKeyboardVisible(true);
    };

    const handleKeyPress = (key) => {
        if (!activeInput) return;
        if (activeInput === 'consumer') setConsumerId(prev => prev + key);
        else if (activeInput === 'mobile' && mobileNumber.length < 10) setMobileNumber(prev => prev + key);
    };

    const handleDelete = () => {
        if (!activeInput) return;
        if (activeInput === 'consumer') setConsumerId(prev => prev.slice(0, -1));
        else if (activeInput === 'mobile') setMobileNumber(prev => prev.slice(0, -1));
    };

    const handleViewBill = () => {
        speak(t('voiceViewingBill'), language);
        setShowBillInput(true);
    };

    const handleBackToService = () => {
        setShowBillInput(false);
        setBillData(null);
        setConsumerId('');
        setMobileNumber('');
        setLookupMethod('consumer');
    };

    const handleFetchBill = () => {
        const identifier = lookupMethod === 'consumer' ? consumerId : mobileNumber;
        if (identifier.trim()) {
            const bill = generateBillData('gas', identifier);
            setBillData(bill);
        }
    };

    const handlePayBill = () => {
        if (billData) {
            setShowPaymentModal(true);
        }
    };

    const onPaymentSuccess = (name) => {
        setShowPaymentModal(false);
        navigate('/payment-success', {
            state: {
                billData: { ...billData, consumerName: name },
                serviceType: 'gas',
                fromDashboard: location.state?.fromDashboard
            }
        });
    };

    const handleComplaint = () => {
        speak(t('voiceRegisterComplaint'), language);
        navigate('/complaint', {
            state: {
                serviceType: 'gas'
            }
        });
    };

    const handleNewConnection = () => {
        speak(t('voiceNewConnection'), language);
        navigate('/new-service-request?service=gas', { state: { serviceType: 'gas' } });
    };

    const serviceActions = [
        {
            id: 'new-connection',
            title: t('newConnection'),
            iconImage: '/assets/gas.png',
            color: '#10b981',
            action: handleNewConnection
        },
        {
            id: 'view-bill',
            title: t('viewBill'),
            iconImage: '/assets/bill.png',
            color: '#3b82f6',
            action: handleViewBill
        },
        {
            id: 'service-info',
            title: t('serviceInfo'),
            iconImage: '/assets/information.png',
            color: '#10b981',
            iconSize: '85px', // Larger visually
            action: () => alert(mockServiceInfo.gas.content.join('\n'))
        },
        {
            id: 'complaint',
            title: t('registerComplaint'),
            iconImage: '/assets/complaint.png',
            color: '#ef4444',
            action: handleComplaint
        }
    ];

    if (showBillInput && !billData) {
        return (
            <div className="service-page">
                <Header />
                <Container>
                    <BackButton onClick={handleBackToService} />

                    <div className="service-content">
                        <h1 className="service-title">
                            <img src="/assets/gas.png" alt="Gas" className="service-header-icon" />
                            {t('gas')} - {t('viewBill')}
                        </h1>

                        <Card className="bill-input-card">
                            <h2 className="card-title">{t('viewBill')}</h2>

                            <div className="lookup-toggle">
                                <button
                                    className={`toggle-btn ${lookupMethod === 'consumer' ? 'active' : ''}`}
                                    onClick={() => setLookupMethod('consumer')}
                                >
                                    {t('byConsumerId')}
                                </button>
                                <button
                                    className={`toggle-btn ${lookupMethod === 'mobile' ? 'active' : ''}`}
                                    onClick={() => setLookupMethod('mobile')}
                                >
                                    {t('byMobileNumber')}
                                </button>
                            </div>

                            {lookupMethod === 'consumer' ? (
                                <>
                                    <label className="input-label">{t('enterConsumerId')}</label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder={t('consumerIdPlaceholder')}
                                        value={consumerId}
                                        onChange={(e) => setConsumerId(e.target.value)}
                                        onClick={() => handleInputFocus('consumer')}
                                        readOnly
                                    />
                                    <p className="helper-text">{t('lookupHelperConsumer')}</p>
                                    <p className="helper-text-example">Try: GAS-1234 or 9988776655</p>
                                </>
                            ) : (
                                <>
                                    <label className="input-label">{t('enterPhoneNumber')}</label>
                                    <input
                                        type="tel"
                                        className="input-field"
                                        placeholder={t('phoneNumberPlaceholder')}
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        maxLength="10"
                                        onClick={() => handleInputFocus('mobile')}
                                        readOnly
                                    />
                                    <p className="helper-text">{t('lookupHelperMobile')}</p>
                                    <p className="helper-text-example">Try: 9876543210 or 8765432109</p>
                                </>
                            )}

                            <button
                                className="btn btn-primary btn-lg btn-full"
                                onClick={handleFetchBill}
                                disabled={lookupMethod === 'consumer' ? !consumerId.trim() : !mobileNumber.trim()}
                            >
                                {t('fetchBill')}
                            </button>
                        </Card>
                    </div>
                    <VirtualKeyboard
                        isVisible={isKeyboardVisible}
                        onClose={() => setIsKeyboardVisible(false)}
                        onKeyPress={handleKeyPress}
                        onDelete={handleDelete}
                    />
                </Container>
            </div>
        );
    }

    if (billData) {
        return (
            <div className="service-page">
                <Header />
                <Container>
                    <BackButton onClick={handleBackToService} />

                    <div className="service-content">
                        <h1 className="service-title">
                            <img src="/assets/gas.png" alt="Gas" className="service-header-icon" />
                            {t('gas')} - {t('viewBill')}
                        </h1>

                        <Card className="bill-details-card">
                            <div className="bill-header">
                                <h2>{billData.serviceProvider}</h2>
                                <p className="bill-date">{billData.billDate}</p>
                            </div>

                            <div className="bill-info">
                                <div className="bill-row">
                                    <span className="bill-label">{t('consumerName')}:</span>
                                    <span className="bill-value">{billData.consumerName}</span>
                                </div>

                                <div className="bill-row">
                                    <span className="bill-label">{t('consumerAddress')}:</span>
                                    <span className="bill-value">{billData.consumerAddress}</span>
                                </div>

                                <div className="bill-row">
                                    <span className="bill-label">{t('billPeriod')}:</span>
                                    <span className="bill-value">{billData.billPeriod}</span>
                                </div>

                                <div className="bill-row">
                                    <span className="bill-label">{t('billAmount')}:</span>
                                    <span className="bill-value">{t('currency')} {billData.billAmount}</span>
                                </div>

                                {billData.previousDues > 0 && (
                                    <div className="bill-row">
                                        <span className="bill-label">{t('previousDues')}:</span>
                                        <span className="bill-value bill-value-warning">
                                            {t('currency')} {billData.previousDues}
                                        </span>
                                    </div>
                                )}

                                <div className="bill-row bill-total">
                                    <span className="bill-label">{t('totalAmount')}:</span>
                                    <span className="bill-value">{t('currency')} {billData.totalAmount}</span>
                                </div>

                                <div className="bill-row">
                                    <span className="bill-label">{t('dueDate')}:</span>
                                    <span className="bill-value bill-value-accent">{billData.dueDate}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary btn-lg btn-full"
                                onClick={handlePayBill}
                            >
                                {t('payNow')}
                            </button>
                        </Card>
                    </div>
                </Container>

                <MockPaymentModal 
                    isOpen={showPaymentModal}
                    onClose={() => setShowPaymentModal(false)}
                    amount={billData.totalAmount}
                    onSuccess={onPaymentSuccess}
                />
            </div>
        );
    }

    return (
        <div className="service-page">
            <Header />
            <Container>
                <BackButton to="/home" />

                <div className="service-content">
                    <h1 className="service-title">
                        <img src="/assets/gas.png" alt="Gas" className="service-header-icon" />
                        {t('gas')}
                    </h1>

                    <div className="service-actions-grid">
                        {serviceActions.map(action => (
                            <Card
                                key={action.id}
                                className="action-card"
                                hoverable
                                onClick={action.action}
                            >
                                <div className="action-icon" style={{ color: action.color }}>
                                    {action.iconImage ? (
                                        <img
                                            src={action.iconImage}
                                            alt={action.title}
                                            className="action-icon-image"
                                            style={{
                                                width: action.iconSize || '64px',
                                                height: action.iconSize || '64px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    ) : (
                                        action.icon
                                    )}
                                </div>
                                <h3 className="action-title">{action.title}</h3>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Gas;
