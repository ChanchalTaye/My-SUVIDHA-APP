import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import BackButton from '../components/common/BackButton';
import Card from '../components/layout/Card';
import Button from '../components/common/Button';
import VirtualKeyboard from '../components/common/VirtualKeyboard';
import { generateComplaintTicketId, complaintCategories } from '../utils/mockData';
import './Complaint.css';

const Complaint = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useLanguage();

    const { serviceType } = location.state || {};

    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [ticketId, setTicketId] = useState('');

    // Keyboard State
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [activeInput, setActiveInput] = useState(null); // 'description'

    const handleInputFocus = (inputType) => {
        setActiveInput(inputType);
        setIsKeyboardVisible(true);
    };

    const handleKeyPress = (key) => {
        if (!activeInput) return;

        if (activeInput === 'description') {
            setDescription(prev => prev + key);
        }
    };

    const handleDelete = () => {
        if (!activeInput) return;

        if (activeInput === 'description') {
            setDescription(prev => prev.slice(0, -1));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (category && description.trim()) {
            const ticket = generateComplaintTicketId();
            setTicketId(ticket);
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="complaint-page">
                <Header />
                <Container>
                    <div className="complaint-content">
                        <Card className="success-card">
                            <div className="success-icon-wrapper">
                                <div className="success-icon">✓</div>
                            </div>

                            <h1 className="success-title">{t('complaintSuccess')}</h1>
                            <p className="success-message">{t('complaintMessage')}</p>

                            <div className="ticket-display">
                                <span className="ticket-label">{t('complaintTicketId')}</span>
                                <div className="ticket-value">{ticketId}</div>
                            </div>

                            <div className="success-actions">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    onClick={() => navigate('/home')}
                                >
                                    {t('home')}
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="complaint-page">
            <Header />
            <Container>
                <BackButton to={serviceType ? `/${serviceType}` : '/municipal'} />

                <div className="complaint-content">
                    <h1 className="complaint-title">{t('complaintTitle')}</h1>

                    <Card className="complaint-form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">{t('selectCategory')}</label>
                                <select
                                    className="form-select"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="">{t('selectCategory')}</option>
                                    <option value="electricity">{t('categoryElectricity')}</option>
                                    <option value="gas">{t('categoryGas')}</option>
                                    <option value="water">{t('categoryWater')}</option>
                                    <option value="streetlight">{t('categoryStreetlight')}</option>
                                    <option value="garbage">{t('categoryGarbage')}</option>
                                    <option value="sanitation">{t('categorySanitation')}</option>
                                    <option value="other">{t('categoryOther')}</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">{t('complaintDescription')}</label>
                                <textarea
                                    className="form-textarea"
                                    placeholder={t('descriptionPlaceholder')}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows="6"
                                    required
                                    onClick={() => handleInputFocus('description')}
                                    readOnly
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">{t('attachPhoto')}</label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        id="photo-upload"
                                        className="file-input"
                                        accept="image/*"
                                    />
                                    <label htmlFor="photo-upload" className="file-label">
                                        📷 {t('attachPhoto')}
                                    </label>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                fullWidth
                                disabled={!category || !description.trim()}
                            >
                                {t('submitComplaint')}
                            </Button>
                        </form>
                    </Card>
                    <VirtualKeyboard
                        isVisible={isKeyboardVisible}
                        onClose={() => setIsKeyboardVisible(false)}
                        onKeyPress={handleKeyPress}
                        onDelete={handleDelete}
                        defaultLayout="alpha"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Complaint;
