import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/layout/Header';
// import Button from '../components/common/Button';
import { generateTransactionId } from '../utils/mockData';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [transactionId] = useState(generateTransactionId());
    const receiptRef = React.useRef(null);

    const { billData } = location.state || {};

    useEffect(() => {
        if (!billData) {
            navigate('/home');
        }
    }, [billData, navigate]);

    if (!billData) return null;

    const currentDate = new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const handleDownloadReceipt = async () => {
        if (!receiptRef.current) return;

        try {
            const canvas = await html2canvas(receiptRef.current, {
                scale: 4, // Increased scale for better quality
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Receipt_${transactionId}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate receipt. Please try again.');
        }
    };

    const handlePrintReceipt = () => {
        window.print();
    };


    return (
        <div className="payment-success-page">
            <Header />
            <div className="payment-success-content" ref={receiptRef}>
                {/* Success Header */}
                <div className="success-header">
                    <div className="success-icon-container">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                    <h1 className="success-title">{t('paymentSuccess')}</h1>
                    <p className="success-message">{t('paymentSuccessMessage')}</p>
                </div>

                {/* Bill Details Section */}
                <div className="bill-details-section">
                    <h2 className="bill-details-title">{t('billDetails')}</h2>

                    <div className="bill-detail-row">
                        <span className="bill-detail-label">{t('transactionId')}:</span>
                        <span className="bill-detail-value transaction-id">{transactionId}</span>
                    </div>

                    <div className="bill-detail-row">
                        <span className="bill-detail-label">{t('paymentDate')}:</span>
                        <span className="bill-detail-value">{currentDate}</span>
                    </div>

                    <div className="bill-detail-row">
                        <span className="bill-detail-label">{t('consumerName')}:</span>
                        <span className="bill-detail-value">{billData.consumerName}</span>
                    </div>

                    <div className="bill-detail-row">
                        <span className="bill-detail-label">{t('consumerAddress')}:</span>
                        <span className="bill-detail-value">{billData.consumerAddress}</span>
                    </div>

                    <div className="bill-detail-row">
                        <span className="bill-detail-label">{t('amountPaid')}:</span>
                        <span className="bill-detail-value amount-highlight">
                            {t('currency')} {billData.totalAmount}
                        </span>
                    </div>
                </div>

                {/* Receipt Actions */}
                <div className="receipt-actions">
                    <button
                        className="btn-glass-secondary"
                        onClick={handleDownloadReceipt}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        {t('downloadReceipt')}
                    </button>

                    <button
                        className="btn-glass-secondary"
                        onClick={handlePrintReceipt}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 6 2 18 2 18 9"></polyline>
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                            <rect x="6" y="14" width="12" height="8"></rect>
                        </svg>
                        {t('printReceipt')}
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                    <button
                        className="btn-glass-primary"
                        onClick={() => navigate(location.state?.fromDashboard ? '/dashboard' : '/home')}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        {location.state?.fromDashboard ? 'Return to Dashboard' : t('home')}
                    </button>
                </div>

                {/* Info Notice */}
                <div className="info-notice">
                    <p>{t('privacyMessage')}</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;

