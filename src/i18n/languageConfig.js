// Centralized Language Configuration System
// Manages which languages are active and provides metadata for all supported languages

/**
 * All supported Indian official languages with metadata
 * This object contains ALL languages that have translations available,
 * but only languages in the activeLanguages array will be shown in the UI
 */
export const allLanguages = {
    en: {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        script: 'Latin',
        direction: 'ltr',
        fontFamily: '"Inter", "Segoe UI", sans-serif'
    },
    hi: {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिंदी',
        script: 'Devanagari',
        direction: 'ltr',
        fontFamily: '"Noto Sans Devanagari", "Arial Unicode MS", sans-serif'
    },
    as: {
        code: 'as',
        name: 'Assamese',
        nativeName: 'অসমীয়া',
        script: 'Bengali',
        direction: 'ltr',
        fontFamily: '"Noto Sans Bengali", "Vrinda", sans-serif'
    },
    bn: {
        code: 'bn',
        name: 'Bengali',
        nativeName: 'বাংলা',
        script: 'Bengali',
        direction: 'ltr',
        fontFamily: '"Noto Sans Bengali", "Vrinda", sans-serif'
    },
    or: {
        code: 'or',
        name: 'Odia',
        nativeName: 'ଓଡ଼ିଆ',
        script: 'Oriya',
        direction: 'ltr',
        fontFamily: '"Noto Sans Oriya", "Kalinga", sans-serif'
    },
    mr: {
        code: 'mr',
        name: 'Marathi',
        nativeName: 'मराठी',
        script: 'Devanagari',
        direction: 'ltr',
        fontFamily: '"Noto Sans Devanagari", "Arial Unicode MS", sans-serif'
    },
    ta: {
        code: 'ta',
        name: 'Tamil',
        nativeName: 'தமிழ்',
        script: 'Tamil',
        direction: 'ltr',
        fontFamily: '"Noto Sans Tamil", "Lohit Tamil", sans-serif'
    },
    te: {
        code: 'te',
        name: 'Telugu',
        nativeName: 'తెలుగు',
        script: 'Telugu',
        direction: 'ltr',
        fontFamily: '"Noto Sans Telugu", "Gautami", sans-serif'
    },
    gu: {
        code: 'gu',
        name: 'Gujarati',
        nativeName: 'ગુજરાતી',
        script: 'Gujarati',
        direction: 'ltr',
        fontFamily: '"Noto Sans Gujarati", "Shruti", sans-serif'
    },
    kn: {
        code: 'kn',
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ',
        script: 'Kannada',
        direction: 'ltr',
        fontFamily: '"Noto Sans Kannada", "Tunga", sans-serif'
    },
    ml: {
        code: 'ml',
        name: 'Malayalam',
        nativeName: 'മലയാളം',
        script: 'Malayalam',
        direction: 'ltr',
        fontFamily: '"Noto Sans Malayalam", "Kartika", sans-serif'
    },
    pa: {
        code: 'pa',
        name: 'Punjabi',
        nativeName: 'ਪੰਜਾਬੀ',
        script: 'Gurmukhi',
        direction: 'ltr',
        fontFamily: '"Noto Sans Gurmukhi", "Raavi", sans-serif'
    },
    ur: {
        code: 'ur',
        name: 'Urdu',
        nativeName: 'اردو',
        script: 'Arabic',
        direction: 'rtl',
        fontFamily: '"Noto Nastaliq Urdu", "Alvi Nastaleeq", sans-serif'
    },
    ne: {
        code: 'ne',
        name: 'Nepali',
        nativeName: 'नेपाली',
        script: 'Devanagari',
        direction: 'ltr',
        fontFamily: '"Noto Sans Devanagari", "Mangal", sans-serif'
    },
    kok: {
        code: 'kok',
        name: 'Konkani',
        nativeName: 'कोंकणी',
        script: 'Devanagari',
        direction: 'ltr',
        fontFamily: '"Noto Sans Devanagari", "Mangal", sans-serif'
    },
    brx: {
        code: 'brx',
        name: 'Bodo',
        nativeName: 'बड़ो',
        script: 'Devanagari',
        direction: 'ltr',
        fontFamily: '"Noto Sans Devanagari", "Mangal", sans-serif'
    },
    doi: {
        code: 'doi',
        name: 'Dogri',
        nativeName: 'डोगरी',
        script: 'Devanagari',
        direction: 'ltr',
        fontFamily: '"Noto Sans Devanagari", "Mangal", sans-serif'
    },
    ks: {
        code: 'ks',
        name: 'Kashmiri',
        nativeName: 'کٲشُر',
        script: 'Arabic',
        direction: 'rtl',
        fontFamily: '"Noto Nastaliq Urdu", "Alvi Nastaleeq", sans-serif'
    },
    mai: {
        code: 'mai',
        name: 'Maithili',
        nativeName: 'मैथिली',
        script: 'Devanagari',
        direction: 'ltr',
        fontFamily: '"Noto Sans Devanagari", "Mangal", sans-serif'
    },
    mni: {
        code: 'mni',
        name: 'Manipuri',
        nativeName: 'ꯃꯤꯇꯩꯂꯣꯟ',
        script: 'Meetei',
        direction: 'ltr',
        fontFamily: '"Noto Sans Meetei Mayek", sans-serif'
    },
    sa: {
        code: 'sa',
        name: 'Sanskrit',
        nativeName: 'संस्कृतम्',
        script: 'Devanagari',
        direction: 'ltr',
        fontFamily: '"Noto Sans Devanagari", "Mangal", sans-serif'
    },
    sat: {
        code: 'sat',
        name: 'Santali',
        nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ',
        script: 'Ol Chiki',
        direction: 'ltr',
        fontFamily: '"Noto Sans Ol Chiki", sans-serif'
    },
    sd: {
        code: 'sd',
        name: 'Sindhi',
        nativeName: 'سنڌي',
        script: 'Arabic',
        direction: 'rtl',
        fontFamily: '"Noto Nastaliq Urdu", "Alvi Nastaleeq", sans-serif'
    }
};

