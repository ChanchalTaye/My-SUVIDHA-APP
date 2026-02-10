import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSession } from '../context/SessionContext';
import { useLanguage } from '../context/LanguageContext';
import { generateServiceRequestId } from '../utils/mockData';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import BackButton from '../components/common/BackButton';
import VirtualKeyboard from '../components/common/VirtualKeyboard';
import './NewServiceRequest.css';

const NewServiceRequest = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { addServiceRequest } = useSession();
    const { t } = useLanguage();

    // Get service type from URL params or state
    const urlParams = new URLSearchParams(location.search);
    const initialService = urlParams.get('service') || location.state?.serviceType || '';

    const [currentStep, setCurrentStep] = useState(initialService ? 2 : 1);
    const [formData, setFormData] = useState({
        serviceType: initialService,
        applicantName: '',
        mobile: '',
        address: '',
        idType: 'aadhaar',
        category: 'residential',
        documents: []
    });

    const [activeInput, setActiveInput] = useState(null);
    const [errors, setErrors] = useState({});

    const serviceOptions = [
        { id: 'electricity', label: 'Electricity Connection', icon: '/assets/electricity.png' },
        { id: 'gas', label: 'Gas Connection', icon: '/assets/gas.png' },
        { id: 'water', label: 'Water Connection', icon: '/assets/water.png' },
        { id: 'municipal', label: 'Municipal Service', icon: '/assets/municipal.png' }
    ];

    const idTypes = [
        { value: 'aadhaar', label: 'Aadhaar Card' },
        { value: 'pan', label: 'PAN Card' },
        { value: 'voter', label: 'Voter ID' },
        { value: 'passport', label: 'Passport' }
    ];

    const categories = [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' }
    ];

    const documentTypes = [
        { id: 'idProof', label: 'ID Proof', required: true },
        { id: 'addressProof', label: 'Address Proof', required: true },
        { id: 'propertyProof', label: 'Property/Ownership Proof', required: false }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleFileSelect = (docType, event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                documents: [
                    ...prev.documents.filter(d => d.type !== docType),
                    { type: docType, fileName: file.name, size: file.size }
                ]
            }));
        }
    };

    const validateStep = () => {
        const newErrors = {};

        if (currentStep === 1 && !formData.serviceType) {
            newErrors.serviceType = 'Please select a service';
        }

        if (currentStep === 2) {
            if (!formData.applicantName.trim()) newErrors.applicantName = 'Name is required';
            if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
            else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter valid 10-digit mobile';
            if (!formData.address.trim()) newErrors.address = 'Address is required';
        }

        if (currentStep === 3) {
            const requiredDocs = documentTypes.filter(d => d.required);
            const uploadedTypes = formData.documents.map(d => d.type);
            const missingDocs = requiredDocs.filter(d => !uploadedTypes.includes(d.id));

            if (missingDocs.length > 0) {
                newErrors.documents = `Please upload: ${missingDocs.map(d => d.label).join(', ')}`;
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = () => {
        if (validateStep()) {
            const requestId = generateServiceRequestId(formData.serviceType);
            const request = {
                id: requestId,
                serviceType: formData.serviceType,
                applicantName: formData.applicantName,
                mobile: formData.mobile,
                address: formData.address,
                idType: formData.idType,
                category: formData.category,
                documents: formData.documents,
                status: 'submitted',
                submittedDate: new Date().toLocaleDateString('en-IN'),
                expectedDays: 7
            };

            addServiceRequest(request);
            navigate('/service-request-success', { state: { request } });
        }
    };

    const renderProgressIndicator = () => {
        const totalSteps = formData.serviceType ? 4 : 5;
        const steps = formData.serviceType
            ? ['Details', 'Documents', 'Review']
            : ['Service', 'Details', 'Documents', 'Review'];

        return (
            <div className="progress-indicator">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`progress-step ${currentStep >= (formData.serviceType ? index + 2 : index + 1) ? 'active' : ''}`}
                    >
                        <div className="step-number">{index + 1}</div>
                        <div className="step-label">{step}</div>
                    </div>
                ))}
            </div>
        );
    };

    const renderStep1 = () => (
        <div className="form-step">
            <h2 className="step-title">Select Service Type</h2>
            <div className="service-selection-grid">
                {serviceOptions.map(service => (
                    <div
                        key={service.id}
                        className={`service-option-card ${formData.serviceType === service.id ? 'selected' : ''}`}
                        onClick={() => handleInputChange('serviceType', service.id)}
                    >
                        <img src={service.icon} alt={service.label} className="service-option-icon" />
                        <h3>{service.label}</h3>
                    </div>
                ))}
            </div>
            {errors.serviceType && <p className="error-message">{errors.serviceType}</p>}
        </div>
    );

    const renderStep2 = () => (
        <div className="form-step">
            <h2 className="step-title">Basic Details</h2>
            <div className="form-grid">
                <div className="form-group">
                    <label>Full Name *</label>
                    <input
                        type="text"
                        value={formData.applicantName}
                        onChange={(e) => handleInputChange('applicantName', e.target.value)}
                        onFocus={() => setActiveInput('applicantName')}
                        onBlur={() => setActiveInput(null)}
                        className={errors.applicantName ? 'error' : ''}
                        placeholder="Enter your full name"
                    />
                    {errors.applicantName && <p className="error-message">{errors.applicantName}</p>}
                </div>

                <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value.slice(0, 10))}
                        onFocus={() => setActiveInput('mobile')}
                        onBlur={() => setActiveInput(null)}
                        className={errors.mobile ? 'error' : ''}
                        placeholder="10-digit mobile number"
                        maxLength="10"
                    />
                    {errors.mobile && <p className="error-message">{errors.mobile}</p>}
                </div>

                <div className="form-group full-width">
                    <label>Address *</label>
                    <textarea
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        onFocus={() => setActiveInput('address')}
                        onBlur={() => setActiveInput(null)}
                        className={errors.address ? 'error' : ''}
                        placeholder="Enter your complete address"
                        rows="3"
                    />
                    {errors.address && <p className="error-message">{errors.address}</p>}
                </div>

                <div className="form-group">
                    <label>ID Type *</label>
                    <select
                        value={formData.idType}
                        onChange={(e) => handleInputChange('idType', e.target.value)}
                    >
                        {idTypes.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Category *</label>
                    <select
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {activeInput && (
                <VirtualKeyboard
                    onKeyPress={(key) => {
                        if (activeInput) {
                            const currentValue = formData[activeInput];
                            if (key === 'backspace') {
                                handleInputChange(activeInput, currentValue.slice(0, -1));
                            } else if (key === 'space') {
                                handleInputChange(activeInput, currentValue + ' ');
                            } else {
                                handleInputChange(activeInput, currentValue + key);
                            }
                        }
                    }}
                    defaultLayout={activeInput === 'mobile' ? 'numeric' : 'alphabet'}
                />
            )}
        </div>
    );

    const renderStep3 = () => (
        <div className="form-step">
            <h2 className="step-title">Document Upload</h2>
            <div className="document-upload-grid">
                {documentTypes.map(doc => (
                    <div key={doc.id} className="document-upload-card">
                        <h3>{doc.label} {doc.required && <span className="required">*</span>}</h3>
                        <input
                            type="file"
                            id={`file-${doc.id}`}
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileSelect(doc.id, e)}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor={`file-${doc.id}`} className="upload-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                            Choose File
                        </label>
                        {formData.documents.find(d => d.type === doc.id) && (
                            <div className="uploaded-file">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                {formData.documents.find(d => d.type === doc.id).fileName}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {errors.documents && <p className="error-message">{errors.documents}</p>}
        </div>
    );

    const renderStep4 = () => {
        const selectedService = serviceOptions.find(s => s.id === formData.serviceType);
        const selectedIdType = idTypes.find(t => t.value === formData.idType);
        const selectedCategory = categories.find(c => c.value === formData.category);

        return (
            <div className="form-step">
                <h2 className="step-title">Review & Submit</h2>
                <div className="review-section">
                    <div className="review-card">
                        <h3>Service Details</h3>
                        <div className="review-item">
                            <span className="review-label">Service Type:</span>
                            <span className="review-value">{selectedService?.label}</span>
                        </div>
                        <div className="review-item">
                            <span className="review-label">Category:</span>
                            <span className="review-value">{selectedCategory?.label}</span>
                        </div>
                    </div>

                    <div className="review-card">
                        <h3>Applicant Information</h3>
                        <div className="review-item">
                            <span className="review-label">Name:</span>
                            <span className="review-value">{formData.applicantName}</span>
                        </div>
                        <div className="review-item">
                            <span className="review-label">Mobile:</span>
                            <span className="review-value">{formData.mobile}</span>
                        </div>
                        <div className="review-item">
                            <span className="review-label">Address:</span>
                            <span className="review-value">{formData.address}</span>
                        </div>
                        <div className="review-item">
                            <span className="review-label">ID Type:</span>
                            <span className="review-value">{selectedIdType?.label}</span>
                        </div>
                    </div>

                    <div className="review-card">
                        <h3>Uploaded Documents</h3>
                        {formData.documents.map((doc, index) => {
                            const docType = documentTypes.find(d => d.id === doc.type);
                            return (
                                <div key={index} className="review-item">
                                    <span className="review-label">{docType?.label}:</span>
                                    <span className="review-value">{doc.fileName}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="confirmation-checkbox">
                        <label>
                            <input type="checkbox" required />
                            <span>I confirm that all the information provided is accurate and complete.</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="new-service-request-page">
            <Header />
            <Container>
                <BackButton to={formData.serviceType ? `/${formData.serviceType}` : '/home'} />

                <div className="request-content">
                    <h1 className="page-title">New Service Request</h1>

                    {renderProgressIndicator()}

                    <div className="wizard-container">
                        {currentStep === 1 && renderStep1()}
                        {currentStep === 2 && renderStep2()}
                        {currentStep === 3 && renderStep3()}
                        {currentStep === 4 && renderStep4()}
                    </div>

                    <div className="wizard-actions">
                        {currentStep > 1 && (
                            <button className="btn-secondary" onClick={handleBack}>
                                Back
                            </button>
                        )}
                        {currentStep < 4 && (
                            <button className="btn-primary" onClick={handleNext}>
                                Next
                            </button>
                        )}
                        {currentStep === 4 && (
                            <button className="btn-primary" onClick={handleSubmit}>
                                Submit Request
                            </button>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NewServiceRequest;
