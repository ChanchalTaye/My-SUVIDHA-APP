import re

# Read the file
with open(r'd:\wed dev\kiosk2.0\src\i18n\translations.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define admin translations for all languages
admin_translations = {
    'hi': '''
    // Admin Dashboard
    admin: "प्रशासन",
    adminConsole: "प्रशासन कंसोल",
    adminAccess: "कर्मचारी लॉगिन",
    smartCityOperations: "स्मार्ट सिटी संचालन केंद्र",
    username: "उपयोगकर्ता नाम",
    password: "पासवर्ड",
    accessDashboard: "डैशबोर्ड एक्सेस करें",
    authenticating: "प्रमाणीकरण कर रहे हैं...",
    secureAccess: "सुरक्षित एक्सेस",
    authorizedPersonnelOnly: "केवल अधिकृत कर्मचारी",
    overview: "अवलोकन",
    requests: "सेवा अनुरोध",
    complaintsManager: "शिकायतें",
    paymentsMonitor: "भुगतान",
    alertsManager: "अलर्ट",
    activeUsers: "सक्रिय उपयोगकर्ता",
    pendingRequests: "लंबित अनुरोध",
    openComplaints: "खुली शिकायतें",
    todaysRevenue: "आज का राजस्व",
    revenueToday: "राजस्व",
    searchRequests: "अनुरोध खोजें...",
    allRequests: "सभी",
    underReview: "समीक्षा में",
    approved: "स्वीकृत",
    rejected: "अस्वीकृत",
    requestId: "अनुरोध आईडी",
    applicant: "आवेदक",
    serviceType: "सेवा",
    requestDate: "तारीख",
    priority: "प्राथमिकता",
    status: "स्थिति",
    actions: "कार्रवाई",
    approve: "स्वीकृत करें",
    reject: "अस्वीकार करें",
    review: "समीक्षा",
    viewDetails: "विवरण देखें",
    searchComplaints: "शिकायतें खोजें...",
    openStatus: "खुली",
    inProgress: "प्रगति में",
    resolved: "हल",
    complaintId: "शिकायत आईडी",
    description: "विवरण",
    resolve: "हल करें",
    searchTransactions: "लेन-देन आईडी या उपभोक्ता खोजें...",
    transactionId: "लेन-देन आईडी",
    consumerId: "उपभोक्ता आईडी",
    amount: "राशि",
    time: "समय",
    paymentStatus: "स्थिति",
    viewReceipt: "रसीद देखें",
    civicAlertsManager: "नागरिक अलर्ट प्रबंधक",
    newAlert: "+ नया अलर्ट",
    createAlert: "अलर्ट बनाएं",
    alertType: "अलर्ट प्रकार",
    info: "जानकारी",
    warning: "चेतावनी",
    urgent: "अत्यावश्यक",
    alertMessage: "अलर्ट संदेश",
    publish: "प्रकाशित करें",
    removeAlert: "अलर्ट हटाएं",
    noActiveAlerts: "कोई सक्रिय अलर्ट नहीं। सिस्टम साफ है।",
''',
# Add more languages as needed
}

# Function to add admin translations after the "minutes" field in each language
for lang_code, translation in admin_translations.items():
    # Find the pattern for this language section
    pattern = rf'({lang_code}:\s*{{[^}}]+minutes:\s*"[^"]*",)'
    
    def add_translation(match):
        return match.group(1) + translation
    
    content = re.sub(pattern, add_translation, content, flags=re.DOTALL)

# Write back
with open(r'd:\wed dev\kiosk2.0\src\i18n\translations.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Translations added successfully!")
