// Application Constants

export const ROUTES = {
    WELCOME: '/',
    HOME: '/home',
    ELECTRICITY: '/electricity',
    GAS: '/gas',
    WATER: '/water',
    MUNICIPAL: '/municipal',
    HELP: '/help',
    BILL_VIEW: '/bill-view',
    PAYMENT_SUCCESS: '/payment-success',
    COMPLAINT: '/complaint',
};

export const SERVICE_TYPES = {
    ELECTRICITY: 'electricity',
    GAS: 'gas',
    WATER: 'water',
    MUNICIPAL: 'municipal',
};

export const LANGUAGES = {
    ENGLISH: 'en',
    HINDI: 'hi',
    ASSAMESE: 'as',
};

export const SESSION_CONFIG = {
    TIMEOUT_DURATION: 90 * 1000, // 90 seconds
    WARNING_DURATION: 20 * 1000, // 20 seconds
};

export const COLORS = {
    primary: '#2563eb',
    secondary: '#059669',
    accent: '#dc2626',
    warning: '#f59e0b',
    info: '#0891b2',
};

export default {
    ROUTES,
    SERVICE_TYPES,
    LANGUAGES,
    SESSION_CONFIG,
    COLORS,
};
