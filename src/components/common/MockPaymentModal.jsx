import React, { useState } from 'react';
import './MockPaymentModal.css';

const MockPaymentModal = ({ isOpen, onClose, amount, onSuccess }) => {
    const [activeMethod, setActiveMethod] = useState('card');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiry: '',
        cvv: '',
        name: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prev => ({ ...prev, [name]: value }));
    };

    const handlePayment = () => {
        // Simulate processing delay
        const btn = document.querySelector('.pay-button');
        if (btn) btn.innerHTML = 'Processing...';
        
        setTimeout(() => {
            onSuccess(cardDetails.name || 'Consumer');
        }, 1500);
    };

    return (
        <div className="mock-razorpay-overlay">
            <div className="mock-razorpay-modal">
                <button className="mock-close-btn" onClick={onClose}>×</button>
                
                {/* Left Sidebar */}
                <div className="mock-razorpay-sidebar">
                    <div className="mock-razorpay-header">
                        <h3>Select a payment method</h3>
                    </div>
                    
                    <div className="payment-methods-list">
                        <div 
                            className={`payment-method-item ${activeMethod === 'card' ? 'active' : ''}`}
                            onClick={() => setActiveMethod('card')}
                        >
                            <div className="method-icon">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                            </div>
                            <div className="method-details">
                                <span className="method-title">Credit/Debit Card</span>
                                <span className="method-subtitle">Visa, Mastercard, Maestro, Rupay</span>
                            </div>
                        </div>

                        <div 
                            className={`payment-method-item ${activeMethod === 'netbanking' ? 'active' : ''}`}
                            onClick={() => setActiveMethod('netbanking')}
                        >
                            <div className="method-icon">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 10h3v7H4zM2 20h20v2H2zm10-18L1 7h22L12 2zm8 8h3v7h-3zm-9 0h3v7h-3z"/></svg>
                            </div>
                            <div className="method-details">
                                <span className="method-title">Netbanking</span>
                                <span className="method-subtitle">Pay with Internet Banking Account</span>
                            </div>
                        </div>

                        <div 
                            className={`payment-method-item ${activeMethod === 'wallet' ? 'active' : ''}`}
                            onClick={() => setActiveMethod('wallet')}
                        >
                            <div className="method-icon">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                            </div>
                            <div className="method-details">
                                <span className="method-title">Wallet</span>
                                <span className="method-subtitle">PhonePe, Amazon Pay & more</span>
                            </div>
                        </div>

                        <div 
                            className={`payment-method-item ${activeMethod === 'upi' ? 'active' : ''}`}
                            onClick={() => setActiveMethod('upi')}
                        >
                            <div className="method-icon">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M2.21 9.53L5.04 18h13.92l2.83-8.47H2.21zM7.5 16l1.32-3.96 4.71 1.57L12.21 16H7.5zM12 2L2 6v2h20V6L12 2z"/></svg>
                            </div>
                            <div className="method-details">
                                <span className="method-title">UPI</span>
                                <span className="method-subtitle">Google Pay, BHIM & more</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="mock-razorpay-content">
                    <div className="amount-display">
                        <span className="amount-label">Amount payable is</span>
                        <span className="amount-value">₹{amount}</span>
                    </div>

                    <h2 className="payment-form-title">
                        {activeMethod === 'card' && 'Pay with Credit/Debit Card'}
                        {activeMethod === 'netbanking' && 'Pay with Netbanking'}
                        {activeMethod === 'wallet' && 'Pay with Wallet'}
                        {activeMethod === 'upi' && 'Pay with UPI'}
                    </h2>

                    {activeMethod === 'card' && (
                        <div className="card-form">
                            <div className="form-group">
                                <label className="form-label">Card Number</label>
                                <input 
                                    type="text" 
                                    className="form-input" 
                                    name="number"
                                    placeholder="0000 0000 0000 0000"
                                    value={cardDetails.number}
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Expiry Date</label>
                                    <input 
                                        type="text" 
                                        className="form-input" 
                                        name="expiry"
                                        placeholder="MM / YY" 
                                        value={cardDetails.expiry}
                                        onChange={handleInputChange} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">CVV</label>
                                    <input 
                                        type="password" 
                                        className="form-input" 
                                        name="cvv"
                                        placeholder="***" 
                                        value={cardDetails.cvv}
                                        onChange={handleInputChange} 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Cardholder's Name</label>
                                <input 
                                    // type="text" 
                                    className="form-input" 
                                    name="name"
                                    placeholder="Name on card" 
                                    value={cardDetails.name}
                                    onChange={handleInputChange} 
                                />
                            </div>
                        </div>
                    )}
                    
                    {/* Placeholder for other methods */}
                    {activeMethod !== 'card' && (
                        <div style={{ padding: '20px 0', color: '#666', fontSize: '14px' }}>
                            <p>Enter your {activeMethod} details to proceed with the payment.</p>
                            <input type="text" className="form-input" placeholder={`Enter ${activeMethod} ID`} style={{ marginTop: '10px' }} />
                        </div>
                    )}

                    <button className="pay-button" onClick={handlePayment}>
                        PAY NOW
                    </button>

                    <div className="security-footer">
                        <div className="card-logos">
                            {/* Simple text representation if images missing, or svgs can be used */}
                            <span style={{fontWeight: 'bold', marginRight: '5px', color: '#1a1f36'}}>VISA</span>
                            <span style={{fontWeight: 'bold', color: '#eb001b'}}>Mastercard</span>
                        </div>
                        <span className="pci-text">PCI Compliant • Secured by 128-bit SSL</span>
                    </div>

                    <div className="razorpay-footer">
                        Powered by <span className="razorpay-logo-text">Razorpay</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MockPaymentModal;
