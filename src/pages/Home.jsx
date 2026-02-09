import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import Card from '../components/layout/Card';
import CivicStatusPanel from '../components/common/CivicStatusPanel';
import { speak } from '../utils/voiceGuidance';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const { t, language } = useLanguage();

    const handleServiceClick = (service) => {
        // Trigger voice announcement based on service
        const voiceKey = `voiceViewing${service.id.charAt(0).toUpperCase() + service.id.slice(1)}`;
        const voiceText = t(voiceKey);
        
        // Only speak if translation exists (for electricity, gas, water)
        if (voiceText !== voiceKey) {
            speak(voiceText, language);
        }
        
        navigate(service.route);
    };

    const services = [
        {
            id: 'electricity',
            title: t('electricity'),
            iconImage: '/assets/electricity.png',
            color: '#f59e0b',
            route: '/electricity'
        },
        {
            id: 'gas',
            title: t('gas'),
            iconImage: '/assets/gas.png',
            color: '#ef4444',
            route: '/gas'
        },
        {
            id: 'water',
            title: t('water'),
            iconImage: '/assets/water.png',
            color: '#3b82f6',
            route: '/water'
        },
        {
            id: 'municipal',
            title: t('municipal'),
            iconImage: '/assets/municipal.png',
            color: '#8b5cf6',
            route: '/municipal'
        },
        {
            id: 'help',
            title: t('help'),
            iconImage: '/assets/help.png',
            color: '#10b981',
            route: '/help'
        },
        {
            id: 'status',
            title: t('myDashboard'),
            icon: (
                <div style={{
                    width: '60px', height: '60px', borderRadius: '50%', background: '#4f46e5',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
                }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
            ),
            color: '#4f46e5',
            route: '/login'
        }
    ];

    return (
        <div className="home-page">
            <Header />

            <Container>
                <div className="home-content">
                    <div className="home-header">
                        <h1 className="home-title">{t('homeTitle')}</h1>
                        <p className="home-subtitle">{t('homeSubtitle')}</p>
                    </div>

                    <div className="services-grid">
                        {services.map(service => (
                            <Card
                                key={service.id}
                                className={`service-card service-card-${service.id}`}
                                hoverable
                                onClick={() => handleServiceClick(service)}
                            >
                                <div className="service-icon">
                                    {service.iconImage ? (
                                        <img
                                            src={service.iconImage}
                                            alt={service.title}
                                            className="service-icon-image"
                                        />
                                    ) : (
                                        service.icon
                                    )}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                            </Card>
                        ))}
                    </div>

                    {/* Live Status Panel - Bottom Placement */}
                    <CivicStatusPanel />

                    {/* Admin Access - Discreet Button */}
                    <button
                        className="admin-access-btn"
                        onClick={() => navigate('/admin/login')}
                        title="Staff Login"
                    >
                        🔐 Admin
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default Home;
