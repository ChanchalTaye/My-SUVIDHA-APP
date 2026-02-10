// Voice Guidance Utility using Web Speech API
// Supports multilingual text-to-speech for kiosk announcements

// Language code mapping for Web Speech API
const languageCodeMap = {
    'en': 'en-US',
    'hi': 'hi-IN'
};

let currentUtterance = null;

/**
 * Speaks the given text in the specified language
 * @param {string} text - Text to speak
 * @param {string} languageCode - Language code (e.g., 'en', 'hi')
 */
export const speak = (text, languageCode = 'en') => {
    // Check if browser supports speech synthesis
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported in this browser');
        return;
    }

    // Only allow English and Hindi voice guidance
    if (languageCode !== 'en' && languageCode !== 'hi') {
        stopSpeaking();
        return;
    }

    // Stop any ongoing speech
    stopSpeaking();

    // Create new utterance
    currentUtterance = new SpeechSynthesisUtterance(text);

    // Set language
    const speechLang = languageCodeMap[languageCode] || 'en-US';
    currentUtterance.lang = speechLang;

    // Get available voices
    const voices = window.speechSynthesis.getVoices();

    // Try to find a voice that matches the language
    let selectedVoice = null;

    // First, try to find an exact match (e.g., 'hi-IN')
    selectedVoice = voices.find(voice => voice.lang === speechLang);

    // If no exact match, try to find a voice that starts with the language code (e.g., 'hi')
    if (!selectedVoice) {
        const langPrefix = speechLang.split('-')[0];
        selectedVoice = voices.find(voice => voice.lang.startsWith(langPrefix));
    }

    // Set the voice if found
    if (selectedVoice) {
        currentUtterance.voice = selectedVoice;
        console.log(`🔊 Speaking in ${selectedVoice.name} (${selectedVoice.lang}): "${text}"`);
    } else {
        console.warn(`⚠️ No voice found for ${speechLang}. Available voices:`, voices.map(v => `${v.name} (${v.lang})`));
        console.log(`🔊 Speaking with default voice: "${text}"`);
    }

    // Configure speech parameters
    currentUtterance.rate = 0.9; // Slightly slower for clarity
    currentUtterance.pitch = 1.0;
    currentUtterance.volume = 1.0;

    // Error handling
    currentUtterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
    };

    // Success callback
    currentUtterance.onstart = () => {
        console.log(`✅ Started speaking: "${text}" in ${languageCode}`);
    };

    // Speak
    window.speechSynthesis.speak(currentUtterance);
};

/**
 * Stops any ongoing speech
 */
export const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    currentUtterance = null;
};

/**
 * Checks if speech synthesis is currently speaking
 * @returns {boolean}
 */
export const isSpeaking = () => {
    if ('speechSynthesis' in window) {
        return window.speechSynthesis.speaking;
    }
    return false;
};

export default {
    speak,
    stopSpeaking,
    isSpeaking
};
