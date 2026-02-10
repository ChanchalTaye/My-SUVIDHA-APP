import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../context/SessionContext';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import ServiceStatusCard from '../components/dashboard/ServiceStatusCard';
import ServiceRequestCard from '../components/dashboard/ServiceRequestCard';
import './Dashboard.css';

const Dashboard = () => {
    const { user, serviceRequests } = useSession();
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [greeting, setGreeting] = useState('goodAfternoon');

    // Route Guard
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('goodMorning');
        else if (hour < 18) setGreeting('goodAfternoon');
        else setGreeting('goodEvening');
    }, []);

    if (!user) return null;

    const handleServiceClick = (service) => {
        navigate(`/${service.service}`, {
            state: {
                prefill: {
                    consumerId: service.consumerNumber,
                    type: 'consumer'
                },
                autoFetch: true,
                fromDashboard: true
            }
        });
    };

    return (
        <div className="dashboard-page">
            <Header />
            <Container>
                {/* Hero Section */}
                <div className="dashboard-hero">
                    <div className="hero-welcome">
                        <h1 className="welcome-text">{t(greeting)}, {user.name.split(' ')[0]}</h1>
                        <p className="consumer-id">{t('citizenId')}: {user.consumerId}</p>
                    </div>

                    {/* Quick Stats Summary */}
                    <div className="stats-container">
                        <div className="stat-card total-due">
                            <div className="stat-icon">₹</div>
                            <div className="stat-info">
                                <span className="stat-label">{t('totalDue')}</span>
                                <span className="stat-value">
                                    ₹{user.connectedServices
                                        .filter(s => s.status !== 'paid')
                                        .reduce((acc, curr) => acc + curr.amount, 0)
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="stat-card active-services">
                            <div className="stat-icon">⚡</div>
                            <div className="stat-info">
                                <span className="stat-label">{t('active')}</span>
                                <span className="stat-value">{user.connectedServices.length} {t('services')}</span>
                            </div>
                        </div>
                        <div className="stat-card pending-issues">
                            <div className="stat-icon">!</div>
                            <div className="stat-info">
                                <span className="stat-label">{t('pending')}</span>
                                <span className="stat-value">
                                    {user.complaints.filter(c => c.status !== 'resolved').length} {t('complaints')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                {(() => {
                    const actionsRequired = user.connectedServices.filter(s => s.status === 'pending' || s.status === 'overdue');
                    const otherServices = user.connectedServices.filter(s => s.status === 'paid');

                    return (
                        <>
                            {/* Actions Required Section */}
                            {actionsRequired.length > 0 && (
                                <div className="dashboard-section">
                                    <div className="section-header">
                                        <h2 className="section-title alert-title">
                                            <span style={{ color: '#ef4444' }}>●</span> {t('actionsRequired')}
                                        </h2>
                                    </div>
                                    <div className="dashboard-grid">
                                        {actionsRequired.map(service => (
                                            <ServiceStatusCard
                                                key={service.id}
                                                service={service}
                                                onClick={() => handleServiceClick(service)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Other Services Section */}
                            <div className="dashboard-section">
                                <div className="section-header">
                                    <h2 className="section-title">{t('yourConnectedServices')}</h2>
                                    <button className="btn-link">{t('viewAll')}</button>
                                </div>
                                <div className="dashboard-grid">
                                    {otherServices.map(service => (
                                        <ServiceStatusCard
                                            key={service.id}
                                            service={service}
                                            onClick={() => handleServiceClick(service)}
                                        />
                                    ))}

                                    {/* Add New Service Card (Placeholder) */}
                                    <div className="add-service-card" onClick={() => alert('Feature coming soon!')}>
                                        <div className="add-icon">+</div>
                                        <span>{t('linkNewService')}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })()}

                {/* Recent Activity / Complaints */}
                <div className="dashboard-lower-section">
                    <div className="section-header">
                        <h2 className="section-title">{t('recentActivity')}</h2>
                        <button className="btn-new-complaint" onClick={() => navigate('/complaint')}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            {t('newComplaint')}
                        </button>
                    </div>
                    <div className="complaints-list">
                        {user.complaints.map(complaint => (
                            <div key={complaint.id} className="complaint-item">
                                <div className={`complaint-status-indicator ${complaint.status}`}></div>
                                <div className="complaint-icon">
                                    <img src={`/assets/${complaint.service}.png`} alt={complaint.service} width="24" />
                                </div>
                                <div className="complaint-info">
                                    <h4>{complaint.subject}</h4>
                                    <span>ID: {complaint.id} • {complaint.date}</span>
                                </div>
                                <div className={`complaint-status-badge ${complaint.status}`}>
                                    {complaint.status.replace('-', ' ')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service Requests Section */}
                {serviceRequests.length > 0 && (
                    <div className="dashboard-lower-section">
                        <div className="section-header">
                            <h2 className="section-title">My Service Requests</h2>
                            <button className="btn-new-complaint" onClick={() => navigate('/new-service-request')}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                New Request
                            </button>
                        </div>
                        <div className="service-requests-grid">
                            {serviceRequests.map(request => (
                                <ServiceRequestCard key={request.id} request={request} />
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Dashboard;
