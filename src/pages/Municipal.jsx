import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import BackButton from '../components/common/BackButton';
import Card from '../components/layout/Card';
import { speak } from '../utils/voiceGuidance';
import './ServicePage.css';

const Municipal = () => {
    const navigate = useNavigate();
    const { t, language } = useLanguage();

    const services = [
        {
            id: 'request-service',
            title: t('requestService'),
            iconImage: '/assets/municipal.png',
            color: '#10b981',
            action: () => {
                speak(t('voiceNewConnection'), language);
                navigate('/new-service-request?service=municipal', { state: { serviceType: 'municipal' } });
            }
        },
        {
            id: 'grievance',
            title: t('grievanceRegistration'),
            iconImage: '/assets/complaint.png',
            color: '#ef4444',
            action: () => {
                speak(t('voiceRegisterComplaint'), language);
                navigate('/complaint', { state: { serviceType: 'municipal' } });
            }
        },
        {
            id: 'track',
            title: t('trackGrievance'),
            iconImage: '/assets/track.png',
            color: '#3b82f6',
            action: () => alert('Tracking feature: Enter your complaint ticket ID to check status')
        },
        {
            id: 'emergency',
            title: t('emergencyInfo'),
            iconImage: '/assets/emergency.png',
            color: '#f59e0b',
            action: () => alert('Emergency Contacts:\n\nPolice: 100\nFire: 101\nAmbulance: 102\nDisaster Management: 108')
        },
        {
            id: 'advisories',
            title: t('advisories'),
            iconImage: '/assets/advisory.png',
            color: '#8b5cf6',
            action: () => alert('Current Advisories:\n\n• Road maintenance on Main Street\n• Water supply disruption on Sunday\n• Garbage collection schedule updated')
        }
    ];

    return (
        <div className="service-page">
            <Header />
            <Container>
                <BackButton to="/home" />

                <div className="service-content">
                    <h1 className="service-title">
                        <img src="/assets/municipal.png" alt="Municipal" className="service-header-icon" />
                        {t('municipalTitle')}
                    </h1>

                    <div className="service-actions-grid">
                        {services.map(service => (
                            <Card
                                key={service.id}
                                className="action-card"
                                hoverable
                                onClick={service.action}
                            >
                                <div className="action-icon" style={{ color: service.color }}>
                                    {service.iconImage ? (
                                        <img
                                            src={service.iconImage}
                                            alt={service.title}
                                            className="action-icon-image"
                                            style={{
                                                width: service.iconSize || '64px',
                                                height: service.iconSize || '64px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    ) : (
                                        service.icon
                                    )}
                                </div>
                                <h3 className="action-title">{service.title}</h3>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Municipal;
