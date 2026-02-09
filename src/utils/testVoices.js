// Voice Testing Utility
// Use this in the browser console to test available voices

console.log('🎤 Testing Voice Synthesis Support');
console.log('===================================');

if ('speechSynthesis' in window) {
    console.log('✅ Speech Synthesis is supported');

    // Load voices
    const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log(`\n📢 Found ${voices.length} voices:\n`);

        // Group voices by language
        const voicesByLang = {};
        voices.forEach(voice => {
            const lang = voice.lang.split('-')[0];
            if (!voicesByLang[lang]) {
                voicesByLang[lang] = [];
            }
            voicesByLang[lang].push(voice);
        });

        // Display voices
        Object.keys(voicesByLang).sort().forEach(lang => {
            console.log(`\n${lang.toUpperCase()}:`);
            voicesByLang[lang].forEach(voice => {
                console.log(`  - ${voice.name} (${voice.lang}) ${voice.default ? '⭐ DEFAULT' : ''}`);
            });
        });

        // Test Hindi
        console.log('\n\n🧪 Testing Hindi Voice:');
        const hindiVoices = voices.filter(v => v.lang.startsWith('hi'));
        if (hindiVoices.length > 0) {
            console.log(`✅ Found ${hindiVoices.length} Hindi voice(s):`);
            hindiVoices.forEach(v => console.log(`   - ${v.name} (${v.lang})`));

            // Test speaking in Hindi
            const utterance = new SpeechSynthesisUtterance('नमस्ते, यह एक परीक्षण है');
            utterance.voice = hindiVoices[0];
            utterance.lang = 'hi-IN';
            console.log('🔊 Speaking test phrase in Hindi...');
            window.speechSynthesis.speak(utterance);
        } else {
            console.warn('⚠️ No Hindi voices found');
        }

        // Test Assamese
        console.log('\n🧪 Testing Assamese Voice:');
        const assameseVoices = voices.filter(v => v.lang.startsWith('as'));
        if (assameseVoices.length > 0) {
            console.log(`✅ Found ${assameseVoices.length} Assamese voice(s):`);
            assameseVoices.forEach(v => console.log(`   - ${v.name} (${v.lang})`));
        } else {
            console.warn('⚠️ No Assamese voices found');
            console.log('💡 Assamese might not be supported by your browser/OS');
        }
    };

    // Voices might not be loaded immediately
    if (window.speechSynthesis.getVoices().length > 0) {
        loadVoices();
    } else {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
} else {
    console.error('❌ Speech Synthesis is NOT supported in this browser');
}
