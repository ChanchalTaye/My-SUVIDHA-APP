import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import './ServiceRequestSuccess.css';

const ServiceRequestSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useLanguage();

    const request = location.state?.request;

    if (!request) {
        navigate('/home');
        return null;
    }

    const serviceNames = {
        electricity: 'Electricity Connection',
        gas: 'Gas Connection',
        water: 'Water Connection',
        municipal: 'Municipal Service'
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        // Simulate download
        alert('Receipt downloaded successfully!');
    };

    const handleGoToHome = () => {
        navigate('/home');
    };

    return (
        <div className="service-request-success-page">
            <Header />
            <Container>
                <div className="success-content">
                    <div className="success-card">
                        <div className="success-icon">
                            <svg className="checkmark" viewBox="0 0 52 52">
                                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                        </div>

                        <h1 className="success-title">Request Submitted Successfully!</h1>
                        <p className="success-subtitle">Your service request has been received and is being processed.</p>

                        <div className="request-details">
                            <div className="detail-row highlight">
                                <span className="detail-label">Request ID</span>
                                <span className="detail-value request-id">{request.id}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Service Type</span>
                                <span className="detail-value">{serviceNames[request.serviceType]}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Applicant Name</span>
                                <span className="detail-value">{request.applicantName}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Mobile Number</span>
                                <span className="detail-value">{request.mobile}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Submitted On</span>
                                <span className="detail-value">{request.submittedDate}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Expected Processing Time</span>
                                <span className="detail-value">{request.expectedDays} business days</span>
                            </div>
                        </div>

                        <div className="info-box">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                            <p>You can track your request status from your dashboard. Please save your Request ID for future reference.</p>
                        </div>

                        <div className="action-buttons">
                            <button className="btn-glass" onClick={handlePrint}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6 9 6 2 18 2 18 9" />
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                    <rect x="6" y="14" width="12" height="8" />
                                </svg>
                                Print Acknowledgment
                            </button>
                            <button className="btn-glass" onClick={handleDownload}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Receipt
                            </button>
                            <button className="btn-primary-large" onClick={handleGoToHome}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                Go to Home
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServiceRequestSuccess;
