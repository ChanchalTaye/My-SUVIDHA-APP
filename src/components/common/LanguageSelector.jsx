import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { language, setLanguage, getActiveLanguages, getLanguageMetadata } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const activeLanguages = getActiveLanguages();
    const currentLang = getLanguageMetadata(language);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]);

    const handleLanguageChange = (langCode) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="language-selector" ref={dropdownRef}>
            <button
                className="language-selector-button"
                onClick={toggleDropdown}
                aria-label="Select Language"
                aria-expanded={isOpen}
            >
                <span className="language-selector-icon">🌐</span>
                <span className="language-selector-current">{currentLang?.nativeName || 'English'}</span>
                <span className={`language-selector-arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>

            {isOpen && (
                <div className="language-selector-dropdown">
                    {activeLanguages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-selector-option ${language === lang.code ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <span className="language-option-text">
                                <span className="language-option-native">{lang.nativeName}</span>
                                {' '}
                                <span className="language-option-english">({lang.name})</span>
                            </span>
                            {language === lang.code && (
                                <span className="language-option-check">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