/**
 * Active Languages Configuration
 * These languages will be displayed in the UI
 * To change the active language set, simply modify this array
 * 
 * Current Active Set: All 23 languages (22 Official Indian Languages + English)
 * Phase 1: English, Hindi, Assamese, Bengali, Odia
 * Phase 2: Marathi, Tamil, Telugu, Gujarati, Kannada
 * Phase 3: Malayalam, Punjabi, Urdu, Nepali, Konkani
 * Phase 4: Bodo, Dogri, Kashmiri, Maithili, Manipuri
 * Phase 5: Sanskrit, Santali, Sindhi (FINAL - All 22 Official Languages Complete!)
 * 
 * Example: To switch to only South Indian languages, change to:
 * ['en', 'ta', 'te', 'kn', 'ml']
 */
export const activeLanguages = [
    'en', 'hi', 'as', 'bn', 'or',           // Phase 1
    'mr', 'ta', 'te', 'gu', 'kn',           // Phase 2
    'ml', 'pa', 'ur', 'ne', 'kok',          // Phase 3
    'brx', 'doi', 'ks', 'mai', 'mni',       // Phase 4
    'sa', 'sat', 'sd'                       // Phase 5 (FINAL)
];

/**
 * Get all active languages with their metadata
 * @returns {Array} Array of language objects for active languages
 */
export const getActiveLanguages = () => {
    return activeLanguages.map(code => allLanguages[code]).filter(Boolean);
};

/**
 * Check if a language is currently active
 * @param {string} languageCode - The language code to check
 * @returns {boolean} True if the language is active
 */
export const isLanguageActive = (languageCode) => {
    return activeLanguages.includes(languageCode);
};

/**
 * Get metadata for a specific language
 * @param {string} languageCode - The language code
 * @returns {Object|null} Language metadata object or null if not found
 */
export const getLanguageMetadata = (languageCode) => {
    return allLanguages[languageCode] || null;
};

/**
 * Get the default language (first in active languages list)
 * @returns {string} Default language code
 */
export const getDefaultLanguage = () => {
    return activeLanguages[0] || 'en';
};

/**
 * Validate if a language code is supported and active
 * @param {string} languageCode - The language code to validate
 * @returns {boolean} True if valid and active
 */
export const isValidActiveLanguage = (languageCode) => {
    return isLanguageActive(languageCode) && languageCode in allLanguages;
};

export default {
    allLanguages,
    activeLanguages,
    getActiveLanguages,
    isLanguageActive,
    getLanguageMetadata,
    getDefaultLanguage,
    isValidActiveLanguage
};
