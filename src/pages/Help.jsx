import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import BackButton from '../components/common/BackButton';
import Card from '../components/layout/Card';
import './ServicePage.css';
import './Help.css';

const Help = () => {
    const { t } = useLanguage();

    const contactCards = [
        {
            id: 'helpline',
            title: t('helpline'),
            value: '1800-123-4567',
            icon: '📞',
            color: '#3b82f6',
            action: () => window.location.href = 'tel:18001234567'
        },
        {
            id: 'email',
            title: t('email'),
            value: 'support@smartcity.gov',
            icon: '✉️',
            color: '#10b981',
            action: () => window.location.href = 'mailto:support@smartcity.gov'
        },
        {
            id: 'hours',
            title: t('operatingHours'),
            value: 'Mon-Sat: 9AM - 6PM',
            icon: '🕐',
            color: '#f59e0b',
            action: () => { }
        }
    ];

    const faqs = [
        {
            question: 'How do I pay my utility bills?',
            answer: 'Select the service (Electricity/Gas/Water), choose "Pay Bill", enter your consumer ID, and follow the payment process.'
        },
        {
            question: 'How can I register a complaint?',
            answer: 'Go to the respective service page or Municipal Services, select "Register Complaint", choose the issue category, and provide details.'
        },
        {
            question: 'How do I track my complaint?',
            answer: 'Note your complaint ticket ID when you register. Use the "Track Complaint" option to check status.'
        },
        {
            question: 'What if I forgot my consumer ID?',
            answer: 'Please contact the respective service provider helpline or visit their office with your address proof.'
        }
    ];

    return (
        <div className="service-page">
            <Header />
            <Container>
                <BackButton to="/home" />

                <div className="service-content">
                    <h1 className="service-title">
                        <img src="/assets/help.png" alt="Help" className="service-header-icon" />
                        {t('helpTitle')}
                    </h1>

                    {/* Contact Section - Modern Grid */}
                    <div className="service-actions-grid" style={{ marginBottom: '3rem' }}>
                        {contactCards.map(card => (
                            <Card
                                key={card.id}
                                className="action-card"
                                hoverable
                                onClick={card.action}
                            >
                                <div className="action-icon" style={{ color: card.color }}>
                                    {card.icon}
                                </div>
                                <h3 className="action-title">{card.title}</h3>
                                <p className="help-card-value">{card.value}</p>
                            </Card>
                        ))}
                    </div>

                    {/* FAQ Section - Clean Glass Panel */}
                    <div className="faq-section-container">
                        <h2 className="section-title">{t('faq')}</h2>
                        <div className="faq-grid">
                            {faqs.map((faq, index) => (
                                <Card key={index} className="faq-card-modern">
                                    <details className="faq-details">
                                        <summary className="faq-summary">
                                            <span className="faq-q-text">{faq.question}</span>
                                            <span className="faq-toggle">+</span>
                                        </summary>
                                        <div className="faq-answer-modern">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Help;
