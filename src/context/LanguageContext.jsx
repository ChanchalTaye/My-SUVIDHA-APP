import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../i18n/translations';
import {
    getActiveLanguages,
    isValidActiveLanguage,
    getDefaultLanguage,
    getLanguageMetadata
} from '../i18n/languageConfig';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Try to get saved language from localStorage
        const saved = localStorage.getItem('kioskLanguage');

        // Validate that the saved language is still active
        if (saved && isValidActiveLanguage(saved)) {
            return saved;
        }

        // Fall back to default language
        return getDefaultLanguage();
    });

    const changeLanguage = (newLanguage) => {
        // Validate that the new language is active before switching
        if (isValidActiveLanguage(newLanguage)) {
            setLanguage(newLanguage);
        } else {
            console.warn(`Language "${newLanguage}" is not active. Switching to default.`);
            setLanguage(getDefaultLanguage());
        }
    };

    useEffect(() => {
        // Save language preference
        localStorage.setItem('kioskLanguage', language);

        // Update document lang attribute
        document.documentElement.lang = language;

        // Update body lang attribute for font switching
        document.body.setAttribute('lang', language);
    }, [language]);

    // Translation function
    const t = (key) => {
        return translations[language]?.[key] || key;
    };

    const value = {
        language,
        setLanguage: changeLanguage,
        t,
        // Helper functions for accessing language configuration
        getActiveLanguages,
        getLanguageMetadata: (code) => getLanguageMetadata(code || language),
        isValidActiveLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
