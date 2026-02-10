// Centralized Translation System
// Supports: English (en), Hindi (hi), Assamese (as), Bengali (bn), Odia (or), Marathi (mr), Tamil (ta), Telugu (te), Gujarati (gu), Kannada (kn), Malayalam (ml), Punjabi (pa), Urdu (ur), Nepali (ne), Konkani (kok), Bodo (brx), Dogri (doi), Kashmiri (ks), Maithili (mai), Manipuri (mni), Sanskrit (sa), Santali (sat), Sindhi (sd)

export const translations = {
  en: {
    // Welcome Page
    welcome: "Welcome",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "Please Select Your Language",
    touchToStart: "Touch to Start",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "Back",
    next: "Next",
    submit: "Submit",
    cancel: "Cancel",
    confirm: "Confirm",
    close: "Close",
    home: "Home",
    help: "Help",
    logout: "End Session",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "High Contrast",
    sessionTimer: "Session Time",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "Select a Service",
    homeSubtitle: "Choose from the services below",
    dashboard: "Dashboard",
    myDashboard: "My Dashboard",
    goodAfternoon: "Good Afternoon",
    goodMorning: "Good Morning",
    goodEvening: "Good Evening",
    citizenId: "Citizen ID",
    totalDue: "Total Due",
    active: "Active",
    pending: "Pending",
    actionsRequired: "Actions Required",
    yourConnectedServices: "Your Connected Services",
    viewAll: "View All",
    recentActivity: "Recent Complaints & Activity",
    newComplaint: "New Complaint",
    linkNewService: "Link New Service",
    complaints: "Complaints",
    services: "Services",

    // Services
    electricity: "Electricity",
    gas: "Gas",
    water: "Water",
    municipal: "Municipal Services",
    sanitation: "Sanitation",

    // Service Actions
    viewBill: "View Bill",
    payBill: "Pay Bill",
    serviceInfo: "Service Information",
    registerComplaint: "Register Complaint",
    trackComplaint: "Track Complaint",
    newConnection: "New Connection",
    requestService: "Request Service",

    // Bill Payment
    lookupMethod: "Lookup Method",
    byConsumerId: "By Consumer Number",
    byMobileNumber: "By Mobile Number",
    enterConsumerId: "Enter Consumer ID",
    enterPhoneNumber: "Enter Phone Number",
    consumerIdPlaceholder: "Consumer ID / Account Number",
    phoneNumberPlaceholder: "10-digit Mobile Number",
    lookupHelperConsumer: "Enter your consumer number to view your bill",
    lookupHelperMobile: "If you don't remember your consumer number, use your registered mobile number",
    fetchBill: "Fetch Bill",
    billDetails: "Bill Details",
    consumerName: "Consumer Name",
    consumerAddress: "Address",
    billAmount: "Bill Amount",
    dueDate: "Due Date",
    billPeriod: "Billing Period",
    previousDues: "Previous Dues",
    totalAmount: "Total Amount",
    payNow: "Pay Now",

    // Payment Success
    paymentSuccess: "Payment Successful!",
    paymentSuccessMessage: "Your payment has been processed successfully",
    transactionId: "Transaction ID",
    paymentDate: "Payment Date",
    amountPaid: "Amount Paid",
    downloadReceipt: "Download Receipt",
    printReceipt: "Print Receipt",

    // Complaint Registration
    complaintTitle: "Register a Complaint",
    selectCategory: "Select Issue Category",
    categoryElectricity: "Power Outage / Electricity Issue",
    categoryGas: "Gas Supply Issue",
    categoryWater: "Water Supply / Quality Issue",
    categoryStreetlight: "Streetlight Not Working",
    categoryGarbage: "Garbage Collection Issue",
    categorySanitation: "Sanitation / Drainage Issue",
    categoryOther: "Other",
    complaintDescription: "Describe the Issue",
    descriptionPlaceholder: "Please provide details about the issue...",
    attachPhoto: "Attach Photo (Optional)",
    submitComplaint: "Submit Complaint",
    complaintSuccess: "Complaint Registered Successfully",
    complaintTicketId: "Complaint Ticket ID",
    complaintMessage: "Your complaint has been registered. Please note the ticket ID for tracking.",

    // Municipal Services
    municipalTitle: "Municipal Services",
    grievanceRegistration: "Register Complaint",
    trackGrievance: "Track Complaint Status",
    emergencyInfo: "Emergency Information",
    advisories: "Public Advisories",

    // Help
    helpTitle: "Help & Support",
    helpContact: "Contact Information",
    helpline: "Helpline",
    email: "Email",
    operatingHours: "Operating Hours",
    helpHours: "24/7 Available",
    faq: "Frequently Asked Questions",

    // Session & Privacy
    sessionTimeout: "Session Timeout",
    sessionTimeoutMessage: "Your session will expire in",
    sessionExpired: "Session Expired",
    sessionExpiredMessage: "Your session has expired. Returning to home screen...",
    privacyNotice: "Privacy Notice",
    privacyMessage: "Your data is secure and will be used only for service delivery.",

    // Status Messages
    loading: "Loading...",
    processing: "Processing...",
    success: "Success",
    error: "Error",
    noDataFound: "No data found",
    tryAgain: "Try Again",

    // Currency
    currency: "₹",

    // Time
    seconds: "seconds",
    minutes: "minutes",

    // Admin Dashboard
    admin: "Admin",
    adminConsole: "Admin Console",
    adminAccess: "Staff Login",
    smartCityOperations: "Smart City Operations Center",
    username: "Username",
    password: "Password",
    accessDashboard: "Access Dashboard",
    authenticating: "Authenticating...",
    secureAccess: "Secure Access",
    authorizedPersonnelOnly: "Authorized Personnel Only",

    // Admin Navigation
    overview: "Overview",
    requests: "Service Requests",
    complaintsManager: "Complaints",
    paymentsMonitor: "Payments",
    alertsManager: "Alerts",

    // Admin Stats
    activeUsers: "Active Users",
    pendingRequests: "Pending Requests",
    openComplaints: "Open Complaints",
    todaysRevenue: "Today's Revenue",
    revenueToday: "Revenue",

    // Service Request Manager
    searchRequests: "Search Requests...",
    allRequests: "All",
    underReview: "Under Review",
    approved: "Approved",
    rejected: "Rejected",
    requestId: "Request ID",
    applicant: "Applicant",
    serviceType: "Service",
    requestDate: "Date",
    priority: "Priority",
    status: "Status",
    actions: "Actions",
    approve: "Approve",
    reject: "Reject",
    review: "Review",
    viewDetails: "View Details",


    // Complaint Manager
    searchComplaints: "Search Complaints...",
    openStatus: "Open",
    inProgress: "In Progress",
    resolved: "Resolved",
    complaintId: "Complaint ID",
    description: "Description",
    resolve: "Resolve",

    // Payments Monitor
    searchTransactions: "Search Transaction ID or Consumer...",
    transactionId: "Transaction ID",
    consumerId: "Consumer ID",
    amount: "Amount",
    time: "Time",
    paymentStatus: "Status",
    viewReceipt: "View Receipt",

    // Alerts Manager
    civicAlertsManager: "Civic Alerts Manager",
    newAlert: "+ New Alert",
    createAlert: "Create Alert",
    alertType: "Alert Type",
    info: "Info",
    warning: "Warning",
    urgent: "Urgent",
    alertMessage: "Alert Message",
    publish: "Publish",
    removeAlert: "Remove Alert",
    noActiveAlerts: "No active alerts. The system is clear.",

    // Voice Guidance
    voiceWelcome: "Welcome to My SUVIDHA APP",
    voiceViewingElectricity: "You are viewing Electricity",
    voiceViewingGas: "You are viewing Gas",
    voiceViewingWater: "You are viewing Water",
    voiceViewingMunicipal: "You are viewing Municipal Services",
    voiceViewingHelp: "You are viewing Help",
    voiceViewingStatus: "You are viewing My Dashboard",
    voiceViewingBill: "You are viewing bill",
    voiceRegisterComplaint: "You are registering a complaint",
    voiceNewConnection: "You are requesting a new connection",
    voiceServiceInfo: "You are viewing service information",
  },

  hi: {
    // Welcome Page
    welcome: "स्वागत है",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "कृपया अपनी भाषा चुनें",
    touchToStart: "शुरू करने के लिए स्पर्श करें",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "वापस",
    next: "आगे",
    submit: "जमा करें",
    cancel: "रद्द करें",
    confirm: "पुष्टि करें",
    close: "बंद करें",
    home: "होम",
    help: "सहायता",
    logout: "सत्र समाप्त करें",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "उच्च कंट्रास्ट",
    sessionTimer: "सत्र समय",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "एक सेवा चुनें",
    homeSubtitle: "नीचे दी गई सेवाओं में से चुनें",
    dashboard: "डैशबोर्ड",
    myDashboard: "मेरा डैशबोर्ड",
    goodAfternoon: "शुभ दोपहर",
    goodMorning: "शुभ प्रभात",
    goodEvening: "शुभ संध्या",
    citizenId: "नागरिक आईडी",
    totalDue: "कुल देय",
    active: "सक्रिय",
    pending: "लंबित",
    actionsRequired: "आवश्यक कार्रवाई",
    yourConnectedServices: "आपकी जुड़ी सेवाएं",
    viewAll: "सभी देखें",
    recentActivity: "हाल की शिकायतें और गतिविधि",
    newComplaint: "नई शिकायत",
    linkNewService: "नई सेवा जोड़ें",
    complaints: "शिकायतें",
    services: "सेवाएं",

    // Services
    electricity: "बिजली",
    gas: "गैस",
    water: "पानी",
    municipal: "नगरपालिका सेवाएं",
    sanitation: "स्वच्छता",

    // Service Actions
    viewBill: "बिल देखें",
    payBill: "बिल भुगतान",
    serviceInfo: "सेवा जानकारी",
    registerComplaint: "शिकायत दर्ज करें",
    trackComplaint: "शिकायत ट्रैक करें",
    newConnection: "नया कनेक्शन",
    requestService: "सेवा अनुरोध",

    // Bill Payment
    lookupMethod: "खोज विधि",
    byConsumerId: "उपभोक्ता संख्या द्वारा",
    byMobileNumber: "मोबाइल नंबर द्वारा",
    enterConsumerId: "उपभोक्ता आईडी दर्ज करें",
    enterPhoneNumber: "फोन नंबर दर्ज करें",
    consumerIdPlaceholder: "उपभोक्ता आईडी / खाता संख्या",
    phoneNumberPlaceholder: "10 अंकों का मोबाइल नंबर",
    lookupHelperConsumer: "अपना बिल देखने के लिए अपना उपभोक्ता नंबर दर्ज करें",
    lookupHelperMobile: "यदि आपको अपना उपभोक्ता नंबर याद नहीं है, तो अपना पंजीकृत मोबाइल नंबर उपयोग करें",
    fetchBill: "बिल प्राप्त करें",
    billDetails: "बिल विवरण",
    consumerName: "उपभोक्ता का नाम",
    consumerAddress: "पता",
    billAmount: "बिल राशि",
    dueDate: "नियत तारीख",
    billPeriod: "बिलिंग अवधि",
    previousDues: "पिछले बकाया",
    totalAmount: "कुल राशि",
    payNow: "अभी भुगतान करें",

    // Payment Success
    paymentSuccess: "भुगतान सफल!",
    paymentSuccessMessage: "आपका भुगतान सफलतापूर्वक संसाधित किया गया है",
    transactionId: "लेनदेन आईडी",
    paymentDate: "भुगतान तिथि",
    amountPaid: "भुगतान की गई राशि",
    downloadReceipt: "रसीद डाउनलोड करें",
    printReceipt: "रसीद प्रिंट करें",

    // Complaint Registration
    complaintTitle: "शिकायत दर्ज करें",
    selectCategory: "समस्या श्रेणी चुनें",
    categoryElectricity: "बिजली कटौती / बिजली की समस्या",
    categoryGas: "गैस आपूर्ति समस्या",
    categoryWater: "पानी की आपूर्ति / गुणवत्ता समस्या",
    categoryStreetlight: "स्ट्रीटलाइट काम नहीं कर रही",
    categoryGarbage: "कचरा संग्रहण समस्या",
    categorySanitation: "स्वच्छता / जल निकासी समस्या",
    categoryOther: "अन्य",
    complaintDescription: "समस्या का वर्णन करें",
    descriptionPlaceholder: "कृपया समस्या के बारे में विवरण प्रदान करें...",
    attachPhoto: "फोटो संलग्न करें (वैकल्पिक)",
    submitComplaint: "शिकायत जमा करें",
    complaintSuccess: "शिकायत सफलतापूर्वक दर्ज की गई",
    complaintTicketId: "शिकायत टिकट आईडी",
    complaintMessage: "आपकी शिकायत दर्ज कर ली गई है। ट्रैकिंग के लिए टिकट आईडी नोट करें।",

    // Municipal Services
    municipalTitle: "नगरपालिका सेवाएं",
    grievanceRegistration: "शिकायत पंजीकरण",
    trackGrievance: "शिकायत स्थिति ट्रैक करें",
    emergencyInfo: "आपातकालीन जानकारी",
    advisories: "सार्वजनिक सलाह",

    // Help
    helpTitle: "सहायता और समर्थन",
    helpContact: "संपर्क जानकारी",
    helpline: "हेल्पलाइन",
    email: "ईमेल",
    operatingHours: "कार्य समय",
    helpHours: "24/7 उपलब्ध",
    faq: "अक्सर पूछे जाने वाले प्रश्न",

    // Session & Privacy
    sessionTimeout: "सत्र समय समाप्त",
    sessionTimeoutMessage: "आपका सत्र समाप्त हो जाएगा",
    sessionExpired: "सत्र समाप्त हो गया",
    sessionExpiredMessage: "आपका सत्र समाप्त हो गया है। होम स्क्रीन पर लौट रहे हैं...",
    privacyNotice: "गोपनीयता सूचना",
    privacyMessage: "आपका डेटा सुरक्षित है और केवल सेवा वितरण के लिए उपयोग किया जाएगा।",

    // Status Messages
    loading: "लोड हो रहा है...",
    processing: "प्रसंस्करण...",
    success: "सफलता",
    error: "त्रुटि",
    noDataFound: "कोई डेटा नहीं मिला",
    tryAgain: "पुनः प्रयास करें",

    // Currency
    currency: "₹",

    // Time
    seconds: "सेकंड",
    minutes: "मिनट",

    // Voice Guidance
    voiceWelcome: "My SUVIDHA APP में आपका स्वागत है",
    voiceViewingElectricity: "आप बिजली देख रहे हैं",
    voiceViewingGas: "आप गैस देख रहे हैं",
    voiceViewingWater: "आप पानी देख रहे हैं",
    voiceViewingMunicipal: "आप नगरपालिका सेवाएं देख रहे हैं",
    voiceViewingHelp: "आप सहायता देख रहे हैं",
    voiceViewingStatus: "आप मेरा डैशबोर्ड देख रहे हैं",
    voiceViewingBill: "आप बिल देख रहे हैं",
    voiceRegisterComplaint: "आप शिकायत दर्ज कर रहे हैं",
    voiceNewConnection: "आप नया कनेक्शन का अनुरोध कर रहे हैं",
    voiceServiceInfo: "आप सेवा जानकारी देख रहे हैं",
  },

  as: {
    // Welcome Page
    welcome: "স্বাগতম",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "অনুগ্ৰহ কৰি আপোনাৰ ভাষা নিৰ্বাচন কৰক",
    touchToStart: "আৰম্ভ কৰিবলৈ স্পৰ্শ কৰক",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "পিছলৈ",
    next: "আগলৈ",
    submit: "দাখিল কৰক",
    cancel: "বাতিল কৰক",
    confirm: "নিশ্চিত কৰক",
    close: "বন্ধ কৰক",
    home: "গৃহ",
    help: "সহায়",
    logout: "অধিবেশন সমাপ্ত কৰক",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "উচ্চ বৈপৰীত্য",
    sessionTimer: "অধিবেশন সময়",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "এটা সেৱা নিৰ্বাচন কৰক",
    homeSubtitle: "তলৰ সেৱাসমূহৰ পৰা বাছনি কৰক",
    dashboard: "ডেশব'ৰ্ড",
    myDashboard: "মোৰ ডেশব'ৰ্ড",
    goodAfternoon: "শুভ দুপৰীয়া",
    goodMorning: "সু প্ৰভাত",
    goodEvening: "শুভ সন্ধিয়া",
    citizenId: "নাগৰিক পৰিচয়",
    totalDue: "মুঠ বকেয়া",
    active: "সক্ৰিয়",
    pending: "বকেয়া",
    actionsRequired: "প্ৰয়োজনীয় পদক্ষেপ",
    yourConnectedServices: "আপোনাৰ সংযোগিত সেৱাসমূহ",
    viewAll: "সকলো চাওক",
    recentActivity: "শেহতীয়া অভিযোগ আৰু কাৰ্যকলাপ",
    newComplaint: "নতুন অভিযোগ",
    linkNewService: "নতুন সেৱা সংযোগ কৰক",
    complaints: "অভিযোগসমূহ",
    services: "সেৱাসমূহ",

    // Services
    electricity: "বিদ্যুৎ",
    gas: "গেছ",
    water: "পানী",
    municipal: "পৌৰসেৱা",
    sanitation: "পৰিচ্ছন্নতা",

    // Service Actions
    viewBill: "বিল চাওক",
    payBill: "বিল পৰিশোধ",
    serviceInfo: "সেৱা তথ্য",
    registerComplaint: "অভিযোগ পঞ্জীয়ন কৰক",
    trackComplaint: "অভিযোগ ট্ৰেক কৰক",
    newConnection: "নতুন সংযোগ",
    requestService: "সেৱা অনুৰোধ",

    // Bill Payment
    lookupMethod: "সন্ধান পদ্ধতি",
    byConsumerId: "গ্ৰাহক সংখ্যাৰ দ্বাৰা",
    byMobileNumber: "মোবাইল নম্বৰৰ দ্বাৰা",
    enterConsumerId: "গ্ৰাহক আইডি দিয়ক",
    enterPhoneNumber: "ফোন নম্বৰ দিয়ক",
    consumerIdPlaceholder: "গ্ৰাহক আইডি / একাউণ্ট নম্বৰ",
    phoneNumberPlaceholder: "১০ সংখ্যাৰ মোবাইল নম্বৰ",
    lookupHelperConsumer: "আপোনাৰ বিল চাবলৈ আপোনাৰ গ্ৰাহক নম্বৰ দিয়ক",
    lookupHelperMobile: "যদি আপুনি আপোনাৰ গ্ৰাহক নম্বৰ মনত নাই, আপোনাৰ পঞ্জীকৃত মোবাইল নম্বৰ ব্যৱহাৰ কৰক",
    fetchBill: "বিল আনক",
    billDetails: "বিলৰ বিৱৰণ",
    consumerName: "গ্ৰাহকৰ নাম",
    consumerAddress: "ঠিকনা",
    billAmount: "বিলৰ পৰিমাণ",
    dueDate: "নিৰ্ধাৰিত তাৰিখ",
    billPeriod: "বিলিং সময়",
    previousDues: "পূৰ্বৰ বকেয়া",
    totalAmount: "মুঠ পৰিমাণ",
    payNow: "এতিয়াই পৰিশোধ কৰক",

    // Payment Success
    paymentSuccess: "পৰিশোধ সফল!",
    paymentSuccessMessage: "আপোনাৰ পৰিশোধ সফলতাৰে সম্পন্ন হৈছে",
    transactionId: "লেনদেন আইডি",
    paymentDate: "পৰিশোধৰ তাৰিখ",
    amountPaid: "পৰিশোধ কৰা পৰিমাণ",
    downloadReceipt: "ৰচিদ ডাউনলোড কৰক",
    printReceipt: "ৰচিদ প্ৰিণ্ট কৰক",

    // Complaint Registration
    complaintTitle: "অভিযোগ পঞ্জীয়ন কৰক",
    selectCategory: "সমস্যা শ্ৰেণী নিৰ্বাচন কৰক",
    categoryElectricity: "বিদ্যুৎ বিভ্ৰাট / বিদ্যুৎ সমস্যা",
    categoryGas: "গেছ যোগান সমস্যা",
    categoryWater: "পানী যোগান / গুণগত সমস্যা",
    categoryStreetlight: "ৰাস্তাৰ বাতি কাম নকৰে",
    categoryGarbage: "আৱৰ্জনা সংগ্ৰহ সমস্যা",
    categorySanitation: "পৰিচ্ছন্নতা / নলা সমস্যা",
    categoryOther: "অন্যান্য",
    complaintDescription: "সমস্যাৰ বৰ্ণনা কৰক",
    descriptionPlaceholder: "অনুগ্ৰহ কৰি সমস্যাৰ বিষয়ে বিৱৰণ দিয়ক...",
    attachPhoto: "ফটো সংলগ্ন কৰক (ঐচ্ছিক)",
    submitComplaint: "অভিযোগ দাখিল কৰক",
    complaintSuccess: "অভিযোগ সফলতাৰে পঞ্জীয়ন হৈছে",
    complaintTicketId: "অভিযোগ টিকট আইডি",
    complaintMessage: "আপোনাৰ অভিযোগ পঞ্জীয়ন কৰা হৈছে। ট্ৰেকিঙৰ বাবে টিকট আইডি টোকা লওক।",

    // Municipal Services
    municipalTitle: "পৌৰসেৱা",
    grievanceRegistration: "অভিযোগ পঞ্জীয়ন",
    trackGrievance: "অভিযোগৰ স্থিতি ট্ৰেক কৰক",
    emergencyInfo: "জৰুৰীকালীন তথ্য",
    advisories: "ৰাজহুৱা পৰামৰ্শ",

    // Help
    helpTitle: "সহায় আৰু সমৰ্থন",
    helpContact: "যোগাযোগৰ তথ্য",
    helpline: "হেল্পলাইন",
    email: "ইমেইল",
    operatingHours: "কাৰ্যকৰী সময়",
    helpHours: "২৪/৭ উপলব্ধ",
    faq: "সঘনাই সোধা প্ৰশ্ন",

    // Session & Privacy
    sessionTimeout: "অধিবেশন সময় শেষ",
    sessionTimeoutMessage: "আপোনাৰ অধিবেশন সমাপ্ত হ'ব",
    sessionExpired: "অধিবেশন সমাপ্ত হৈছে",
    sessionExpiredMessage: "আপোনাৰ অধিবেশন সমাপ্ত হৈছে। গৃহ পৰ্দালৈ উভতি যোৱা হৈছে...",
    privacyNotice: "গোপনীয়তা জাননী",
    privacyMessage: "আপোনাৰ তথ্য সুৰক্ষিত আৰু কেৱল সেৱা প্ৰদানৰ বাবে ব্যৱহাৰ কৰা হ'ব।",

    // Status Messages
    loading: "ল'ড হৈ আছে...",
    processing: "প্ৰক্ৰিয়াকৰণ...",
    success: "সফলতা",
    error: "ত্ৰুটি",
    noDataFound: "কোনো তথ্য পোৱা নগ'ল",
    tryAgain: "পুনৰ চেষ্টা কৰক",

    // Currency
    currency: "₹",

    // Time
    seconds: "ছেকেণ্ড",
    minutes: "মিনিট",

    // Voice Guidance
    voiceWelcome: "My SUVIDHA APP লৈ স্বাগতম",
    voiceViewingElectricity: "আপুনি বিদ্যুৎ চাই আছে",
    voiceViewingGas: "আপুনি গেছ চাই আছে",
    voiceViewingWater: "আপুনি পানী চাই আছে",
    voiceViewingBill: "আপুনি বিল চাই আছে",
    voiceRegisterComplaint: "আপুনি অভিযোগ পঞ্জীয়ন কৰি আছে",
    voiceNewConnection: "আপুনি নতুন সংযোগৰ অনুৰোধ কৰি আছে",
    voiceServiceInfo: "আপুনি সেৱা তথ্য চাই আছে",
  },

  bn: {
    // Welcome Page
    welcome: "স্বাগতম",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "অনুগ্রহ করে আপনার ভাষা নির্বাচন করুন",
    touchToStart: "শুরু করতে স্পর্শ করুন",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",
    bengali: "বাংলা",
    odia: "ଓଡ଼ିଆ",

    // Common
    back: "পিছনে",
    next: "পরবর্তী",
    submit: "জমা দিন",
    cancel: "বাতিল করুন",
    confirm: "নিশ্চিত করুন",
    close: "বন্ধ করুন",
    home: "হোম",
    help: "সাহায্য",
    logout: "সেশন শেষ করুন",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "উচ্চ বৈসাদৃশ্য",
    sessionTimer: "সেশন সময়",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "একটি সেবা নির্বাচন করুন",
    homeSubtitle: "নিচের সেবাগুলি থেকে বেছে নিন",
    dashboard: "ড্যাশবোর্ড",
    myDashboard: "আমার ড্যাশবোর্ড",
    goodAfternoon: "শুভ বিকেল",
    goodMorning: "শুভ প্রভাত",
    goodEvening: "শুভ সন্ধ্যা",
    citizenId: "নাগরিক আইডি",
    totalDue: "মোট বকেয়া",
    active: "সক্রিয়",
    pending: "অমীমাংসিত",
    actionsRequired: "প্রয়োজনীয় পদক্ষেপ",
    yourConnectedServices: "আপনার সংযুক্ত পরিষেবাসমূহ",
    viewAll: "সব দেখুন",
    recentActivity: "সাম্প্রতিক অভিযোগ এবং কার্যকলাপ",
    newComplaint: "নতুন অভিযোগ",
    linkNewService: "নতুন পরিষেবা লিঙ্ক করুন",
    complaints: "অভিযোগ",
    services: "পরিষেবা",

    // Services
    electricity: "বিদ্যুৎ",
    gas: "গ্যাস",
    water: "জল",
    municipal: "পৌর সেবা",
    sanitation: "স্যানিটেশন",

    // Service Actions
    viewBill: "বিল দেখুন",
    payBill: "বিল পরিশোধ করুন",
    serviceInfo: "সেবা তথ্য",
    registerComplaint: "অভিযোগ নিবন্ধন করুন",
    trackComplaint: "অভিযোগ ট্র্যাক করুন",
    newConnection: "নতুন সংযোগ",
    requestService: "সেবা অনুরোধ",

    // Bill Payment
    lookupMethod: "অনুসন্ধান পদ্ধতি",
    byConsumerId: "ভোক্তা নম্বর দ্বারা",
    byMobileNumber: "মোবাইল নম্বর দ্বারা",
    enterConsumerId: "ভোক্তা আইডি লিখুন",
    enterPhoneNumber: "ফোন নম্বর লিখুন",
    consumerIdPlaceholder: "ভোক্তা আইডি / অ্যাকাউন্ট নম্বর",
    phoneNumberPlaceholder: "১০ সংখ্যার মোবাইল নম্বর",
    lookupHelperConsumer: "আপনার বিল দেখতে আপনার ভোক্তা নম্বর লিখুন",
    lookupHelperMobile: "আপনি যদি আপনার ভোক্তা নম্বর মনে না রাখেন, আপনার নিবন্ধিত মোবাইল নম্বর ব্যবহার করুন",
    fetchBill: "বিল আনুন",
    billDetails: "বিলের বিবরণ",
    consumerName: "ভোক্তার নাম",
    consumerAddress: "ঠিকানা",
    billAmount: "বিলের পরিমাণ",
    dueDate: "নির্ধারিত তারিখ",
    billPeriod: "বিলিং সময়কাল",
    previousDues: "পূর্ববর্তী বকেয়া",
    totalAmount: "মোট পরিমাণ",
    payNow: "এখনই পরিশোধ করুন",

    // Payment Success
    paymentSuccess: "পেমেন্ট সফল!",
    paymentSuccessMessage: "আপনার পেমেন্ট সফলভাবে প্রক্রিয়া করা হয়েছে",
    transactionId: "লেনদেন আইডি",
    paymentDate: "পেমেন্টের তারিখ",
    amountPaid: "পরিশোধিত পরিমাণ",
    downloadReceipt: "রসিদ ডাউনলোড করুন",
    printReceipt: "রসিদ প্রিন্ট করুন",

    // Complaint Registration
    complaintTitle: "অভিযোগ নিবন্ধন করুন",
    selectCategory: "সমস্যা বিভাগ নির্বাচন করুন",
    categoryElectricity: "বিদ্যুৎ বিভ্রাট / বিদ্যুতের সমস্যা",
    categoryGas: "গ্যাস সরবরাহ সমস্যা",
    categoryWater: "জল সরবরাহ / গুণমান সমস্যা",
    categoryStreetlight: "রাস্তার বাতি কাজ করছে না",
    categoryGarbage: "আবর্জনা সংগ্রহ সমস্যা",
    categorySanitation: "স্যানিটেশন / নিকাশী সমস্যা",
    categoryOther: "অন্যান্য",
    complaintDescription: "সমস্যার বর্ণনা দিন",
    descriptionPlaceholder: "অনুগ্রহ করে সমস্যা সম্পর্কে বিস্তারিত প্রদান করুন...",
    attachPhoto: "ফটো সংযুক্ত করুন (ঐচ্ছিক)",
    submitComplaint: "অভিযোগ জমা দিন",
    complaintSuccess: "অভিযোগ সফলভাবে নিবন্ধিত হয়েছে",
    complaintTicketId: "অভিযোগ টিকিট আইডি",
    complaintMessage: "আপনার অভিযোগ নিবন্ধিত হয়েছে। ট্র্যাকিংয়ের জন্য টিকিট আইডি নোট করুন।",

    // Municipal Services
    municipalTitle: "পৌর সেবা",
    grievanceRegistration: "অভিযোগ নিবন্ধন",
    trackGrievance: "অভিযোগের স্থিতি ট্র্যাক করুন",
    emergencyInfo: "জরুরি তথ্য",
    advisories: "জনসাধারণের পরামর্শ",

    // Help
    helpTitle: "সাহায্য ও সহায়তা",
    helpContact: "যোগাযোগের তথ্য",
    helpline: "হেল্পলাইন",
    email: "ইমেল",
    operatingHours: "কার্যকরী সময়",
    helpHours: "২৪/৭ উপলব্ধ",
    faq: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",

    // Session & Privacy
    sessionTimeout: "সেশন টাইমআউট",
    sessionTimeoutMessage: "আপনার সেশন শেষ হবে",
    sessionExpired: "সেশন শেষ হয়েছে",
    sessionExpiredMessage: "আপনার সেশন শেষ হয়েছে। হোম স্ক্রিনে ফিরে যাচ্ছে...",
    privacyNotice: "গোপনীয়তা বিজ্ঞপ্তি",
    privacyMessage: "আপনার ডেটা সুরক্ষিত এবং শুধুমাত্র সেবা প্রদানের জন্য ব্যবহার করা হবে।",

    // Status Messages
    loading: "লোড হচ্ছে...",
    processing: "প্রক্রিয়াকরণ...",
    success: "সফল",
    error: "ত্রুটি",
    noDataFound: "কোনো ডেটা পাওয়া যায়নি",
    tryAgain: "আবার চেষ্টা করুন",

    // Currency
    currency: "₹",

    // Time
    seconds: "সেকেন্ড",
    minutes: "মিনিট",

    // Voice Guidance
    voiceWelcome: "My SUVIDHA APP-এ আপনাকে স্বাগতম",
    voiceViewingElectricity: "আপনি বিদ্যুৎ দেখছেন",
    voiceViewingGas: "আপনি গ্যাস দেখছেন",
    voiceViewingWater: "আপনি জল দেখছেন",
    voiceViewingMunicipal: "আপনি পৌর সেবা দেখছেন",
    voiceViewingHelp: "আপনি সাহায্য দেখছেন",
    voiceViewingStatus: "আপনি আমার ড্যাশবোর্ড দেখছেন",
    voiceViewingBill: "আপনি বিল দেখছেন",
    voiceRegisterComplaint: "আপনি অভিযোগ নিবন্ধন করছেন",
    voiceNewConnection: "আপনি নতুন সংযোগের অনুরোধ করছেন",
    voiceServiceInfo: "আপনি সেবা তথ্য দেখছেন",
  },

  or: {
    // Welcome Page
    welcome: "ସ୍ୱାଗତ",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "ଦୟାକରି ଆପଣଙ୍କ ଭାଷା ଚୟନ କରନ୍ତୁ",
    touchToStart: "ଆରମ୍ଭ କରିବାକୁ ସ୍ପର୍ଶ କରନ୍ତୁ",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",
    bengali: "বাংলা",
    odia: "ଓଡ଼ିଆ",

    // Common
    back: "ପଛକୁ",
    next: "ପରବର୍ତ୍ତୀ",
    submit: "ଦାଖଲ କରନ୍ତୁ",
    cancel: "ବାତିଲ କରନ୍ତୁ",
    confirm: "ନିଶ୍ଚିତ କରନ୍ତୁ",
    close: "ବନ୍ଦ କରନ୍ତୁ",
    home: "ହୋମ",
    help: "ସାହାଯ୍ୟ",
    logout: "ଅଧିବେଶନ ସମାପ୍ତ କରନ୍ତୁ",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ଉଚ୍ଚ ବିପରୀତତା",
    sessionTimer: "ଅଧିବେଶନ ସମୟ",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "ଗୋଟିଏ ସେବା ଚୟନ କରନ୍ତୁ",
    homeSubtitle: "ନିମ୍ନରୁ ସେବା ଚୟନ କରନ୍ତୁ",
    dashboard: "ଡ୍ୟାସବୋର୍ଡ",
    myDashboard: "ମୋର ଡ୍ୟାସବୋର୍ଡ",
    goodAfternoon: "ଶୁଭ ଅପରାହ୍ନ",
    goodMorning: "ଶୁଭ ସକାଳ",
    goodEvening: "ଶୁଭ ସନ୍ଧ୍ୟା",
    citizenId: "ନାଗରିକ ପରିଚୟ",
    totalDue: "ମୋଟ ବକେୟା",
    active: "ସକ୍ରିୟ",
    pending: "ବକେୟା",
    actionsRequired: "ଆବଶ୍ୟକୀୟ ପଦକ୍ଷେପ",
    yourConnectedServices: "ଆପଣଙ୍କ ସଂଯୁକ୍ତ ସେବା",
    viewAll: "ସମସ୍ତ ଦେଖନ୍ତୁ",
    recentActivity: "ସାମ୍ପ୍ରତିକ ଅଭିଯୋଗ ଏବଂ କାର୍ଯ୍ୟକଳାପ",
    newComplaint: "ନୂତନ ଅଭିଯୋଗ",
    linkNewService: "ନୂତନ ସେବା ଲିଙ୍କ କରନ୍ତୁ",
    complaints: "ଅଭିଯୋଗଗୁଡିକ",
    services: "ସେବାଗୁଡିକ",

    // Services
    electricity: "ବିଦ୍ୟୁତ",
    gas: "ଗ୍ୟାସ",
    water: "ଜଳ",
    municipal: "ପୌର ସେବା",
    sanitation: "ପରିମଳ",

    // Service Actions
    viewBill: "ବିଲ ଦେଖନ୍ତୁ",
    payBill: "ବିଲ ପରିଶୋଧ କରନ୍ତୁ",
    serviceInfo: "ସେବା ସୂଚନା",
    registerComplaint: "ଅଭିଯୋଗ ପଞ୍ଜୀକରଣ କରନ୍ତୁ",
    trackComplaint: "ଅଭିଯୋଗ ଟ୍ରାକ କରନ୍ତୁ",
    newConnection: "ନୂତନ ସଂଯୋଗ",
    requestService: "ସେବା ଅନୁରୋଧ",

    // Bill Payment
    lookupMethod: "ଖୋଜ ପଦ୍ଧତି",
    byConsumerId: "ଗ୍ରାହକ ସଂଖ୍ୟା ଦ୍ୱାରା",
    byMobileNumber: "ମୋବାଇଲ ନମ୍ବର ଦ୍ୱାରା",
    enterConsumerId: "ଗ୍ରାହକ ଆଇଡି ପ୍ରବେଶ କରନ୍ତୁ",
    enterPhoneNumber: "ଫୋନ ନମ୍ବର ପ୍ରବେଶ କରନ୍ତୁ",
    consumerIdPlaceholder: "ଗ୍ରାହକ ଆଇଡି / ଖାତା ସଂଖ୍ୟା",
    phoneNumberPlaceholder: "୧୦ ଅଙ୍କର ମୋବାଇଲ ନମ୍ବର",
    lookupHelperConsumer: "ଆପଣଙ୍କ ବିଲ ଦେଖିବାକୁ ଆପଣଙ୍କ ଗ୍ରାହକ ନମ୍ବର ପ୍ରବେଶ କରନ୍ତୁ",
    lookupHelperMobile: "ଯଦି ଆପଣ ଆପଣଙ୍କ ଗ୍ରାହକ ନମ୍ବର ମନେ ରଖିନାହାଁନ୍ତି, ଆପଣଙ୍କ ପଞ୍ଜୀକୃତ ମୋବାଇଲ ନମ୍ବର ବ୍ୟବହାର କରନ୍ତୁ",
    fetchBill: "ବିଲ ଆଣନ୍ତୁ",
    billDetails: "ବିଲ ବିବରଣୀ",
    consumerName: "ଗ୍ରାହକଙ୍କ ନାମ",
    consumerAddress: "ଠିକଣା",
    billAmount: "ବିଲ ପରିମାଣ",
    dueDate: "ନିର୍ଦ୍ଧାରିତ ତାରିଖ",
    billPeriod: "ବିଲିଂ ଅବଧି",
    previousDues: "ପୂର୍ବ ବକେୟା",
    totalAmount: "ମୋଟ ପରିମାଣ",
    payNow: "ବର୍ତ୍ତମାନ ପରିଶୋଧ କରନ୍ତୁ",

    // Payment Success
    paymentSuccess: "ପେମେଣ୍ଟ ସଫଳ!",
    paymentSuccessMessage: "ଆପଣଙ୍କ ପେମେଣ୍ଟ ସଫଳତାର ସହିତ ପ୍ରକ୍ରିୟା କରାଯାଇଛି",
    transactionId: "କାରବାର ଆଇଡି",
    paymentDate: "ପେମେଣ୍ଟ ତାରିଖ",
    amountPaid: "ପରିଶୋଧିତ ପରିମାଣ",
    downloadReceipt: "ରସିଦ ଡାଉନଲୋଡ କରନ୍ତୁ",
    printReceipt: "ରସିଦ ପ୍ରିଣ୍ଟ କରନ୍ତୁ",

    // Complaint Registration
    complaintTitle: "ଅଭିଯୋଗ ପଞ୍ଜୀକରଣ କରନ୍ତୁ",
    selectCategory: "ସମସ୍ୟା ବିଭାଗ ଚୟନ କରନ୍ତୁ",
    categoryElectricity: "ବିଦ୍ୟୁତ ବିଭ୍ରାଟ / ବିଦ୍ୟୁତ ସମସ୍ୟା",
    categoryGas: "ଗ୍ୟାସ ଯୋଗାଣ ସମସ୍ୟା",
    categoryWater: "ଜଳ ଯୋଗାଣ / ଗୁଣବତ୍ତା ସମସ୍ୟା",
    categoryStreetlight: "ରାସ୍ତା ବତ୍ତି କାମ କରୁନାହିଁ",
    categoryGarbage: "ଆବର୍ଜନା ସଂଗ୍ରହ ସମସ୍ୟା",
    categorySanitation: "ପରିମଳ / ନିଷ୍କାସନ ସମସ୍ୟା",
    categoryOther: "ଅନ୍ୟାନ୍ୟ",
    complaintDescription: "ସମସ୍ୟାର ବର୍ଣ୍ଣନା କରନ୍ତୁ",
    descriptionPlaceholder: "ଦୟାକରି ସମସ୍ୟା ବିଷୟରେ ବିବରଣୀ ପ୍ରଦାନ କରନ୍ତୁ...",
    attachPhoto: "ଫଟୋ ସଂଲଗ୍ନ କରନ୍ତୁ (ବୈକଳ୍ପିକ)",
    submitComplaint: "ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ",
    complaintSuccess: "ଅଭିଯୋଗ ସଫଳତାର ସହିତ ପଞ୍ଜୀକୃତ ହୋଇଛି",
    complaintTicketId: "ଅଭିଯୋଗ ଟିକେଟ ଆଇଡି",
    complaintMessage: "ଆପଣଙ୍କ ଅଭିଯୋଗ ପଞ୍ଜୀକୃତ ହୋଇଛି। ଟ୍ରାକିଂ ପାଇଁ ଟିକେଟ ଆଇଡି ନୋଟ କରନ୍ତୁ।",

    // Municipal Services
    municipalTitle: "ପୌର ସେବା",
    grievanceRegistration: "ଅଭିଯୋଗ ପଞ୍ଜୀକରଣ",
    trackGrievance: "ଅଭିଯୋଗ ସ୍ଥିତି ଟ୍ରାକ କରନ୍ତୁ",
    emergencyInfo: "ଜରୁରୀକାଳୀନ ସୂଚନା",
    advisories: "ସାର୍ବଜନୀନ ପରାମର୍ଶ",

    // Help
    helpTitle: "ସାହାଯ୍ୟ ଏବଂ ସମର୍ଥନ",
    helpContact: "ଯୋଗାଯୋଗ ସୂଚନା",
    helpline: "ହେଲ୍ପଲାଇନ",
    email: "ଇମେଲ",
    operatingHours: "କାର୍ଯ୍ୟକାରୀ ସମୟ",
    helpHours: "୨୪/୭ ଉପଲବ୍ଧ",
    faq: "ବାରମ୍ବାର ପଚରାଯାଉଥିବା ପ୍ରଶ୍ନ",

    // Session & Privacy
    sessionTimeout: "ଅଧିବେଶନ ସମୟ ସମାପ୍ତ",
    sessionTimeoutMessage: "ଆପଣଙ୍କ ଅଧିବେଶନ ସମାପ୍ତ ହେବ",
    sessionExpired: "ଅଧିବେଶନ ସମାପ୍ତ ହୋଇଛି",
    sessionExpiredMessage: "ଆପଣଙ୍କ ଅଧିବେଶନ ସମାପ୍ତ ହୋଇଛି। ହୋମ ସ୍କ୍ରିନକୁ ଫେରୁଛି...",
    privacyNotice: "ଗୋପନୀୟତା ବିଜ୍ଞପ୍ତି",
    privacyMessage: "ଆପଣଙ୍କ ତଥ୍ୟ ସୁରକ୍ଷିତ ଏବଂ କେବଳ ସେବା ପ୍ରଦାନ ପାଇଁ ବ୍ୟବହାର କରାଯିବ।",

    // Status Messages
    loading: "ଲୋଡ ହେଉଛି...",
    processing: "ପ୍ରକ୍ରିୟାକରଣ...",
    success: "ସଫଳତା",
    error: "ତ୍ରୁଟି",
    noDataFound: "କୌଣସି ତଥ୍ୟ ମିଳିଲା ନାହିଁ",
    tryAgain: "ପୁନଃ ଚେଷ୍ଟା କରନ୍ତୁ",

    // Currency
    currency: "₹",

    // Time
    seconds: "ସେକେଣ୍ଡ",
    minutes: "ମିନିଟ",

    // Voice Guidance
    voiceWelcome: "My SUVIDHA APP କୁ ସ୍ୱାଗତ",
    voiceViewingElectricity: "ଆପଣ ବିଦ୍ୟୁତ ଦେଖୁଛନ୍ତି",
    voiceViewingGas: "ଆପଣ ଗ୍ୟାସ ଦେଖୁଛନ୍ତି",
    voiceViewingWater: "ଆପଣ ଜଳ ଦେଖୁଛନ୍ତି",
    voiceViewingMunicipal: "ଆପଣ ପୌର ସେବା ଦେଖୁଛନ୍ତି",
    voiceViewingHelp: "ଆପଣ ସାହାଯ୍ୟ ଦେଖୁଛନ୍ତି",
    voiceViewingStatus: "ଆପଣ ମୋର ଡ୍ୟାସବୋର୍ଡ ଦେଖୁଛନ୍ତି",
    voiceViewingBill: "ଆପଣ ବିଲ ଦେଖୁଛନ୍ତି",
    voiceRegisterComplaint: "ଆପଣ ଅଭିଯୋଗ ପଞ୍ଜୀକରଣ କରୁଛନ୍ତି",
    voiceNewConnection: "ଆପଣ ନୂତନ ସଂଯୋଗ ଅନୁରୋଧ କରୁଛନ୍ତି",
    voiceServiceInfo: "ଆପଣ ସେବା ସୂଚନା ଦେଖୁଛନ୍ତି",
  },

  mr: {
    // Welcome Page
    welcome: "स्वागत आहे",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "कृपया आपली भाषा निवडा",
    touchToStart: "सुरू करण्यासाठी स्पर्श करा",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "मागे",
    next: "पुढे",
    submit: "सबमिट करा",
    cancel: "रद्द करा",
    confirm: "पुष्टी करा",
    close: "बंद करा",
    home: "मुख्यपृष्ठ",
    help: "मदत",
    logout: "सत्र समाप्त करा",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "उच्च कॉन्ट्रास्ट",
    sessionTimer: "सत्र वेळ",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "सेवा निवडा",
    homeSubtitle: "खालील सेवांमधून निवडा",
    dashboard: "डॅशबोर्ड",
    myDashboard: "माझा डॅशबोर्ड",
    goodAfternoon: "शुभ दुपार",
    goodMorning: "शुभ सकाळ",
    goodEvening: "शुभ संध्याकाळ",
    citizenId: "नागरिक ओळख",
    totalDue: "एकूण थकबाकी",
    active: "सक्रिय",
    pending: "प्रलंबित",
    actionsRequired: "आवश्यक कृती",
    yourConnectedServices: "आपल्या जोडलेल्या सेवा",
    viewAll: "सर्व पहा",
    recentActivity: "अलीकडील तक्रारी आणि क्रियाकलाप",
    newComplaint: "नवीन तक्रार",
    linkNewService: "नवीन सेवा जोडा",
    complaints: "तक्रारी",
    services: "सेवा",

    // Services
    electricity: "वीज",
    gas: "गॅस",
    water: "पाणी",
    municipal: "नगरपालिका सेवा",
    sanitation: "स्वच्छता",

    // Service Actions
    viewBill: "बिल पहा",
    payBill: "बिल भरा",
    serviceInfo: "सेवा माहिती",
    registerComplaint: "तक्रार नोंदवा",
    trackComplaint: "तक्रार ट्रॅक करा",
    newConnection: "नवीन कनेक्शन",
    requestService: "सेवा विनंती",

    // Bill Payment
    lookupMethod: "शोध पद्धत",
    byConsumerId: "ग्राहक क्रमांकाद्वारे",
    byMobileNumber: "मोबाइल नंबरद्वारे",
    enterConsumerId: "ग्राहक आयडी प्रविष्ट करा",
    enterPhoneNumber: "फोन नंबर प्रविष्ट करा",
    consumerIdPlaceholder: "ग्राहक आयडी / खाते क्रमांक",
    phoneNumberPlaceholder: "१० अंकी मोबाइल नंबर",
    lookupHelperConsumer: "आपले बिल पाहण्यासाठी आपला ग्राहक क्रमांक प्रविष्ट करा",
    lookupHelperMobile: "जर आपल्याला आपला ग्राहक क्रमांक आठवत नसेल तर आपला नोंदणीकृत मोबाइल नंबर वापरा",
    fetchBill: "बिल मिळवा",
    billDetails: "बिल तपशील",
    consumerName: "ग्राहकाचे नाव",
    consumerAddress: "पत्ता",
    billAmount: "बिल रक्कम",
    dueDate: "देय तारीख",
    billPeriod: "बिलिंग कालावधी",
    previousDues: "मागील थकबाकी",
    totalAmount: "एकूण रक्कम",
    payNow: "आता भरा",

    // Payment Success
    paymentSuccess: "पेमेंट यशस्वी!",
    paymentSuccessMessage: "आपले पेमेंट यशस्वीरित्या प्रक्रिया झाले आहे",
    transactionId: "व्यवहार आयडी",
    paymentDate: "पेमेंट तारीख",
    amountPaid: "भरलेली रक्कम",
    downloadReceipt: "पावती डाउनलोड करा",
    printReceipt: "पावती प्रिंट करा",

    // Complaint Registration
    complaintTitle: "तक्रार नोंदवा",
    selectCategory: "समस्या श्रेणी निवडा",
    categoryElectricity: "वीज खंडित / वीज समस्या",
    categoryGas: "गॅस पुरवठा समस्या",
    categoryWater: "पाणी पुरवठा / गुणवत्ता समस्या",
    categoryStreetlight: "रस्त्यावरील दिवा काम करत नाही",
    categoryGarbage: "कचरा संकलन समस्या",
    categorySanitation: "स्वच्छता / निचरा समस्या",
    categoryOther: "इतर",
    complaintDescription: "समस्येचे वर्णन करा",
    descriptionPlaceholder: "कृपया समस्येबद्दल तपशील द्या...",
    attachPhoto: "फोटो जोडा (पर्यायी)",
    submitComplaint: "तक्रार सबमिट करा",
    complaintSuccess: "तक्रार यशस्वीरित्या नोंदवली",
    complaintTicketId: "तक्रार तिकीट आयडी",
    complaintMessage: "आपली तक्रार नोंदवली गेली आहे. ट्रॅकिंगसाठी कृपया तिकीट आयडी नोंदवा.",

    // Municipal Services
    municipalTitle: "नगरपालिका सेवा",
    grievanceRegistration: "तक्रार नोंदणी",
    trackGrievance: "तक्रार स्थिती ट्रॅक करा",
    emergencyInfo: "आपत्कालीन माहिती",
    advisories: "सार्वजनिक सल्ला",

    // Help
    helpTitle: "मदत आणि समर्थन",
    helpContact: "संपर्क माहिती",
    helpline: "हेल्पलाइन",
    email: "ईमेल",
    operatingHours: "कार्य वेळ",
    helpHours: "२४/७ उपलब्ध",
    faq: "वारंवार विचारले जाणारे प्रश्न",

    // Session & Privacy
    sessionTimeout: "सत्र कालबाह्य",
    sessionTimeoutMessage: "आपले सत्र संपेल",
    sessionExpired: "सत्र संपले",
    sessionExpiredMessage: "आपले सत्र संपले आहे. मुख्यपृष्ठावर परत येत आहे...",
    privacyNotice: "गोपनीयता सूचना",
    privacyMessage: "आपला डेटा सुरक्षित आहे आणि फक्त सेवा वितरणासाठी वापरला जाईल.",

    // Status Messages
    loading: "लोड होत आहे...",
    processing: "प्रक्रिया करत आहे...",
    success: "यश",
    error: "त्रुटी",
    noDataFound: "डेटा सापडला नाही",
    tryAgain: "पुन्हा प्रयत्न करा",

    // Currency
    currency: "₹",

    // Time
    seconds: "सेकंद",
    minutes: "मिनिटे",
  },

  ta: {
    // Welcome Page
    welcome: "வரவேற்கிறோம்",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
    touchToStart: "தொடங்க தொடவும்",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "பின்",
    next: "அடுத்து",
    submit: "சமர்ப்பிக்கவும்",
    cancel: "ரத்து செய்",
    confirm: "உறுதிப்படுத்து",
    close: "மூடு",
    home: "முகப்பு",
    help: "உதவி",
    logout: "அமர்வை முடி",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "உயர் மாறுபாடு",
    sessionTimer: "அமர்வு நேரம்",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "சேவையைத் தேர்ந்தெடுக்கவும்",
    homeSubtitle: "கீழே உள்ள சேவைகளிலிருந்து தேர்வு செய்யவும்",
    dashboard: "முகப்புப்பக்கம்",
    myDashboard: "என் முகப்புப்பக்கம்",
    goodAfternoon: "மதிய வணக்கம்",
    goodMorning: "காலை வணக்கம்",
    goodEvening: "மாலை வணக்கம்",
    citizenId: "குடிமகன் அடையாள எண்",
    totalDue: "மொத்த நிலுவைத் தொகை",
    active: "செயலில்",
    pending: "நிலுவையில்",
    actionsRequired: "தேவையான நடவடிக்கைகள்",
    yourConnectedServices: "உங்கள் இணைக்கப்பட்ட சேவைகள்",
    viewAll: "அனைத்தையும் காண்க",
    recentActivity: "சமீபத்திய புகார்கள் மற்றும் செயல்பாடுகள்",
    newComplaint: "புதிய புகார்",
    linkNewService: "புதிய சேவையை இணைக்கவும்",
    complaints: "புகார்கள்",
    services: "சேவைகள்",

    // Services
    electricity: "மின்சாரம்",
    gas: "எரிவாயு",
    water: "தண்ணீர்",
    municipal: "நகராட்சி சேவைகள்",
    sanitation: "சுகாதாரம்",

    // Service Actions
    viewBill: "பில் பார்க்க",
    payBill: "பில் செலுத்து",
    serviceInfo: "சேவை தகவல்",
    registerComplaint: "புகார் பதிவு செய்",
    trackComplaint: "புகார் கண்காணி",
    newConnection: "புதிய இணைப்பு",
    requestService: "சேவை கோரிக்கை",

    // Bill Payment
    lookupMethod: "தேடல் முறை",
    byConsumerId: "நுகர்வோர் எண் மூலம்",
    byMobileNumber: "மொபைல் எண் மூலம்",
    enterConsumerId: "நுகர்வோர் ஐடியை உள்ளிடவும்",
    enterPhoneNumber: "தொலைபேசி எண்ணை உள்ளிடவும்",
    consumerIdPlaceholder: "நுகர்வோர் ஐடி / கணக்கு எண்",
    phoneNumberPlaceholder: "10 இலக்க மொபைல் எண்",
    lookupHelperConsumer: "உங்கள் பில்லைப் பார்க்க உங்கள் நுகர்வோர் எண்ணை உள்ளிடவும்",
    lookupHelperMobile: "உங்கள் நுகர்வோர் எண் நினைவில் இல்லை என்றால், உங்கள் பதிவு செய்யப்பட்ட மொபைல் எண்ணைப் பயன்படுத்தவும்",
    fetchBill: "பில் பெறவும்",
    billDetails: "பில் விவரங்கள்",
    consumerName: "நுகர்வோர் பெயர்",
    consumerAddress: "முகவரி",
    billAmount: "பில் தொகை",
    dueDate: "செலுத்த வேண்டிய தேதி",
    billPeriod: "பில்லிங் காலம்",
    previousDues: "முந்தைய நிலுவைகள்",
    totalAmount: "மொத்த தொகை",
    payNow: "இப்போது செலுத்து",

    // Payment Success
    paymentSuccess: "பணம் செலுத்தல் வெற்றி!",
    paymentSuccessMessage: "உங்கள் பணம் வெற்றிகரமாக செயலாக்கப்பட்டது",
    transactionId: "பரிவர்த்தனை ஐடி",
    paymentDate: "பணம் செலுத்திய தேதி",
    amountPaid: "செலுத்திய தொகை",
    downloadReceipt: "ரசீதைப் பதிவிறக்கு",
    printReceipt: "ரசீதை அச்சிடு",

    // Complaint Registration
    complaintTitle: "புகார் பதிவு செய்",
    selectCategory: "சிக்கல் வகையைத் தேர்ந்தெடுக்கவும்",
    categoryElectricity: "மின்சார தடை / மின்சார சிக்கல்",
    categoryGas: "எரிவாயு வழங்கல் சிக்கல்",
    categoryWater: "தண்ணீர் வழங்கல் / தர சிக்கல்",
    categoryStreetlight: "தெரு விளக்கு வேலை செய்யவில்லை",
    categoryGarbage: "குப்பை சேகரிப்பு சிக்கல்",
    categorySanitation: "சுகாதாரம் / வடிகால் சிக்கல்",
    categoryOther: "மற்றவை",
    complaintDescription: "சிக்கலை விவரிக்கவும்",
    descriptionPlaceholder: "சிக்கல் பற்றிய விவரங்களை வழங்கவும்...",
    attachPhoto: "புகைப்படத்தை இணைக்கவும் (விருப்பமானது)",
    submitComplaint: "புகார் சமர்ப்பிக்கவும்",
    complaintSuccess: "புகார் வெற்றிகரமாக பதிவு செய்யப்பட்டது",
    complaintTicketId: "புகார் டிக்கெட் ஐடி",
    complaintMessage: "உங்கள் புகார் பதிவு செய்யப்பட்டுள்ளது. கண்காணிப்புக்காக டிக்கெட் ஐடியை குறித்து வைக்கவும்.",

    // Municipal Services
    municipalTitle: "நகராட்சி சேவைகள்",
    grievanceRegistration: "குறைதீர் பதிவு",
    trackGrievance: "குறைதீர் நிலையைக் கண்காணி",
    emergencyInfo: "அவசர தகவல்",
    advisories: "பொது ஆலோசனைகள்",

    // Help
    helpTitle: "உதவி மற்றும் ஆதரவு",
    helpContact: "தொடர்பு தகவல்",
    helpline: "உதவி எண்",
    email: "மின்னஞ்சல்",
    operatingHours: "செயல்பாட்டு நேரம்",
    helpHours: "24/7 கிடைக்கும்",
    faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",

    // Session & Privacy
    sessionTimeout: "அமர்வு காலாவதி",
    sessionTimeoutMessage: "உங்கள் அமர்வு காலாவதியாகும்",
    sessionExpired: "அமர்வு காலாவதியானது",
    sessionExpiredMessage: "உங்கள் அமர்வு காலாவதியானது. முகப்புத் திரைக்குத் திரும்புகிறது...",
    privacyNotice: "தனியுரிமை அறிவிப்பு",
    privacyMessage: "உங்கள் தரவு பாதுகாப்பானது மற்றும் சேவை வழங்குவதற்கு மட்டுமே பயன்படுத்தப்படும்.",

    // Status Messages
    loading: "ஏற்றுகிறது...",
    processing: "செயலாக்குகிறது...",
    success: "வெற்றி",
    error: "பிழை",
    noDataFound: "தரவு கிடைக்கவில்லை",
    tryAgain: "மீண்டும் முயற்சிக்கவும்",

    // Currency
    currency: "₹",

    // Time
    seconds: "விநாடிகள்",
    minutes: "நிமிடங்கள்",
  },

  te: {
    // Welcome Page
    welcome: "స్వాగతం",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "దయచేసి మీ భాషను ఎంచుకోండి",
    touchToStart: "ప్రారంభించడానికి తాకండి",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "వెనుకకు",
    next: "తదుపరి",
    submit: "సమర్పించు",
    cancel: "రద్దు చేయి",
    confirm: "నిర్ధారించు",
    close: "మూసివేయి",
    home: "హోమ్",
    help: "సహాయం",
    logout: "సెషన్ ముగించు",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "అధిక కాంట్రాస్ట్",
    sessionTimer: "సెషన్ సమయం",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "సేవను ఎంచుకోండి",
    homeSubtitle: "క్రింది సేవల నుండి ఎంచుకోండి",
    dashboard: "డ్యాష్‌బోర్డ్",
    myDashboard: "నా డ్యాష్‌బోర్డ్",
    goodAfternoon: "శుభ మధ్యాహ్నం",
    goodMorning: "శుభోదయం",
    goodEvening: "శుభ సాయంత్రం",
    citizenId: "పౌర గుర్తింపు సంఖ్య",
    totalDue: "మొత్తం బకాయి",
    active: "క్రియాశీల",
    pending: "పెండింగ్",
    actionsRequired: "చర్యలు అవసరం",
    yourConnectedServices: "మీ కనెక్ట్ చేయబడిన సేవలు",
    viewAll: "అన్నీ చూడండి",
    recentActivity: "ఇటీవలి ఫిర్యాదులు & కార్యాచరణ",
    newComplaint: "కొత్త ఫిర్యాదు",
    linkNewService: "కొత్త సేవను లింక్ చేయండి",
    complaints: "ఫిర్యాదులు",
    services: "సేవలు",

    // Services
    electricity: "విద్యుత్",
    gas: "గ్యాస్",
    water: "నీరు",
    municipal: "మునిసిపల్ సేవలు",
    sanitation: "పారిశుద్ధ్యం",

    // Service Actions
    viewBill: "బిల్లు చూడండి",
    payBill: "బిల్లు చెల్లించండి",
    serviceInfo: "సేవా సమాచారం",
    registerComplaint: "ఫిర్యాదు నమోదు చేయండి",
    trackComplaint: "ఫిర్యాదును ట్రాక్ చేయండి",
    newConnection: "కొత్త కనెక్షన్",
    requestService: "సేవ అభ్యర్థన",

    // Bill Payment
    lookupMethod: "శోధన పద్ధతి",
    byConsumerId: "వినియోగదారు సంఖ్య ద్వారా",
    byMobileNumber: "మొబైల్ నంబర్ ద్వారా",
    enterConsumerId: "వినియోగదారు IDని నమోదు చేయండి",
    enterPhoneNumber: "ఫోన్ నంబర్‌ను నమోదు చేయండి",
    consumerIdPlaceholder: "వినియోగదారు ID / ఖాతా సంఖ్య",
    phoneNumberPlaceholder: "10 అంకెల మొబైల్ నంబర్",
    lookupHelperConsumer: "మీ బిల్లును చూడటానికి మీ వినియోగదారు సంఖ్యను నమోదు చేయండి",
    lookupHelperMobile: "మీ వినియోగదారు సంఖ్య గుర్తులేకపోతే, మీ నమోదిత మొబైల్ నంబర్‌ను ఉపయోగించండి",
    fetchBill: "బిల్లు పొందండి",
    billDetails: "బిల్లు వివరాలు",
    consumerName: "వినియోగదారు పేరు",
    consumerAddress: "చిరునామా",
    billAmount: "బిల్లు మొత్తం",
    dueDate: "చెల్లించవలసిన తేదీ",
    billPeriod: "బిల్లింగ్ కాలం",
    previousDues: "మునుపటి బకాయిలు",
    totalAmount: "మొత్తం మొత్తం",
    payNow: "ఇప్పుడు చెల్లించండి",

    // Payment Success
    paymentSuccess: "చెల్లింపు విజయవంతం!",
    paymentSuccessMessage: "మీ చెల్లింపు విజయవంతంగా ప్రాసెస్ చేయబడింది",
    transactionId: "లావాదేవీ ID",
    paymentDate: "చెల్లింపు తేదీ",
    amountPaid: "చెల్లించిన మొత్తం",
    downloadReceipt: "రసీదును డౌన్‌లోడ్ చేయండి",
    printReceipt: "రసీదును ప్రింట్ చేయండి",

    // Complaint Registration
    complaintTitle: "ఫిర్యాదు నమోదు చేయండి",
    selectCategory: "సమస్య వర్గాన్ని ఎంచుకోండి",
    categoryElectricity: "విద్యుత్ అంతరాయం / విద్యుత్ సమస్య",
    categoryGas: "గ్యాస్ సరఫరా సమస్య",
    categoryWater: "నీటి సరఫరా / నాణ్యత సమస్య",
    categoryStreetlight: "వీధి దీపం పని చేయడం లేదు",
    categoryGarbage: "చెత్త సేకరణ సమస్య",
    categorySanitation: "పారిశుద్ధ్యం / డ్రైనేజీ సమస్య",
    categoryOther: "ఇతరములు",
    complaintDescription: "సమస్యను వివరించండి",
    descriptionPlaceholder: "దయచేసి సమస్య గురించి వివరాలు అందించండి...",
    attachPhoto: "ఫోటోను జోడించండి (ఐచ్ఛికం)",
    submitComplaint: "ఫిర్యాదును సమర్పించండి",
    complaintSuccess: "ఫిర్యాదు విజయవంతంగా నమోదు చేయబడింది",
    complaintTicketId: "ఫిర్యాదు టికెట్ ID",
    complaintMessage: "మీ ఫిర్యాదు నమోదు చేయబడింది. ట్రాకింగ్ కోసం టికెట్ IDని గమనించండి.",

    // Municipal Services
    municipalTitle: "మునిసిపల్ సేవలు",
    grievanceRegistration: "ఫిర్యాదు నమోదు",
    trackGrievance: "ఫిర్యాదు స్థితిని ట్రాక్ చేయండి",
    emergencyInfo: "అత్యవసర సమాచారం",
    advisories: "ప్రజా సలహాలు",

    // Help
    helpTitle: "సహాయం మరియు మద్దతు",
    helpContact: "సంప్రదింపు సమాచారం",
    helpline: "హెల్ప్‌లైన్",
    email: "ఇమెయిల్",
    operatingHours: "పనిచేసే గంటలు",
    helpHours: "24/7 అందుబాటులో",
    faq: "తరచుగా అడిగే ప్రశ్నలు",

    // Session & Privacy
    sessionTimeout: "సెషన్ గడువు ముగిసింది",
    sessionTimeoutMessage: "మీ సెషన్ గడువు ముగుస్తుంది",
    sessionExpired: "సెషన్ గడువు ముగిసింది",
    sessionExpiredMessage: "మీ సెషన్ గడువు ముగిసింది. హోమ్ స్క్రీన్‌కు తిరిగి వెళ్తోంది...",
    privacyNotice: "గోప్యతా నోటీసు",
    privacyMessage: "మీ డేటా సురక్షితం మరియు సేవా పంపిణీ కోసం మాత్రమే ఉపయోగించబడుతుంది.",

    // Status Messages
    loading: "లోడ్ అవుతోంది...",
    processing: "ప్రాసెస్ అవుతోంది...",
    success: "విజయం",
    error: "లోపం",
    noDataFound: "డేటా కనుగొనబడలేదు",
    tryAgain: "మళ్లీ ప్రయత్నించండి",

    // Currency
    currency: "₹",

    // Time
    seconds: "సెకన్లు",
    minutes: "నిమిషాలు",
  },

  gu: {
    // Welcome Page
    welcome: "સ્વાગત છે",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "કૃપા કરીને તમારી ભાષા પસંદ કરો",
    touchToStart: "શરૂ કરવા માટે સ્પર્શ કરો",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "પાછળ",
    next: "આગળ",
    submit: "સબમિટ કરો",
    cancel: "રદ કરો",
    confirm: "પુષ્ટિ કરો",
    close: "બંધ કરો",
    home: "હોમ",
    help: "મદદ",
    logout: "સત્ર સમાપ્ત કરો",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ઉચ્ચ કોન્ટ્રાસ્ટ",
    sessionTimer: "સત્ર સમય",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "સેવા પસંદ કરો",
    homeSubtitle: "નીચેની સેવાઓમાંથી પસંદ કરો",
    dashboard: "ડેશબોર્ડ",
    myDashboard: "મારું ડેશબોર્ડ",
    goodAfternoon: "શુભ બપોર",
    goodMorning: "સુપ્રભાત",
    goodEvening: "શુભ સાંજ",
    citizenId: "નાગરિક ઓળખ",
    totalDue: "કુલ બાકી",
    active: "સક્રિય",
    pending: "બાકી",
    actionsRequired: "જરૂરી પગલાં",
    yourConnectedServices: "તમારી જોડાયેલ સેવાઓ",
    viewAll: "બધું જુઓ",
    recentActivity: "તાજેતરની ફરિયાદો અને પ્રવૃત્તિ",
    newComplaint: "નવી ફરિયાદ",
    linkNewService: "નવી સેવા લિંક કરો",
    complaints: "ફરિયાદો",
    services: "સેવાઓ",

    // Services
    electricity: "વીજળી",
    gas: "ગેસ",
    water: "પાણી",
    municipal: "મ્યુનિસિપલ સેવાઓ",
    sanitation: "સ્વચ્છતા",

    // Service Actions
    viewBill: "બિલ જુઓ",
    payBill: "બિલ ચૂકવો",
    serviceInfo: "સેવા માહિતી",
    registerComplaint: "ફરિયાદ નોંધાવો",
    trackComplaint: "ફરિયાદ ટ્રેક કરો",
    newConnection: "નવું કનેક્શન",
    requestService: "સેવા વિનંતી",

    // Bill Payment
    lookupMethod: "શોધ પદ્ધતિ",
    byConsumerId: "ગ્રાહક નંબર દ્વારા",
    byMobileNumber: "મોબાઇલ નંબર દ્વારા",
    enterConsumerId: "ગ્રાહક ID દાખલ કરો",
    enterPhoneNumber: "ફોન નંબર દાખલ કરો",
    consumerIdPlaceholder: "ગ્રાહક ID / ખાતા નંબર",
    phoneNumberPlaceholder: "10 અંકનો મોબાઇલ નંબર",
    lookupHelperConsumer: "તમારું બિલ જોવા માટે તમારો ગ્રાહક નંબર દાખલ કરો",
    lookupHelperMobile: "જો તમને તમારો ગ્રાહક નંબર યાદ ન હોય, તો તમારો નોંધાયેલ મોબાઇલ નંબર વાપરો",
    fetchBill: "બિલ મેળવો",
    billDetails: "બિલ વિગતો",
    consumerName: "ગ્રાહકનું નામ",
    consumerAddress: "સરનામું",
    billAmount: "બિલ રકમ",
    dueDate: "નિયત તારીખ",
    billPeriod: "બિલિંગ સમયગાળો",
    previousDues: "અગાઉની બાકી",
    totalAmount: "કુલ રકમ",
    payNow: "હવે ચૂકવો",

    // Payment Success
    paymentSuccess: "ચુકવણી સફળ!",
    paymentSuccessMessage: "તમારી ચુકવણી સફળતાપૂર્વક પ્રક્રિયા થઈ છે",
    transactionId: "વ્યવહાર ID",
    paymentDate: "ચુકવણી તારીખ",
    amountPaid: "ચૂકવેલ રકમ",
    downloadReceipt: "રસીદ ડાઉનલોડ કરો",
    printReceipt: "રસીદ પ્રિન્ટ કરો",

    // Complaint Registration
    complaintTitle: "ફરિયાદ નોંધાવો",
    selectCategory: "સમસ્યા શ્રેણી પસંદ કરો",
    categoryElectricity: "વીજ કાપ / વીજળી સમસ્યા",
    categoryGas: "ગેસ સપ્લાય સમસ્યા",
    categoryWater: "પાણી સપ્લાય / ગુણવત્તા સમસ્યા",
    categoryStreetlight: "સ્ટ્રીટલાઇટ કામ કરતી નથી",
    categoryGarbage: "કચરો સંગ્રહ સમસ્યા",
    categorySanitation: "સ્વચ્છતા / ડ્રેનેજ સમસ્યા",
    categoryOther: "અન્ય",
    complaintDescription: "સમસ્યાનું વર્ણન કરો",
    descriptionPlaceholder: "કૃપા કરીને સમસ્યા વિશે વિગતો આપો...",
    attachPhoto: "ફોટો જોડો (વૈકલ્પિક)",
    submitComplaint: "ફરિયાદ સબમિટ કરો",
    complaintSuccess: "ફરિયાદ સફળતાપૂર્વક નોંધાઈ",
    complaintTicketId: "ફરિયાદ ટિકિટ ID",
    complaintMessage: "તમારી ફરિયાદ નોંધાઈ છે. ટ્રેકિંગ માટે કૃપા કરીને ટિકિટ ID નોંધો.",

    // Municipal Services
    municipalTitle: "મ્યુનિસિપલ સેવાઓ",
    grievanceRegistration: "ફરિયાદ નોંધણી",
    trackGrievance: "ફરિયાદ સ્થિતિ ટ્રેક કરો",
    emergencyInfo: "કટોકટી માહિતી",
    advisories: "જાહેર સલાહ",

    // Help
    helpTitle: "મદદ અને સપોર્ટ",
    helpContact: "સંપર્ક માહિતી",
    helpline: "હેલ્પલાઇન",
    email: "ઇમેઇલ",
    operatingHours: "કાર્યકારી કલાકો",
    helpHours: "24/7 ઉપલબ્ધ",
    faq: "વારંવાર પૂછાતા પ્રશ્નો",

    // Session & Privacy
    sessionTimeout: "સત્ર સમયસમાપ્તિ",
    sessionTimeoutMessage: "તમારું સત્ર સમાપ્ત થશે",
    sessionExpired: "સત્ર સમાપ્ત થયું",
    sessionExpiredMessage: "તમારું સત્ર સમાપ્ત થયું છે. હોમ સ્ક્રીન પર પાછા ફરી રહ્યા છીએ...",
    privacyNotice: "ગોપનીયતા સૂચના",
    privacyMessage: "તમારો ડેટા સુરક્ષિત છે અને ફક્ત સેવા વિતરણ માટે વપરાશે.",

    // Status Messages
    loading: "લોડ થઈ રહ્યું છે...",
    processing: "પ્રક્રિયા થઈ રહી છે...",
    success: "સફળતા",
    error: "ભૂલ",
    noDataFound: "ડેટા મળ્યો નથી",
    tryAgain: "ફરી પ્રયાસ કરો",

    // Currency
    currency: "₹",

    // Time
    seconds: "સેકંડ",
    minutes: "મિનિટ",
  },

  kn: {
    // Welcome Page
    welcome: "ಸ್ವಾಗತ",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    touchToStart: "ಪ್ರಾರಂಭಿಸಲು ಸ್ಪರ್ಶಿಸಿ",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "ಹಿಂದೆ",
    next: "ಮುಂದೆ",
    submit: "ಸಲ್ಲಿಸಿ",
    cancel: "ರದ್ದುಮಾಡಿ",
    confirm: "ದೃಢೀಕರಿಸಿ",
    close: "ಮುಚ್ಚಿ",
    home: "ಮುಖಪುಟ",
    help: "ಸಹಾಯ",
    logout: "ಸೆಷನ್ ಮುಗಿಸಿ",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್",
    sessionTimer: "ಸೆಷನ್ ಸಮಯ",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    homeSubtitle: "ಕೆಳಗಿನ ಸೇವೆಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ",
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    myDashboard: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    goodAfternoon: "ಶುಭ ಮಧ್ಯಾಹ್ನ",
    goodMorning: "ಶುಭೋದಯ",
    goodEvening: "ಶುಭ ಸಂಜೆ",
    citizenId: "ನಾಗರಿಕ ಗುರುತು",
    totalDue: "ಒಟ್ಟು ಬಾಕಿ",
    active: "ಸಕ್ರಿಯ",
    pending: "ಬಾಕಿ ಉಳಿದಿದೆ",
    actionsRequired: "ಅಗತ್ಯ ಕ್ರಮಗಳು",
    yourConnectedServices: "ನಿಮ್ಮ ಸಂಪರ್ಕಿತ ಸೇವೆಗಳು",
    viewAll: "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ",
    recentActivity: "ಇತ್ತೀಚಿನ ದೂರುಗಳು ಮತ್ತು ಚಟುವಟಿಕೆ",
    newComplaint: "ಹೊಸ ದೂರು",
    linkNewService: "ಹೊಸ ಸೇವೆಯನ್ನು ಲಿಂಕ್ ಮಾಡಿ",
    complaints: "ದೂರುಗಳು",
    services: "ಸೇವೆಗಳು",

    // Services
    electricity: "ವಿದ್ಯುತ್",
    gas: "ಗ್ಯಾಸ್",
    water: "ನೀರು",
    municipal: "ಮುನ್ಸಿಪಲ್ ಸೇವೆಗಳು",
    sanitation: "ನೈರ್ಮಲ್ಯ",

    // Service Actions
    viewBill: "ಬಿಲ್ ವೀಕ್ಷಿಸಿ",
    payBill: "ಬಿಲ್ ಪಾವತಿಸಿ",
    serviceInfo: "ಸೇವಾ ಮಾಹಿತಿ",
    registerComplaint: "ದೂರು ದಾಖಲಿಸಿ",
    trackComplaint: "ದೂರು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    newConnection: "ಹೊಸ ಕನೆಕ್ಷನ್",
    requestService: "ಸೇವಾ ವಿನಂತಿ",

    // Bill Payment
    lookupMethod: "ಹುಡುಕಾಟ ವಿಧಾನ",
    byConsumerId: "ಗ್ರಾಹಕ ಸಂಖ್ಯೆಯ ಮೂಲಕ",
    byMobileNumber: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯ ಮೂಲಕ",
    enterConsumerId: "ಗ್ರಾಹಕ ID ನಮೂದಿಸಿ",
    enterPhoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
    consumerIdPlaceholder: "ಗ್ರಾಹಕ ID / ಖಾತೆ ಸಂಖ್ಯೆ",
    phoneNumberPlaceholder: "10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    lookupHelperConsumer: "ನಿಮ್ಮ ಬಿಲ್ ವೀಕ್ಷಿಸಲು ನಿಮ್ಮ ಗ್ರಾಹಕ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
    lookupHelperMobile: "ನಿಮ್ಮ ಗ್ರಾಹಕ ಸಂಖ್ಯೆ ನೆನಪಿಲ್ಲದಿದ್ದರೆ, ನಿಮ್ಮ ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿ",
    fetchBill: "ಬಿಲ್ ಪಡೆಯಿರಿ",
    billDetails: "ಬಿಲ್ ವಿವರಗಳು",
    consumerName: "ಗ್ರಾಹಕರ ಹೆಸರು",
    consumerAddress: "ವಿಳಾಸ",
    billAmount: "ಬಿಲ್ ಮೊತ್ತ",
    dueDate: "ಕೊನೆಯ ದಿನಾಂಕ",
    billPeriod: "ಬಿಲ್ಲಿಂಗ್ ಅವಧಿ",
    previousDues: "ಹಿಂದಿನ ಬಾಕಿಗಳು",
    totalAmount: "ಒಟ್ಟು ಮೊತ್ತ",
    payNow: "ಈಗ ಪಾವತಿಸಿ",

    // Payment Success
    paymentSuccess: "ಪಾವತಿ ಯಶಸ್ವಿ!",
    paymentSuccessMessage: "ನಿಮ್ಮ ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಂಡಿದೆ",
    transactionId: "ವಹಿವಾಟು ID",
    paymentDate: "ಪಾವತಿ ದಿನಾಂಕ",
    amountPaid: "ಪಾವತಿಸಿದ ಮೊತ್ತ",
    downloadReceipt: "ರಸೀದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    printReceipt: "ರಸೀದಿ ಮುದ್ರಿಸಿ",

    // Complaint Registration
    complaintTitle: "ದೂರು ದಾಖಲಿಸಿ",
    selectCategory: "ಸಮಸ್ಯೆ ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    categoryElectricity: "ವಿದ್ಯುತ್ ಕಡಿತ / ವಿದ್ಯುತ್ ಸಮಸ್ಯೆ",
    categoryGas: "ಗ್ಯಾಸ್ ಪೂರೈಕೆ ಸಮಸ್ಯೆ",
    categoryWater: "ನೀರಿನ ಪೂರೈಕೆ / ಗುಣಮಟ್ಟ ಸಮಸ್ಯೆ",
    categoryStreetlight: "ಬೀದಿ ದೀಪ ಕೆಲಸ ಮಾಡುತ್ತಿಲ್ಲ",
    categoryGarbage: "ಕಸ ಸಂಗ್ರಹಣೆ ಸಮಸ್ಯೆ",
    categorySanitation: "ನೈರ್ಮಲ್ಯ / ಒಳಚರಂಡಿ ಸಮಸ್ಯೆ",
    categoryOther: "ಇತರೆ",
    complaintDescription: "ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ",
    descriptionPlaceholder: "ದಯವಿಟ್ಟು ಸಮಸ್ಯೆಯ ಬಗ್ಗೆ ವಿವರಗಳನ್ನು ನೀಡಿ...",
    attachPhoto: "ಫೋಟೋ ಲಗತ್ತಿಸಿ (ಐಚ್ಛಿಕ)",
    submitComplaint: "ದೂರು ಸಲ್ಲಿಸಿ",
    complaintSuccess: "ದೂರು ಯಶಸ್ವಿಯಾಗಿ ದಾಖಲಾಗಿದೆ",
    complaintTicketId: "ದೂರು ಟಿಕೆಟ್ ID",
    complaintMessage: "ನಿಮ್ಮ ದೂರು ದಾಖಲಾಗಿದೆ. ಟ್ರ್ಯಾಕಿಂಗ್‌ಗಾಗಿ ದಯವಿಟ್ಟು ಟಿಕೆಟ್ ID ಗಮನಿಸಿ.",

    // Municipal Services
    municipalTitle: "ಮುನ್ಸಿಪಲ್ ಸೇವೆಗಳು",
    grievanceRegistration: "ದೂರು ನೋಂದಣಿ",
    trackGrievance: "ದೂರು ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    emergencyInfo: "ತುರ್ತು ಮಾಹಿತಿ",
    advisories: "ಸಾರ್ವಜನಿಕ ಸಲಹೆಗಳು",

    // Help
    helpTitle: "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ",
    helpContact: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    helpline: "ಹೆಲ್ಪ್‌ಲೈನ್",
    email: "ಇಮೇಲ್",
    operatingHours: "ಕಾರ್ಯಾಚರಣೆಯ ಸಮಯ",
    helpHours: "24/7 ಲಭ್ಯವಿದೆ",
    faq: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",

    // Session & Privacy
    sessionTimeout: "ಸೆಷನ್ ಅವಧಿ ಮುಗಿದಿದೆ",
    sessionTimeoutMessage: "ನಿಮ್ಮ ಸೆಷನ್ ಅವಧಿ ಮುಗಿಯುತ್ತದೆ",
    sessionExpired: "ಸೆಷನ್ ಅವಧಿ ಮುಗಿದಿದೆ",
    sessionExpiredMessage: "ನಿಮ್ಮ ಸೆಷನ್ ಅವಧಿ ಮುಗಿದಿದೆ. ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗುತ್ತಿದೆ...",
    privacyNotice: "ಗೌಪ್ಯತೆ ಸೂಚನೆ",
    privacyMessage: "ನಿಮ್ಮ ಡೇಟಾ ಸುರಕ್ಷಿತವಾಗಿದೆ ಮತ್ತು ಸೇವಾ ವಿತರಣೆಗೆ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.",

    // Status Messages
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    processing: "ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತಿದೆ...",
    success: "ಯಶಸ್ಸು",
    error: "ದೋಷ",
    noDataFound: "ಡೇಟಾ ಕಂಡುಬಂದಿಲ್ಲ",
    tryAgain: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",

    // Currency
    currency: "₹",

    // Time
    seconds: "ಸೆಕೆಂಡುಗಳು",
    minutes: "ನಿಮಿಷಗಳು",
  },

  ml: {
    // Welcome Page
    welcome: "സ്വാഗതം",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "ദയവായി നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
    touchToStart: "ആരംഭിക്കാൻ സ്പർശിക്കുക",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "തിരികെ",
    next: "അടുത്തത്",
    submit: "സമർപ്പിക്കുക",
    cancel: "റദ്ദാക്കുക",
    confirm: "സ്ഥിരീകരിക്കുക",
    close: "അടയ്ക്കുക",
    home: "ഹോം",
    help: "സഹായം",
    logout: "സെഷൻ അവസാനിപ്പിക്കുക",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ഉയർന്ന കോൺട്രാസ്റ്റ്",
    sessionTimer: "സെഷൻ സമയം",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "ഒരു സേവനം തിരഞ്ഞെടുക്കുക",
    homeSubtitle: "താഴെയുള്ള സേവനങ്ങളിൽ നിന്ന് തിരഞ്ഞെടുക്കുക",
    dashboard: "ഡാഷ്‌ബോർഡ്",
    myDashboard: "എന്റെ ഡാഷ്‌ബോർഡ്",
    goodAfternoon: "ശുഭ ഉച്ച",
    goodMorning: "സുപ്രഭാതം",
    goodEvening: "ശുഭ സായാഹ്നം",
    citizenId: "പൗര ഐഡി",
    totalDue: "ആകെ കുടിശ്ശിക",
    active: "സജീവം",
    pending: "തീർപ്പുകൽപ്പിക്കാത്തവ",
    actionsRequired: "ആവശ്യമായ നടപടികൾ",
    yourConnectedServices: "നിങ്ങളുടെ ബന്ധിപ്പിച്ച സേവനങ്ങൾ",
    viewAll: "എല്ലാം കാണുക",
    recentActivity: "സമീപകാല പരാതികളും പ്രവർത്തനങ്ങളും",
    newComplaint: "പുതിയ പരാതി",
    linkNewService: "പുതിയ സേവനം ലിങ്ക് ചെയ്യുക",
    complaints: "പരാതികൾ",
    services: "സേവനങ്ങൾ",

    // Services
    electricity: "വൈദ്യുതി",
    gas: "ഗ്യാസ്",
    water: "ജലം",
    municipal: "മുനിസിപ്പൽ സേവനങ്ങൾ",
    sanitation: "ശുചിത്വം",

    // Service Actions
    viewBill: "ബിൽ കാണുക",
    payBill: "ബിൽ അടയ്ക്കുക",
    serviceInfo: "സേവന വിവരങ്ങൾ",
    registerComplaint: "പരാതി രജിസ്റ്റർ ചെയ്യുക",
    trackComplaint: "പരാതി ട്രാക്ക് ചെയ്യുക",
    newConnection: "പുതിയ കണക്ഷൻ",
    requestService: "സേവന അഭ്യർത്ഥന",

    // Bill Payment
    lookupMethod: "തിരയൽ രീതി",
    byConsumerId: "ഉപഭോക്തൃ നമ്പർ വഴി",
    byMobileNumber: "മൊബൈൽ നമ്പർ വഴി",
    enterConsumerId: "ഉപഭോക്തൃ ID നൽകുക",
    enterPhoneNumber: "ഫോൺ നമ്പർ നൽകുക",
    consumerIdPlaceholder: "ഉപഭോക്തൃ ID / അക്കൗണ്ട് നമ്പർ",
    phoneNumberPlaceholder: "10 അക്ക മൊബൈൽ നമ്പർ",
    lookupHelperConsumer: "നിങ്ങളുടെ ബിൽ കാണാൻ നിങ്ങളുടെ ഉപഭോക്തൃ നമ്പർ നൽകുക",
    lookupHelperMobile: "നിങ്ങളുടെ ഉപഭോക്തൃ നമ്പർ ഓർമ്മയില്ലെങ്കിൽ, നിങ്ങളുടെ രജിസ്റ്റർ ചെയ്ത മൊബൈൽ നമ്പർ ഉപയോഗിക്കുക",
    fetchBill: "ബിൽ നേടുക",
    billDetails: "ബിൽ വിശദാംശങ്ങൾ",
    consumerName: "ഉപഭോക്താവിന്റെ പേര്",
    consumerAddress: "വിലാസം",
    billAmount: "ബിൽ തുക",
    dueDate: "അവസാന തീയതി",
    billPeriod: "ബില്ലിംഗ് കാലയളവ്",
    previousDues: "മുൻ കുടിശ്ശികകൾ",
    totalAmount: "ആകെ തുക",
    payNow: "ഇപ്പോൾ അടയ്ക്കുക",

    // Payment Success
    paymentSuccess: "പേയ്മെന്റ് വിജയകരം!",
    paymentSuccessMessage: "നിങ്ങളുടെ പേയ്മെന്റ് വിജയകരമായി പ്രോസസ്സ് ചെയ്തു",
    transactionId: "ഇടപാട് ID",
    paymentDate: "പേയ്മെന്റ് തീയതി",
    amountPaid: "അടച്ച തുക",
    downloadReceipt: "രസീത് ഡൗൺലോഡ് ചെയ്യുക",
    printReceipt: "രസീത് പ്രിന്റ് ചെയ്യുക",

    // Complaint Registration
    complaintTitle: "പരാതി രജിസ്റ്റർ ചെയ്യുക",
    selectCategory: "പ്രശ്ന വിഭാഗം തിരഞ്ഞെടുക്കുക",
    categoryElectricity: "വൈദ്യുതി മുടക്കം / വൈദ്യുതി പ്രശ്നം",
    categoryGas: "ഗ്യാസ് വിതരണ പ്രശ്നം",
    categoryWater: "ജല വിതരണം / ഗുണനിലവാര പ്രശ്നം",
    categoryStreetlight: "തെരുവ് വിളക്ക് പ്രവർത്തിക്കുന്നില്ല",
    categoryGarbage: "മാലിന്യ ശേഖരണ പ്രശ്നം",
    categorySanitation: "ശുചിത്വം / ഡ്രെയിനേജ് പ്രശ്നം",
    categoryOther: "മറ്റുള്ളവ",
    complaintDescription: "പ്രശ്നം വിവരിക്കുക",
    descriptionPlaceholder: "ദയവായി പ്രശ്നത്തെക്കുറിച്ച് വിശദാംശങ്ങൾ നൽകുക...",
    attachPhoto: "ഫോട്ടോ അറ്റാച്ച് ചെയ്യുക (ഓപ്ഷണൽ)",
    submitComplaint: "പരാതി സമർപ്പിക്കുക",
    complaintSuccess: "പരാതി വിജയകരമായി രജിസ്റ്റർ ചെയ്തു",
    complaintTicketId: "പരാതി ടിക്കറ്റ് ID",
    complaintMessage: "നിങ്ങളുടെ പരാതി രജിസ്റ്റർ ചെയ്തു. ട്രാക്കിംഗിനായി ടിക്കറ്റ് ID ശ്രദ്ധിക്കുക.",

    // Municipal Services
    municipalTitle: "മുനിസിപ്പൽ സേവനങ്ങൾ",
    grievanceRegistration: "പരാതി രജിസ്ട്രേഷൻ",
    trackGrievance: "പരാതി സ്ഥിതി ട്രാക്ക് ചെയ്യുക",
    emergencyInfo: "അടിയന്തര വിവരങ്ങൾ",
    advisories: "പൊതു ഉപദേശങ്ങൾ",

    // Help
    helpTitle: "സഹായവും പിന്തുണയും",
    helpContact: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
    helpline: "ഹെൽപ്പ്‌ലൈൻ",
    email: "ഇമെയിൽ",
    operatingHours: "പ്രവർത്തന സമയം",
    helpHours: "24/7 ലഭ്യമാണ്",
    faq: "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ",

    // Session & Privacy
    sessionTimeout: "സെഷൻ കാലഹരണപ്പെട്ടു",
    sessionTimeoutMessage: "നിങ്ങളുടെ സെഷൻ കാലഹരണപ്പെടും",
    sessionExpired: "സെഷൻ കാലഹരണപ്പെട്ടു",
    sessionExpiredMessage: "നിങ്ങളുടെ സെഷൻ കാലഹരണപ്പെട്ടു. ഹോം സ്ക്രീനിലേക്ക് മടങ്ങുന്നു...",
    privacyNotice: "സ്വകാര്യതാ അറിയിപ്പ്",
    privacyMessage: "നിങ്ങളുടെ ഡാറ്റ സുരക്ഷിതമാണ്, സേവന വിതരണത്തിനായി മാത്രം ഉപയോഗിക്കും.",

    // Status Messages
    loading: "ലോഡ് ചെയ്യുന്നു...",
    processing: "പ്രോസസ്സ് ചെയ്യുന്നു...",
    success: "വിജയം",
    error: "പിശക്",
    noDataFound: "ഡാറ്റ കണ്ടെത്തിയില്ല",
    tryAgain: "വീണ്ടും ശ്രമിക്കുക",

    // Currency
    currency: "₹",

    // Time
    seconds: "സെക്കൻഡുകൾ",
    minutes: "മിനിറ്റുകൾ",
  },

  pa: {
    // Welcome Page
    welcome: "ਸੁਆਗਤ ਹੈ",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
    touchToStart: "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਛੂਹੋ",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "ਪਿੱਛੇ",
    next: "ਅੱਗੇ",
    submit: "ਜਮ੍ਹਾਂ ਕਰੋ",
    cancel: "ਰੱਦ ਕਰੋ",
    confirm: "ਪੁਸ਼ਟੀ ਕਰੋ",
    close: "ਬੰਦ ਕਰੋ",
    home: "ਹੋਮ",
    help: "ਮਦਦ",
    logout: "ਸੈਸ਼ਨ ਖਤਮ ਕਰੋ",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ਉੱਚ ਕੰਟ੍ਰਾਸਟ",
    sessionTimer: "ਸੈਸ਼ਨ ਸਮਾਂ",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "ਇੱਕ ਸੇਵਾ ਚੁਣੋ",
    homeSubtitle: "ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਸੇਵਾਵਾਂ ਵਿੱਚੋਂ ਚੁਣੋ",
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    myDashboard: "ਮੇਰਾ ਡੈਸ਼ਬੋਰਡ",
    goodAfternoon: "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
    goodMorning: "ਸ਼ੁਭ ਸਵੇਰ",
    goodEvening: "ਸ਼ੁਭ ਸ਼ਾਮ",
    citizenId: "ਨਾਗਰਿਕ ਪਛਾਣ",
    totalDue: "ਕੁੱਲ ਬਕਾਇਆ",
    active: "ਸਰਗਰਮ",
    pending: "ਬਕਾਇਆ",
    actionsRequired: "ਲੋੜੀਂਦੀ ਕਾਰਵਾਈ",
    yourConnectedServices: "ਤੁਹਾਡੀਆਂ ਜੁੜੀਆਂ ਸੇਵਾਵਾਂ",
    viewAll: "ਸਭ ਦੇਖੋ",
    recentActivity: "ਹਾਲੀਆ ਸ਼ਿਕਾਇਤਾਂ ਅਤੇ ਗਤੀਵਿਧੀ",
    newComplaint: "ਨਵੀਂ ਸ਼ਿਕਾਇਤ",
    linkNewService: "ਨਵੀਂ ਸੇਵਾ ਲਿੰਕ ਕਰੋ",
    complaints: "ਸ਼ਿਕਾਇਤਾਂ",
    services: "ਸੇਵਾਵਾਂ",

    // Services
    electricity: "ਬਿਜਲੀ",
    gas: "ਗੈਸ",
    water: "ਪਾਣੀ",
    municipal: "ਮਿਉਂਸਪਲ ਸੇਵਾਵਾਂ",
    sanitation: "ਸਫਾਈ",

    // Service Actions
    viewBill: "ਬਿੱਲ ਦੇਖੋ",
    payBill: "ਬਿੱਲ ਦਾ ਭੁਗਤਾਨ ਕਰੋ",
    serviceInfo: "ਸੇਵਾ ਜਾਣਕਾਰੀ",
    registerComplaint: "ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰੋ",
    trackComplaint: "ਸ਼ਿਕਾਇਤ ਟਰੈਕ ਕਰੋ",
    newConnection: "ਨਵਾਂ ਕਨੈਕਸ਼ਨ",
    requestService: "ਸੇਵਾ ਬੇਨਤੀ",

    // Bill Payment
    lookupMethod: "ਖੋਜ ਵਿਧੀ",
    byConsumerId: "ਖਪਤਕਾਰ ਨੰਬਰ ਦੁਆਰਾ",
    byMobileNumber: "ਮੋਬਾਈਲ ਨੰਬਰ ਦੁਆਰਾ",
    enterConsumerId: "ਖਪਤਕਾਰ ID ਦਰਜ ਕਰੋ",
    enterPhoneNumber: "ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ",
    consumerIdPlaceholder: "ਖਪਤਕਾਰ ID / ਖਾਤਾ ਨੰਬਰ",
    phoneNumberPlaceholder: "10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ",
    lookupHelperConsumer: "ਆਪਣਾ ਬਿੱਲ ਦੇਖਣ ਲਈ ਆਪਣਾ ਖਪਤਕਾਰ ਨੰਬਰ ਦਰਜ ਕਰੋ",
    lookupHelperMobile: "ਜੇ ਤੁਹਾਨੂੰ ਆਪਣਾ ਖਪਤਕਾਰ ਨੰਬਰ ਯਾਦ ਨਹੀਂ ਹੈ, ਤਾਂ ਆਪਣਾ ਰਜਿਸਟਰਡ ਮੋਬਾਈਲ ਨੰਬਰ ਵਰਤੋ",
    fetchBill: "ਬਿੱਲ ਪ੍ਰਾਪਤ ਕਰੋ",
    billDetails: "ਬਿੱਲ ਵੇਰਵੇ",
    consumerName: "ਖਪਤਕਾਰ ਦਾ ਨਾਮ",
    consumerAddress: "ਪਤਾ",
    billAmount: "ਬਿੱਲ ਰਕਮ",
    dueDate: "ਅੰਤਿਮ ਤਾਰੀਖ",
    billPeriod: "ਬਿਲਿੰਗ ਮਿਆਦ",
    previousDues: "ਪਿਛਲੇ ਬਕਾਏ",
    totalAmount: "ਕੁੱਲ ਰਕਮ",
    payNow: "ਹੁਣ ਭੁਗਤਾਨ ਕਰੋ",

    // Payment Success
    paymentSuccess: "ਭੁਗਤਾਨ ਸਫਲ!",
    paymentSuccessMessage: "ਤੁਹਾਡਾ ਭੁਗਤਾਨ ਸਫਲਤਾਪੂਰਵਕ ਪ੍ਰੋਸੈਸ ਹੋ ਗਿਆ ਹੈ",
    transactionId: "ਲੈਣ-ਦੇਣ ID",
    paymentDate: "ਭੁਗਤਾਨ ਤਾਰੀਖ",
    amountPaid: "ਭੁਗਤਾਨ ਕੀਤੀ ਰਕਮ",
    downloadReceipt: "ਰਸੀਦ ਡਾਊਨਲੋਡ ਕਰੋ",
    printReceipt: "ਰਸੀਦ ਪ੍ਰਿੰਟ ਕਰੋ",

    // Complaint Registration
    complaintTitle: "ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰੋ",
    selectCategory: "ਸਮੱਸਿਆ ਸ਼੍ਰੇਣੀ ਚੁਣੋ",
    categoryElectricity: "ਬਿਜਲੀ ਕਟੌਤੀ / ਬਿਜਲੀ ਸਮੱਸਿਆ",
    categoryGas: "ਗੈਸ ਸਪਲਾਈ ਸਮੱਸਿਆ",
    categoryWater: "ਪਾਣੀ ਸਪਲਾਈ / ਗੁਣਵੱਤਾ ਸਮੱਸਿਆ",
    categoryStreetlight: "ਸਟਰੀਟ ਲਾਈਟ ਕੰਮ ਨਹੀਂ ਕਰ ਰਹੀ",
    categoryGarbage: "ਕੂੜਾ ਇਕੱਠਾ ਕਰਨ ਦੀ ਸਮੱਸਿਆ",
    categorySanitation: "ਸਫਾਈ / ਡਰੇਨੇਜ ਸਮੱਸਿਆ",
    categoryOther: "ਹੋਰ",
    complaintDescription: "ਸਮੱਸਿਆ ਦਾ ਵਰਣਨ ਕਰੋ",
    descriptionPlaceholder: "ਕਿਰਪਾ ਕਰਕੇ ਸਮੱਸਿਆ ਬਾਰੇ ਵੇਰਵੇ ਦਿਓ...",
    attachPhoto: "ਫੋਟੋ ਨੱਥੀ ਕਰੋ (ਵਿਕਲਪਿਕ)",
    submitComplaint: "ਸ਼ਿਕਾਇਤ ਜਮ੍ਹਾਂ ਕਰੋ",
    complaintSuccess: "ਸ਼ਿਕਾਇਤ ਸਫਲਤਾਪੂਰਵਕ ਦਰਜ ਹੋਈ",
    complaintTicketId: "ਸ਼ਿਕਾਇਤ ਟਿਕਟ ID",
    complaintMessage: "ਤੁਹਾਡੀ ਸ਼ਿਕਾਇਤ ਦਰਜ ਹੋ ਗਈ ਹੈ। ਟਰੈਕਿੰਗ ਲਈ ਟਿਕਟ ID ਨੋਟ ਕਰੋ।",

    // Municipal Services
    municipalTitle: "ਮਿਉਂਸਪਲ ਸੇਵਾਵਾਂ",
    grievanceRegistration: "ਸ਼ਿਕਾਇਤ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    trackGrievance: "ਸ਼ਿਕਾਇਤ ਸਥਿਤੀ ਟਰੈਕ ਕਰੋ",
    emergencyInfo: "ਐਮਰਜੈਂਸੀ ਜਾਣਕਾਰੀ",
    advisories: "ਜਨਤਕ ਸਲਾਹ",

    // Help
    helpTitle: "ਮਦਦ ਅਤੇ ਸਹਾਇਤਾ",
    helpContact: "ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
    helpline: "ਹੈਲਪਲਾਈਨ",
    email: "ਈਮੇਲ",
    operatingHours: "ਕੰਮਕਾਜੀ ਸਮਾਂ",
    helpHours: "24/7 ਉਪਲਬਧ",
    faq: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",

    // Session & Privacy
    sessionTimeout: "ਸੈਸ਼ਨ ਸਮਾਂ ਸਮਾਪਤ",
    sessionTimeoutMessage: "ਤੁਹਾਡਾ ਸੈਸ਼ਨ ਸਮਾਪਤ ਹੋ ਜਾਵੇਗਾ",
    sessionExpired: "ਸੈਸ਼ਨ ਸਮਾਪਤ ਹੋ ਗਿਆ",
    sessionExpiredMessage: "ਤੁਹਾਡਾ ਸੈਸ਼ਨ ਸਮਾਪਤ ਹੋ ਗਿਆ ਹੈ। ਹੋਮ ਸਕ੍ਰੀਨ 'ਤੇ ਵਾਪਸ ਜਾ ਰਹੇ ਹਾਂ...",
    privacyNotice: "ਗੋਪਨੀਯਤਾ ਨੋਟਿਸ",
    privacyMessage: "ਤੁਹਾਡਾ ਡੇਟਾ ਸੁਰੱਖਿਅਤ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਸੇਵਾ ਵਿਤਰਣ ਲਈ ਵਰਤਿਆ ਜਾਵੇਗਾ।",

    // Status Messages
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    processing: "ਪ੍ਰੋਸੈਸ ਹੋ ਰਿਹਾ ਹੈ...",
    success: "ਸਫਲਤਾ",
    error: "ਗਲਤੀ",
    noDataFound: "ਕੋਈ ਡੇਟਾ ਨਹੀਂ ਮਿਲਿਆ",
    tryAgain: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",

    // Currency
    currency: "₹",

    // Time
    seconds: "ਸਕਿੰਟ",
    minutes: "ਮਿੰਟ",
  },

  ur: {
    // Welcome Page
    welcome: "خوش آمدید",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "براہ کرم اپنی زبان منتخب کریں",
    touchToStart: "شروع کرنے کے لیے چھوئیں",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "واپس",
    next: "اگلا",
    submit: "جمع کرائیں",
    cancel: "منسوخ کریں",
    confirm: "تصدیق کریں",
    close: "بند کریں",
    home: "ہوم",
    help: "مدد",
    logout: "سیشن ختم کریں",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ہائی کنٹراسٹ",
    sessionTimer: "سیشن کا وقت",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "ایک سروس منتخب کریں",
    homeSubtitle: "ذیل کی خدمات میں سے منتخب کریں",
    dashboard: "ڈیش بورڈ",
    myDashboard: "میرا ڈیش بورڈ",
    goodAfternoon: "سہ پہر بخیر",
    goodMorning: "صبح بخیر",
    goodEvening: "شام بخیر",
    citizenId: "شہری شناخت",
    totalDue: "کل واجب الادا",
    active: "فعال",
    pending: "زیر التواء",
    actionsRequired: "مطلوبہ کارروائی",
    yourConnectedServices: "آپ کی منسلک خدمات",
    viewAll: "سب دیکھیں",
    recentActivity: "حالیہ شکایات اور سرگرمی",
    newComplaint: "نئی شکایت",
    linkNewService: "نئی سروس لنک کریں",
    complaints: "شکایات",
    services: "خدمات",

    // Services
    electricity: "بجلی",
    gas: "گیس",
    water: "پانی",
    municipal: "میونسپل خدمات",
    sanitation: "صفائی",

    // Service Actions
    viewBill: "بل دیکھیں",
    payBill: "بل ادا کریں",
    serviceInfo: "سروس کی معلومات",
    registerComplaint: "شکایت درج کریں",
    trackComplaint: "شکایت ٹریک کریں",

    // Bill Payment
    lookupMethod: "تلاش کا طریقہ",
    byConsumerId: "صارف نمبر کے ذریعے",
    byMobileNumber: "موبائل نمبر کے ذریعے",
    enterConsumerId: "صارف ID درج کریں",
    enterPhoneNumber: "فون نمبر درج کریں",
    consumerIdPlaceholder: "صارف ID / اکاؤنٹ نمبر",
    phoneNumberPlaceholder: "10 ہندسوں کا موبائل نمبر",
    lookupHelperConsumer: "اپنا بل دیکھنے کے لیے اپنا صارف نمبر درج کریں",
    lookupHelperMobile: "اگر آپ کو اپنا صارف نمبر یاد نہیں ہے تو اپنا رجسٹرڈ موبائل نمبر استعمال کریں",
    fetchBill: "بل حاصل کریں",
    billDetails: "بل کی تفصیلات",
    consumerName: "صارف کا نام",
    consumerAddress: "پتہ",
    billAmount: "بل کی رقم",
    dueDate: "آخری تاریخ",
    billPeriod: "بلنگ کی مدت",
    previousDues: "پچھلے واجبات",
    totalAmount: "کل رقم",
    payNow: "ابھی ادا کریں",

    // Payment Success
    paymentSuccess: "ادائیگی کامیاب!",
    paymentSuccessMessage: "آپ کی ادائیگی کامیابی سے مکمل ہو گئی",
    transactionId: "لین دین ID",
    paymentDate: "ادائیگی کی تاریخ",
    amountPaid: "ادا شدہ رقم",
    downloadReceipt: "رسید ڈاؤن لوڈ کریں",
    printReceipt: "رسید پرنٹ کریں",

    // Complaint Registration
    complaintTitle: "شکایت درج کریں",
    selectCategory: "مسئلہ کی قسم منتخب کریں",
    categoryElectricity: "بجلی کی بندش / بجلی کا مسئلہ",
    categoryGas: "گیس کی فراہمی کا مسئلہ",
    categoryWater: "پانی کی فراہمی / معیار کا مسئلہ",
    categoryStreetlight: "اسٹریٹ لائٹ کام نہیں کر رہی",
    categoryGarbage: "کوڑا اکٹھا کرنے کا مسئلہ",
    categorySanitation: "صفائی / نکاسی کا مسئلہ",
    categoryOther: "دیگر",
    complaintDescription: "مسئلہ بیان کریں",
    descriptionPlaceholder: "براہ کرم مسئلے کی تفصیلات فراہم کریں...",
    attachPhoto: "تصویر منسلک کریں (اختیاری)",
    submitComplaint: "شکایت جمع کرائیں",
    complaintSuccess: "شکایت کامیابی سے درج ہو گئی",
    complaintTicketId: "شکایت ٹکٹ ID",
    complaintMessage: "آپ کی شکایت درج ہو گئی ہے۔ ٹریکنگ کے لیے ٹکٹ ID نوٹ کریں۔",

    // Municipal Services
    municipalTitle: "میونسپل خدمات",
    grievanceRegistration: "شکایت کی رجسٹریشن",
    trackGrievance: "شکایت کی حیثیت ٹریک کریں",
    emergencyInfo: "ہنگامی معلومات",
    advisories: "عوامی مشورے",

    // Help
    helpTitle: "مدد اور معاونت",
    helpContact: "رابطہ کی معلومات",
    helpline: "ہیلپ لائن",
    email: "ای میل",
    operatingHours: "کام کے اوقات",
    helpHours: "24/7 دستیاب",
    faq: "اکثر پوچھے جانے والے سوالات",

    // Session & Privacy
    sessionTimeout: "سیشن ختم ہو گیا",
    sessionTimeoutMessage: "آپ کا سیشن ختم ہو جائے گا",
    sessionExpired: "سیشن ختم ہو گیا",
    sessionExpiredMessage: "آپ کا سیشن ختم ہو گیا ہے۔ ہوم سکرین پر واپس جا رہے ہیں...",
    privacyNotice: "رازداری کا نوٹس",
    privacyMessage: "آپ کا ڈیٹا محفوظ ہے اور صرف سروس کی فراہمی کے لیے استعمال ہوگا۔",

    // Status Messages
    loading: "لوڈ ہو رہا ہے...",
    processing: "پروسیس ہو رہا ہے...",
    success: "کامیابی",
    error: "خرابی",
    noDataFound: "کوئی ڈیٹا نہیں ملا",
    tryAgain: "دوبارہ کوشش کریں",

    // Currency
    currency: "₹",

    // Time
    seconds: "سیکنڈ",
    minutes: "منٹ",
  },

  ne: {
    // Welcome Page
    welcome: "स्वागत छ",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "कृपया आफ्नो भाषा छान्नुहोस्",
    touchToStart: "सुरु गर्न छुनुहोस्",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "पछाडि",
    next: "अगाडि",
    submit: "पेश गर्नुहोस्",
    cancel: "रद्द गर्नुहोस्",
    confirm: "पुष्टि गर्नुहोस्",
    close: "बन्द गर्नुहोस्",
    home: "होम",
    help: "मद्दत",
    logout: "सत्र समाप्त गर्नुहोस्",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "उच्च कन्ट्रास्ट",
    sessionTimer: "सत्र समय",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "सेवा छान्नुहोस्",
    homeSubtitle: "तलका सेवाहरूबाट छान्नुहोस्",
    dashboard: "ड्यासबोर्ड",
    myDashboard: "मेरो ड्यासबोर्ड",
    goodAfternoon: "शुभ दिउँसो",
    goodMorning: "शुभ प्रभात",
    goodEvening: "शुभ सन्ध्या",
    citizenId: "नागरिक परिचय",
    totalDue: "कुल बाँकी",
    active: "सक्रिय",
    pending: "लामो समयदेखि बाँकी",
    actionsRequired: "आवश्यक कार्य",
    yourConnectedServices: "तपाईंको जडान गरिएका सेवाहरू",
    viewAll: "सबै हेर्नुहोस्",
    recentActivity: "भर्खरका गुनासोहरू र गतिविधि",
    newComplaint: "नयाँ गुनासो",
    linkNewService: "नयाँ सेवा लिंक गर्नुहोस्",
    complaints: "गुनासोहरू",
    services: "सेवाहरू",

    // Services
    electricity: "बिजुली",
    gas: "ग्यास",
    water: "पानी",
    municipal: "नगरपालिका सेवाहरू",
    sanitation: "सरसफाई",

    // Service Actions
    viewBill: "बिल हेर्नुहोस्",
    payBill: "बिल तिर्नुहोस्",
    serviceInfo: "सेवा जानकारी",
    registerComplaint: "गुनासो दर्ता गर्नुहोस्",
    trackComplaint: "गुनासो ट्र्याक गर्नुहोस्",
    newConnection: "नयाँ जडान",
    requestService: "सेवा अनुरोध",

    // Bill Payment
    lookupMethod: "खोजी विधि",
    byConsumerId: "उपभोक्ता नम्बरद्वारा",
    byMobileNumber: "मोबाइल नम्बरद्वारा",
    enterConsumerId: "उपभोक्ता ID प्रविष्ट गर्नुहोस्",
    enterPhoneNumber: "फोन नम्बर प्रविष्ट गर्नुहोस्",
    consumerIdPlaceholder: "उपभोक्ता ID / खाता नम्बर",
    phoneNumberPlaceholder: "१० अंकको मोबाइल नम्बर",
    lookupHelperConsumer: "आफ्नो बिल हेर्न आफ्नो उपभोक्ता नम्बर प्रविष्ट गर्नुहोस्",
    lookupHelperMobile: "यदि तपाईंलाई आफ्नो उपभोक्ता नम्बर याद छैन भने, आफ्नो दर्ता गरिएको मोबाइल नम्बर प्रयोग गर्नुहोस्",
    fetchBill: "बिल प्राप्त गर्नुहोस्",
    billDetails: "बिल विवरण",
    consumerName: "उपभोक्ताको नाम",
    consumerAddress: "ठेगाना",
    billAmount: "बिल रकम",
    dueDate: "अन्तिम मिति",
    billPeriod: "बिलिङ अवधि",
    previousDues: "अघिल्लो बाँकी",
    totalAmount: "कुल रकम",
    payNow: "अहिले तिर्नुहोस्",

    // Payment Success
    paymentSuccess: "भुक्तानी सफल!",
    paymentSuccessMessage: "तपाईंको भुक्तानी सफलतापूर्वक प्रशोधन भयो",
    transactionId: "लेनदेन ID",
    paymentDate: "भुक्तानी मिति",
    amountPaid: "तिरेको रकम",
    downloadReceipt: "रसिद डाउनलोड गर्नुहोस्",
    printReceipt: "रसिद प्रिन्ट गर्नुहोस्",

    // Complaint Registration
    complaintTitle: "गुनासो दर्ता गर्नुहोस्",
    selectCategory: "समस्या श्रेणी छान्नुहोस्",
    categoryElectricity: "बिजुली कटौती / बिजुली समस्या",
    categoryGas: "ग्यास आपूर्ति समस्या",
    categoryWater: "पानी आपूर्ति / गुणस्तर समस्या",
    categoryStreetlight: "सडक बत्ती काम गरिरहेको छैन",
    categoryGarbage: "फोहोर सङ्कलन समस्या",
    categorySanitation: "सरसफाई / ड्रेनेज समस्या",
    categoryOther: "अन्य",
    complaintDescription: "समस्या वर्णन गर्नुहोस्",
    descriptionPlaceholder: "कृपया समस्याको विवरण प्रदान गर्नुहोस्...",
    attachPhoto: "फोटो संलग्न गर्नुहोस् (वैकल्पिक)",
    submitComplaint: "गुनासो पेश गर्नुहोस्",
    complaintSuccess: "गुनासो सफलतापूर्वक दर्ता भयो",
    complaintTicketId: "गुनासो टिकट ID",
    complaintMessage: "तपाईंको गुनासो दर्ता भयो। ट्र्याकिङको लागि टिकट ID नोट गर्नुहोस्।",

    // Municipal Services
    municipalTitle: "नगरपालिका सेवाहरू",
    grievanceRegistration: "गुनासो दर्ता",
    trackGrievance: "गुनासो स्थिति ट्र्याक गर्नुहोस्",
    emergencyInfo: "आपतकालीन जानकारी",
    advisories: "सार्वजनिक सल्लाहहरू",

    // Help
    helpTitle: "मद्दत र समर्थन",
    helpContact: "सम्पर्क जानकारी",
    helpline: "हेल्पलाइन",
    email: "इमेल",
    operatingHours: "सञ्चालन समय",
    helpHours: "२४/७ उपलब्ध",
    faq: "बारम्बार सोधिने प्रश्नहरू",

    // Session & Privacy
    sessionTimeout: "सत्र समाप्त भयो",
    sessionTimeoutMessage: "तपाईंको सत्र समाप्त हुनेछ",
    sessionExpired: "सत्र समाप्त भयो",
    sessionExpiredMessage: "तपाईंको सत्र समाप्त भयो। होम स्क्रिनमा फर्किदै...",
    privacyNotice: "गोपनीयता सूचना",
    privacyMessage: "तपाईंको डाटा सुरक्षित छ र सेवा वितरणको लागि मात्र प्रयोग गरिनेछ।",

    // Status Messages
    loading: "लोड हुँदैछ...",
    processing: "प्रशोधन हुँदैछ...",
    success: "सफलता",
    error: "त्रुटि",
    noDataFound: "कुनै डाटा फेला परेन",
    tryAgain: "फेरि प्रयास गर्नुहोस्",

    // Currency
    currency: "₹",

    // Time
    seconds: "सेकेन्ड",
    minutes: "मिनेट",
  },

  kok: {
    // Welcome Page
    welcome: "स्वागत आसा",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "कृपया तुमची भास निवडा",
    touchToStart: "सुरू करपाक स्पर्श करा",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "फाटीं",
    next: "फुडें",
    submit: "सादर करा",
    cancel: "रद्द करा",
    confirm: "पुष्टी करा",
    close: "बंद करा",
    home: "घर",
    help: "मदत",
    logout: "सत्र संपोवप",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "उच्च विरोधाभास",
    sessionTimer: "सत्र वेळ",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "सेवा निवडा",
    homeSubtitle: "सकयल दिल्ल्या सेवांतल्यान निवडा",
    dashboard: "डॅशबोर्ड",
    myDashboard: "मजो डॅशबोर्ड",
    goodAfternoon: "बरे दनपार",
    goodMorning: "देव बरें करू",
    goodEvening: "बरी सांज",
    citizenId: "नागरीक वळख",
    totalDue: "एकूण बाकी",
    active: "चालू",
    pending: "प्रलंबित",
    actionsRequired: "गर्विरोध कार्य",
    yourConnectedServices: "तुमच्यो जोडिल्ल्यो सेवा",
    viewAll: "सगळें पळयात",
    recentActivity: "हालची तक्रार आनी हालचाल",
    newComplaint: "नवी तक्रार",
    linkNewService: "नवी सेवा जोडा",
    complaints: "तक्रारी",
    services: "सेवा",

    // Services
    electricity: "वीज",
    gas: "गॅस",
    water: "उदक",
    municipal: "नगरपालिका सेवा",
    sanitation: "स्वच्छता",

    // Service Actions
    viewBill: "बिल पळयात",
    payBill: "बिल भरा",
    serviceInfo: "सेवा म्हायती",
    registerComplaint: "तक्रार नोंद करा",
    trackComplaint: "तक्रार ट्रॅक करा",
    newConnection: "नवीन कनेक्शन",
    requestService: "सेवा विनंती",

    // Bill Payment
    lookupMethod: "सोद पद्धत",
    byConsumerId: "ग्राहक क्रमांकान",
    byMobileNumber: "मोबाइल नंबरान",
    enterConsumerId: "ग्राहक ID घाला",
    enterPhoneNumber: "फोन नंबर घाला",
    consumerIdPlaceholder: "ग्राहक ID / खातो क्रमांक",
    phoneNumberPlaceholder: "१० अंकी मोबाइल नंबर",
    lookupHelperConsumer: "आफ्नो बिल हेर्न आफ्नो उपभोक्ता नम्बर प्रविष्ट गर्नुहोस्",
    lookupHelperMobile: "यदि तपाईंलाई आफ्नो उपभोक्ता नम्बर याद छैन भने, आफ्नो दर्ता गरिएको मोबाइल नम्बर प्रयोग गर्नुहोस्",
    fetchBill: "बिल मेळोवप",
    billDetails: "बिल तपशील",
    consumerName: "ग्राहकाचें नांव",
    consumerAddress: "पत्तो",
    billAmount: "बिल रक्कम",
    dueDate: "अंतिम मिति",
    billPeriod: "बिलिङ काळ",
    previousDues: "आदलीं थकबाकी",
    totalAmount: "कुल रक्कम",
    payNow: "आतां भरा",

    // Payment Success
    paymentSuccess: "भुक्तानी सफल!",
    paymentSuccessMessage: "तपाईंको भुक्तानी सफलतापूर्वक प्रशोधन भयो",
    transactionId: "लेनदेन ID",
    paymentDate: "भुक्तानी मिति",
    amountPaid: "तिरेको रकम",
    downloadReceipt: "रसिद डाउनलोड करा",
    printReceipt: "रसिद प्रिंट करा",

    // Complaint Registration
    complaintTitle: "गुनासो दर्ता गर्नुहोस्",
    selectCategory: "समस्या श्रेणी छान्नुहोस्",
    categoryElectricity: "बिजुली कटौती / बिजुली समस्या",
    categoryGas: "ग्यास आपूर्ति समस्या",
    categoryWater: "पानी आपूर्ति / गुणस्तर समस्या",
    categoryStreetlight: "सडक बत्ती काम गरिरहेको छैन",
    categoryGarbage: "फोहोर सङ्कलन समस्या",
    categorySanitation: "सरसफाई / ड्रेनेज समस्या",
    categoryOther: "अन्य",
    complaintDescription: "समस्या वर्णन गर्नुहोस्",
    descriptionPlaceholder: "कृपया समस्याको विवरण प्रदान गर्नुहोस्...",
    attachPhoto: "फोटो जोडा (पर्यायी)",
    submitComplaint: "गुनासो पेश गर्नुहोस्",
    complaintSuccess: "गुनासो सफलतापूर्वक दर्ता भयो",
    complaintTicketId: "गुनासो टिकट ID",
    complaintMessage: "तपाईंको गुनासो दर्ता भयो। ट्र्याकिङको लागि टिकट ID नोट गर्नुहोस्।",

    // Municipal Services
    municipalTitle: "नगरपालिका सेवा",
    grievanceRegistration: "तक्रार नोंदणी",
    trackGrievance: "तक्रार स्थिती ट्रॅक करा",
    emergencyInfo: "आपतकालीन म्हायती",
    advisories: "सार्वजनिक सल्लो",

    // Help
    helpTitle: "मदत आनी आदार",
    helpContact: "संपर्क म्हायती",
    helpline: "हेल्पलाइन",
    email: "ईमेल",
    operatingHours: "कार्य वेळ",
    helpHours: "२४/७ उपलब्ध",
    faq: "बारम्बार सोधिने प्रश्नहरू",

    // Session & Privacy
    sessionTimeout: "सत्र समाप्त भयो",
    sessionTimeoutMessage: "तपाईंको सत्र समाप्त हुनेछ",
    sessionExpired: "सत्र समाप्त भयो",
    sessionExpiredMessage: "तपाईंको सत्र समाप्त भयो। होम स्क्रिनमा फर्किदै...",
    privacyNotice: "गोपनीयता सूचना",
    privacyMessage: "तपाईंको डाटा सुरक्षित छ र सेवा वितरणको लागि मात्र प्रयोग गरिनेछ।",

    // Status Messages
    loading: "लोड हुँदैछ...",
    processing: "प्रशोधन हुँदैछ...",
    success: "सफलता",
    error: "त्रुटि",
    noDataFound: "कुनै डाटा फेला परेन",
    tryAgain: "फेरि प्रयास गर्नुहोस्",

    // Currency
    currency: "₹",

    // Time
    seconds: "सेकेन्ड",
    minutes: "मिनेट",
  },

  brx: {
    // Welcome Page
    welcome: "स्वागत",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "कृपया अपनी भाषा चुनें",
    touchToStart: "शुरू करने के लिए स्पर्श करें",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "पीछे",
    next: "आगे",
    submit: "जमा करें",
    cancel: "रद्द करें",
    confirm: "पुष्टि करें",
    close: "बंद करें",
    home: "होम",
    help: "मदद",
    logout: "सत्र समाप्त करें",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "उच्च कंट्रास्ट",
    sessionTimer: "सत्र समय",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "एक सेवा चुनें",
    homeSubtitle: "नीचे दी गई सेवाओं में से चुनें",
    dashboard: "डैशबोर्ड",
    goodAfternoon: "शुभ दोपहर",
    goodMorning: "शुभ प्रभात",
    goodEvening: "शुभ संध्या",
    citizenId: "नागरिक आइडेंटिटी",
    totalDue: "कुल देय",
    active: "सक्रिय",
    pending: "लंबित",
    actionsRequired: "आवश्यक कार्रवाई",
    yourConnectedServices: "आपकी जुड़ी सेवाएं",
    viewAll: "सभी देखें",
    recentActivity: "हाल की शिकायतें और गतिविधि",
    newComplaint: "नई शिकायत",
    linkNewService: "नई सेवा जोड़ें",
    complaints: "शिकायतें",
    services: "सेवाएं",

    // Services
    electricity: "बिजली",
    gas: "गैस",
    water: "पानी",
    municipal: "नगरपालिका सेवाएं",
    sanitation: "स्वच्छता",

    // Service Actions
    viewBill: "बिल देखें",
    payBill: "बिल भुगतान करें",
    serviceInfo: "सेवा जानकारी",
    registerComplaint: "शिकायत दर्ज करें",
    trackComplaint: "शिकायत ट्रैक करें",
    newConnection: "नया कनेक्शन",
    requestService: "सेवा अनुरोध",

    // Bill Payment
    lookupMethod: "खोज विधि",
    byConsumerId: "उपभोक्ता संख्या द्वारा",
    byMobileNumber: "मोबाइल नंबर द्वारा",
    enterConsumerId: "उपभोक्ता ID दर्ज करें",
    enterPhoneNumber: "फोन नंबर दर्ज करें",
    consumerIdPlaceholder: "उपभोक्ता ID / खाता संख्या",
    phoneNumberPlaceholder: "10 अंकों का मोबाइल नंबर",
    lookupHelperConsumer: "अपना बिल देखने के लिए अपना उपभोक्ता नंबर दर्ज करें",
    lookupHelperMobile: "यदि आपको अपना उपभोक्ता नंबर याद नहीं है, तो अपना पंजीकृत मोबाइल नंबर उपयोग करें",
    fetchBill: "बिल प्राप्त करें",
    billDetails: "बिल विवरण",
    consumerName: "उपभोक्ता का नाम",
    consumerAddress: "पता",
    billAmount: "बिल राशि",
    dueDate: "अंतिम तिथि",
    billPeriod: "बिलिंग अवधि",
    previousDues: "पिछले बकाया",
    totalAmount: "कुल राशि",
    payNow: "अभी भुगतान करें",

    // Payment Success
    paymentSuccess: "भुगतान सफल!",
    paymentSuccessMessage: "आपका भुगतान सफलतापूर्वक प्रोसेस हो गया है",
    transactionId: "लेनदेन ID",
    paymentDate: "भुगतान तिथि",
    amountPaid: "भुगतान की गई राशि",
    downloadReceipt: "रसीद डाउनलोड करें",
    printReceipt: "रसीद प्रिंट करें",

    // Complaint Registration
    complaintTitle: "शिकायत दर्ज करें",
    selectCategory: "समस्या श्रेणी चुनें",
    categoryElectricity: "बिजली कटौती / बिजली समस्या",
    categoryGas: "गैस आपूर्ति समस्या",
    categoryWater: "पानी आपूर्ति / गुणवत्ता समस्या",
    categoryStreetlight: "स्ट्रीट लाइट काम नहीं कर रही",
    categoryGarbage: "कचरा संग्रह समस्या",
    categorySanitation: "स्वच्छता / जल निकासी समस्या",
    categoryOther: "अन्य",
    complaintDescription: "समस्या का वर्णन करें",
    descriptionPlaceholder: "कृपया समस्या के बारे में विवरण प्रदान करें...",
    attachPhoto: "फोटो संलग्न करें (वैकल्पिक)",
    submitComplaint: "शिकायत जमा करें",
    complaintSuccess: "शिकायत सफलतापूर्वक दर्ज की गई",
    complaintTicketId: "शिकायत टिकट ID",
    complaintMessage: "आपकी शिकायत दर्ज कर दी गई है। ट्रैकिंग के लिए टिकट ID नोट करें।",

    // Municipal Services
    municipalTitle: "नगरपालिका सेवाएं",
    grievanceRegistration: "शिकायत पंजीकरण",
    trackGrievance: "शिकायत स्थिति ट्रैक करें",
    emergencyInfo: "आपातकालीन जानकारी",
    advisories: "सार्वजनिक सलाह",

    // Help
    helpTitle: "मदद और सहायता",
    helpContact: "संपर्क जानकारी",
    helpline: "हेल्पलाइन",
    email: "ईमेल",
    operatingHours: "संचालन समय",
    helpHours: "24/7 उपलब्ध",
    faq: "अक्सर पूछे जाने वाले प्रश्न",

    // Session & Privacy
    sessionTimeout: "सत्र समाप्त हो गया",
    sessionTimeoutMessage: "आपका सत्र समाप्त हो जाएगा",
    sessionExpired: "सत्र समाप्त हो गया",
    sessionExpiredMessage: "आपका सत्र समाप्त हो गया है। होम स्क्रीन पर वापस जा रहे हैं...",
    privacyNotice: "गोपनीयता सूचना",
    privacyMessage: "आपका डेटा सुरक्षित है और केवल सेवा वितरण के लिए उपयोग किया जाएगा।",

    // Status Messages
    loading: "लोड हो रहा है...",
    processing: "प्रोसेस हो रहा है...",
    success: "सफलता",
    error: "त्रुटि",
    noDataFound: "कोई डेटा नहीं मिला",
    tryAgain: "पुनः प्रयास करें",

    // Currency
    currency: "₹",

    // Time
    seconds: "सेकंड",
    minutes: "मिनट",
  },

  doi: {
    // Welcome Page
    welcome: "स्वागत ऐ",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "कृपया अपनी भाषा चुनो",
    touchToStart: "शुरू करने आस्तै छुओ",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "पिच्छे",
    next: "अग्गें",
    submit: "जमा करो",
    cancel: "रद्द करो",
    confirm: "पुष्टि करो",
    close: "बंद करो",
    home: "होम",
    help: "मदद",
    logout: "सत्र खत्म करो",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "उच्च कंट्रास्ट",
    sessionTimer: "सत्र समां",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "इक सेवा चुनो",
    homeSubtitle: "थल्ले दित्ती गेदी सेवाएं च चुनो",
    dashboard: "डैशबोर्ड",
    myDashboard: "मिंदा डैशबोर्ड",
    goodAfternoon: "शुभ दुपैहर",
    goodMorning: "शुभ सवेर",
    goodEvening: "शुभ शाम",
    citizenId: "शहरी पछान",
    totalDue: "कुल बकाया",
    active: "सक्रिय",
    pending: "बकाया",
    actionsRequired: "जरूरी कारवाई",
    yourConnectedServices: "तुंदियां जुड़ी दियां सेवां",
    viewAll: "सभ दिक्खो",
    recentActivity: "हाली दी शिकायतां ते गतिविधि",
    newComplaint: "नमी शिकायत",
    linkNewService: "नमी सेवा जोड़ो",
    complaints: "शिकायतां",
    services: "सेवां",

    // Services
    electricity: "बिजली",
    gas: "गैस",
    water: "पानी",
    municipal: "नगरपालिका सेवाएं",
    sanitation: "सफाई",

    // Service Actions
    viewBill: "बिल दिक्खो",
    payBill: "बिल भुगतान करो",
    serviceInfo: "सेवा जानकारी",
    registerComplaint: "शिकायत दर्ज करो",
    trackComplaint: "शिकायत ट्रैक करो",
    newConnection: "नया कनेक्शन",
    requestService: "सेवा अनुरोध",

    // Bill Payment
    lookupMethod: "खोज विधि",
    byConsumerId: "उपभोक्ता नंबर कन्नै",
    byMobileNumber: "मोबाइल नंबर कन्नै",
    enterConsumerId: "उपभोक्ता ID दर्ज करो",
    enterPhoneNumber: "फोन नंबर दर्ज करो",
    consumerIdPlaceholder: "उपभोक्ता ID / खाता नंबर",
    phoneNumberPlaceholder: "10 अंकें दा मोबाइल नंबर",
    lookupHelperConsumer: "अपना बिल दिक्खने आस्तै अपना उपभोक्ता नंबर दर्ज करो",
    lookupHelperMobile: "जेकर तुसेंगी अपना उपभोक्ता नंबर याद नेईं ऐ, तां अपना पंजीकृत मोबाइल नंबर बरतो",
    fetchBill: "बिल हासल करो",
    billDetails: "बिल विवरण",
    consumerName: "उपभोक्ता दा नां",
    consumerAddress: "पता",
    billAmount: "बिल रकम",
    dueDate: "आखरी तारीख",
    billPeriod: "बिलिंग अवधि",
    previousDues: "पैह्लें दे बकाया",
    totalAmount: "कुल रकम",
    payNow: "हुण भुगतान करो",

    // Payment Success
    paymentSuccess: "भुगतान सफल!",
    paymentSuccessMessage: "तुंदा भुगतान सफलतापूर्वक प्रोसेस होई गेआ ऐ",
    transactionId: "लेनदेन ID",
    paymentDate: "भुगतान तारीख",
    amountPaid: "भुगतान कीती गेदी रकम",
    downloadReceipt: "रसीद डाउनलोड करो",
    printReceipt: "रसीद प्रिंट करो",

    // Complaint Registration
    complaintTitle: "शिकायत दर्ज करो",
    selectCategory: "समस्या श्रेणी चुनो",
    categoryElectricity: "बिजली कटौती / बिजली समस्या",
    categoryGas: "गैस आपूर्ति समस्या",
    categoryWater: "पानी आपूर्ति / गुणवत्ता समस्या",
    categoryStreetlight: "स्ट्रीट लाइट कम्म नेईं करा करदी",
    categoryGarbage: "कचरा संग्रह समस्या",
    categorySanitation: "सफाई / नाली समस्या",
    categoryOther: "होर",
    complaintDescription: "समस्या दा वर्णन करो",
    descriptionPlaceholder: "कृपया समस्या दे बारे च विवरण देओ...",
    attachPhoto: "फोटो संलग्न करो (वैकल्पिक)",
    submitComplaint: "शिकायत जमा करो",
    complaintSuccess: "शिकायत सफलतापूर्वक दर्ज होई गेई",
    complaintTicketId: "शिकायत टिकट ID",
    complaintMessage: "तुंदी शिकायत दर्ज होई गेई ऐ। ट्रैकिंग आस्तै टिकट ID नोट करो।",

    // Municipal Services
    municipalTitle: "नगरपालिका सेवाएं",
    grievanceRegistration: "शिकायत पंजीकरण",
    trackGrievance: "शिकायत स्थिति ट्रैक करो",
    emergencyInfo: "आपातकालीन जानकारी",
    advisories: "सार्वजनिक सलाह",

    // Help
    helpTitle: "मदद ते सहायता",
    helpContact: "संपर्क जानकारी",
    helpline: "हेल्पलाइन",
    email: "ईमेल",
    operatingHours: "संचालन समां",
    helpHours: "24/7 उपलब्ध",
    faq: "अक्सर पुच्छे जांदे सवाल",

    // Session & Privacy
    sessionTimeout: "सत्र खत्म होई गेआ",
    sessionTimeoutMessage: "तुंदा सत्र खत्म होई जाग",
    sessionExpired: "सत्र खत्म होई गेआ",
    sessionExpiredMessage: "तुंदा सत्र खत्म होई गेआ ऐ। होम स्क्रीन उप्पर वापस जा करदे आं...",
    privacyNotice: "गोपनीयता सूचना",
    privacyMessage: "तुंदा डेटा सुरक्षित ऐ ते सिर्फ सेवा वितरण आस्तै बरतेआ जाग।",

    // Status Messages
    loading: "लोड होआ करदा ऐ...",
    processing: "प्रोसेस होआ करदा ऐ...",
    success: "सफलता",
    error: "त्रुटि",
    noDataFound: "कोई डेटा नेईं मिल्ला",
    tryAgain: "दुबारा कोशिश करो",

    // Currency
    currency: "₹",

    // Time
    seconds: "सेकंड",
    minutes: "मिनट",
  },

  ks: {
    // Welcome Page
    welcome: "خوش آمدید",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "براہ کرم اپنی زبان منتخب کریں",
    touchToStart: "شروع کرنے کے لیے چھوئیں",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "واپس",
    next: "اگلا",
    submit: "جمع کرائیں",
    cancel: "منسوخ کریں",
    confirm: "تصدیق کریں",
    close: "بند کریں",
    home: "ہوم",
    help: "مدد",
    logout: "سیشن ختم کریں",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ہائی کنٹراسٹ",
    sessionTimer: "سیشن کا وقت",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "ایک سروس منتخب کریں",
    homeSubtitle: "ذیل کی خدمات میں سے منتخب کریں",
    dashboard: "ڈیش بورڈ",
    myDashboard: "میون ڈیش بورڈ",
    goodAfternoon: "سہ پہر بخیر",
    goodMorning: "صبح بخیر",
    goodEvening: "شام بخیر",
    citizenId: "شہریت شناخت",
    totalDue: "کل واجب الادا",
    active: "فعال",
    pending: "زیر التواء",
    actionsRequired: "مطلوبہ کارروائی",
    yourConnectedServices: "آپ کی منسلک خدمات",
    viewAll: "سب دیکھیں",
    recentActivity: "حالیہ شکایات اور سرگرمی",
    newComplaint: "نئی شکایت",
    linkNewService: "نئی سروس لنک کریں",
    complaints: "شکایات",
    services: "خدمات",

    // Services
    electricity: "بجلی",
    gas: "گیس",
    water: "پانی",
    municipal: "میونسپل خدمات",
    sanitation: "صفائی",

    // Service Actions
    viewBill: "بل دیکھیں",
    payBill: "بل ادا کریں",
    serviceInfo: "سروس کی معلومات",
    registerComplaint: "شکایت درج کریں",
    trackComplaint: "شکایت ٹریک کریں",
    newConnection: "نیا کنکشن",
    requestService: "سروس کی درخواست",

    // Bill Payment
    lookupMethod: "تلاش کا طریقہ",
    byConsumerId: "صارف نمبر کے ذریعے",
    byMobileNumber: "موبائل نمبر کے ذریعے",
    enterConsumerId: "صارف ID درج کریں",
    enterPhoneNumber: "فون نمبر درج کریں",
    consumerIdPlaceholder: "صارف ID / اکاؤنٹ نمبر",
    phoneNumberPlaceholder: "10 ہندسوں کا موبائل نمبر",
    lookupHelperConsumer: "اپنا بل دیکھنے کے لیے اپنا صارف نمبر درج کریں",
    lookupHelperMobile: "اگر آپ کو اپنا صارف نمبر یاد نہیں ہے تو اپنا رجسٹرڈ موبائل نمبر استعمال کریں",
    fetchBill: "بل حاصل کریں",
    billDetails: "بل کی تفصیلات",
    consumerName: "صارف کا نام",
    consumerAddress: "پتہ",
    billAmount: "بل کی رقم",
    dueDate: "آخری تاریخ",
    billPeriod: "بلنگ کی مدت",
    previousDues: "پچھلے واجبات",
    totalAmount: "کل رقم",
    payNow: "ابھی ادا کریں",

    // Payment Success
    paymentSuccess: "ادائیگی کامیاب!",
    paymentSuccessMessage: "آپ کی ادائیگی کامیابی سے مکمل ہو گئی",
    transactionId: "لین دین ID",
    paymentDate: "ادائیگی کی تاریخ",
    amountPaid: "ادا شدہ رقم",
    downloadReceipt: "رسید ڈاؤن لوڈ کریں",
    printReceipt: "رسید پرنٹ کریں",

    // Complaint Registration
    complaintTitle: "شکایت درج کریں",
    selectCategory: "مسئلہ کی قسم منتخب کریں",
    categoryElectricity: "بجلی کی بندش / بجلی کا مسئلہ",
    categoryGas: "گیس کی فراہمی کا مسئلہ",
    categoryWater: "پانی کی فراہمی / معیار کا مسئلہ",
    categoryStreetlight: "اسٹریٹ لائٹ کام نہیں کر رہی",
    categoryGarbage: "کوڑا اکٹھا کرنے کا مسئلہ",
    categorySanitation: "صفائی / نکاسی کا مسئلہ",
    categoryOther: "دیگر",
    complaintDescription: "مسئلہ بیان کریں",
    descriptionPlaceholder: "براہ کرم مسئلے کی تفصیلات فراہم کریں...",
    attachPhoto: "تصویر منسلک کریں (اختیاری)",
    submitComplaint: "شکایت جمع کرائیں",
    complaintSuccess: "شکایت کامیابی سے درج ہو گئی",
    complaintTicketId: "شکایت ٹکٹ ID",
    complaintMessage: "آپ کی شکایت درج ہو گئی ہے۔ ٹریکنگ کے لیے ٹکٹ ID نوٹ کریں۔",

    // Municipal Services
    municipalTitle: "میونسپل خدمات",
    grievanceRegistration: "شکایت کی رجسٹریشن",
    trackGrievance: "شکایت کی حیثیت ٹریک کریں",
    emergencyInfo: "ہنگامی معلومات",
    advisories: "عوامی مشورے",

    // Help
    helpTitle: "مدد اور معاونت",
    helpContact: "رابطہ کی معلومات",
    helpline: "ہیلپ لائن",
    email: "ای میل",
    operatingHours: "کام کے اوقات",
    helpHours: "24/7 دستیاب",
    faq: "اکثر پوچھے جانے والے سوالات",

    // Session & Privacy
    sessionTimeout: "سیشن ختم ہو گیا",
    sessionTimeoutMessage: "آپ کا سیشن ختم ہو جائے گا",
    sessionExpired: "سیشن ختم ہو گیا",
    sessionExpiredMessage: "آپ کا سیشن ختم ہو گیا ہے۔ ہوم سکرین پر واپس جا رہے ہیں...",
    privacyNotice: "رازداری کا نوٹس",
    privacyMessage: "آپ کا ڈیٹا محفوظ ہے اور صرف سروس کی فراہمی کے لیے استعمال ہوگا۔",

    // Status Messages
    loading: "لوڈ ہو رہا ہے...",
    processing: "پروسیس ہو رہا ہے...",
    success: "کامیابی",
    error: "خرابی",
    noDataFound: "کوئی ڈیٹا نہیں ملا",
    tryAgain: "دوبارہ کوشش کریں",

    // Currency
    currency: "₹",

    // Time
    seconds: "سیکنڈ",
    minutes: "منٹ",
  },

  mai: {
    // Welcome Page
    welcome: "स्वागत अछि",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "कृपया अपन भाषा चुनू",
    touchToStart: "शुरू करबाक लेल स्पर्श करू",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "पाछू",
    next: "आगू",
    submit: "जमा करू",
    cancel: "रद्द करू",
    confirm: "पुष्टि करू",
    close: "बन्द करू",
    home: "होम",
    help: "मदति",
    logout: "सत्र समाप्त करू",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "उच्च कंट्रास्ट",
    sessionTimer: "सत्र समय",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "एकटा सेवा चुनू",
    homeSubtitle: "नीचाँ देल गेल सेवा सभ मे सँ चुनू",
    dashboard: "डैशबोर्ड",
    myDashboard: "हमर डैशबोर्ड",
    goodAfternoon: "शुभ दुपहरिया",
    goodMorning: "सुप्रभात",
    goodEvening: "शुभ साँझ",
    citizenId: "नागरिक पहचान",
    totalDue: "कुल बाकी",
    active: "सक्रिय",
    pending: "लंबित",
    actionsRequired: "आवश्यक कार्रवाई",
    yourConnectedServices: "अहाँक जुड़ल सेवा सभ",
    viewAll: "सब देखू",
    recentActivity: "हालक शिकायत आ गतिविधि",
    newComplaint: "नव शिकायत",
    linkNewService: "नव सेवा जोड़ू",
    complaints: "शिकायत सभ",
    services: "सेवा सभ",

    // Services
    electricity: "बिजली",
    gas: "गैस",
    water: "पानि",
    municipal: "नगरपालिका सेवा सभ",
    sanitation: "स्वच्छता",

    // Service Actions
    viewBill: "बिल देखू",
    payBill: "बिल भुगतान करू",
    serviceInfo: "सेवा जानकारी",
    registerComplaint: "शिकायत दर्ज करू",
    trackComplaint: "शिकायत ट्रैक करू",
    newConnection: "नया कनेक्शन",
    requestService: "सेवा अनुरोध",

    // Bill Payment
    lookupMethod: "खोज विधि",
    byConsumerId: "उपभोक्ता संख्या द्वारा",
    byMobileNumber: "मोबाइल नम्बर द्वारा",
    enterConsumerId: "उपभोक्ता ID दर्ज करू",
    enterPhoneNumber: "फोन नम्बर दर्ज करू",
    consumerIdPlaceholder: "उपभोक्ता ID / खाता संख्या",
    phoneNumberPlaceholder: "10 अंकक मोबाइल नम्बर",
    lookupHelperConsumer: "अपन बिल देखबाक लेल अपन उपभोक्ता नम्बर दर्ज करू",
    lookupHelperMobile: "जँ अहाँकेँ अपन उपभोक्ता नम्बर मोन नहि अछि, तँ अपन पंजीकृत मोबाइल नम्बर उपयोग करू",
    fetchBill: "बिल प्राप्त करू",
    billDetails: "बिल विवरण",
    consumerName: "उपभोक्ताक नाम",
    consumerAddress: "पता",
    billAmount: "बिल राशि",
    dueDate: "अंतिम तिथि",
    billPeriod: "बिलिंग अवधि",
    previousDues: "पहिलुका बकाया",
    totalAmount: "कुल राशि",
    payNow: "आब भुगतान करू",

    // Payment Success
    paymentSuccess: "भुगतान सफल!",
    paymentSuccessMessage: "अहाँक भुगतान सफलतापूर्वक प्रोसेस भेल अछि",
    transactionId: "लेनदेन ID",
    paymentDate: "भुगतान तिथि",
    amountPaid: "भुगतान कएल गेल राशि",
    downloadReceipt: "रसीद डाउनलोड करू",
    printReceipt: "रसीद प्रिंट करू",

    // Complaint Registration
    complaintTitle: "शिकायत दर्ज करू",
    selectCategory: "समस्या श्रेणी चुनू",
    categoryElectricity: "बिजली कटौती / बिजली समस्या",
    categoryGas: "गैस आपूर्ति समस्या",
    categoryWater: "पानि आपूर्ति / गुणवत्ता समस्या",
    categoryStreetlight: "स्ट्रीट लाइट काज नहि कए रहल अछि",
    categoryGarbage: "कचरा संग्रह समस्या",
    categorySanitation: "स्वच्छता / नाली समस्या",
    categoryOther: "आन",
    complaintDescription: "समस्याक वर्णन करू",
    descriptionPlaceholder: "कृपया समस्याक विवरण प्रदान करू...",
    attachPhoto: "फोटो संलग्न करू (वैकल्पिक)",
    submitComplaint: "शिकायत जमा करू",
    complaintSuccess: "शिकायत सफलतापूर्वक दर्ज भेल",
    complaintTicketId: "शिकायत टिकट ID",
    complaintMessage: "अहाँक शिकायत दर्ज भए गेल अछि। ट्रैकिंगक लेल टिकट ID नोट करू।",

    // Municipal Services
    municipalTitle: "नगरपालिका सेवा सभ",
    grievanceRegistration: "शिकायत पंजीकरण",
    trackGrievance: "शिकायत स्थिति ट्रैक करू",
    emergencyInfo: "आपातकालीन जानकारी",
    advisories: "सार्वजनिक सलाह सभ",

    // Help
    helpTitle: "मदति आ सहायता",
    helpContact: "संपर्क जानकारी",
    helpline: "हेल्पलाइन",
    email: "ईमेल",
    operatingHours: "संचालन समय",
    helpHours: "24/7 उपलब्ध",
    faq: "अक्सर पूछल जाएबला प्रश्न सभ",

    // Session & Privacy
    sessionTimeout: "सत्र समाप्त भेल",
    sessionTimeoutMessage: "अहाँक सत्र समाप्त भए जाएत",
    sessionExpired: "सत्र समाप्त भेल",
    sessionExpiredMessage: "अहाँक सत्र समाप्त भए गेल अछि। होम स्क्रीन पर वापस जाए रहल छी...",
    privacyNotice: "गोपनीयता सूचना",
    privacyMessage: "अहाँक डेटा सुरक्षित अछि आ केवल सेवा वितरणक लेल उपयोग कएल जाएत।",

    // Status Messages
    loading: "लोड भए रहल अछि...",
    processing: "प्रोसेस भए रहल अछि...",
    success: "सफलता",
    error: "त्रुटि",
    noDataFound: "कोनो डेटा नहि भेटल",
    tryAgain: "फेर प्रयास करू",

    // Currency
    currency: "₹",

    // Time
    seconds: "सेकेंड",
    minutes: "मिनट",
  },

  mni: {
    // Welcome Page
    welcome: "ꯇꯔꯥꯝꯅ ꯑꯣꯀꯆꯔꯤ",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "ꯆꯥꯅꯕꯤꯗꯨꯅ ꯅꯍꯥꯛꯀꯤ ꯂꯣꯟ ꯈꯅꯕꯤꯌꯨ",
    touchToStart: "ꯍꯧꯗꯣꯛꯅꯕꯥ ꯁꯣꯀꯄꯤꯌꯨ",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "ꯍꯟꯅ",
    next: "ꯃꯥꯡꯂꯣꯝ",
    submit: "ꯊꯥꯗꯣꯀꯄꯥ",
    cancel: "ꯀꯦꯟꯁꯦꯜ ꯇꯧꯕꯥ",
    confirm: "ꯀꯅꯐꯔꯝ ꯇꯧꯕꯥ",
    close: "ꯊꯤꯡꯕꯥ",
    home: "ꯍꯣꯝ",
    help: "ꯃꯇꯦꯡ",
    logout: "ꯁꯦꯁꯟ ꯂꯣꯏꯁꯤꯅꯕꯥ",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ꯋꯥꯡꯕ ꯀꯟꯠꯔꯥꯁ꯭ꯠ",
    sessionTimer: "ꯁꯦꯁꯟ ꯃꯇꯝ",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "ꯁꯔꯚꯤꯁ ꯑꯃꯥ ꯈꯅꯕꯤꯌꯨ",
    homeSubtitle: "ꯃꯈꯥꯗ ꯄꯤꯔꯤꯕ ꯁꯔꯚꯤꯁꯁꯤꯡꯗꯒꯤ ꯈꯅꯕꯤꯌꯨ",
    dashboard: "ꯗꯦꯁꯕꯣꯔꯗ",
    myDashboard: "ꯑꯩꯒꯤ ꯗꯦꯁꯕꯣꯔꯗ",
    goodAfternoon: "ꯒꯨꯗ ꯑꯥꯐꯇꯔꯅꯨꯟ",
    goodMorning: "ꯒꯨꯗ ꯃꯣꯔꯅꯤꯡ",
    goodEvening: "ꯒꯨꯗ ꯏꯕꯅꯤꯡ",
    citizenId: "ꯁꯤꯇꯤꯖꯦꯟ ꯑꯥꯏꯗꯤ",
    totalDue: "ꯄꯨꯂꯞ ꯄꯤꯒꯗꯕ",
    active: "ꯑꯦꯛꯇꯤꯕ",
    pending: "ꯄꯦꯟꯗꯤꯡ",
    actionsRequired: "ꯑꯦꯛꯁꯟ ꯂꯧꯈꯠꯄ ꯃꯊꯧ ꯇꯥꯏ",
    yourConnectedServices: "ꯅꯍꯥꯛꯀꯤ ꯀꯅꯦꯛꯇ ꯇꯧꯔꯕ ꯁꯔꯚꯤꯁꯁꯤꯡ",
    viewAll: "ꯄꯨꯝꯅꯃꯛ ꯌꯦꯡꯕ",
    recentActivity: "ꯍꯧꯖꯤꯛꯀꯤ ꯀꯝꯞꯂꯦꯟꯇꯁꯤꯡ ꯑꯃꯁꯨꯡ ꯑꯦꯛꯇꯤꯚꯤꯇꯤ",
    newComplaint: "ꯑꯅꯧꯕ ꯀꯝꯞꯂꯦꯟꯇ",
    linkNewService: "ꯑꯅꯧꯕ ꯁꯔꯚꯤꯁ ꯂꯤꯡꯛ ꯇꯧꯕ",
    complaints: "ꯀꯝꯞꯂꯦꯟꯇꯁꯤꯡ",
    services: "ꯁꯔꯚꯤꯁꯁꯤꯡ",

    // Services
    electricity: "ꯏꯂꯦꯛꯠꯔꯤꯁꯤꯇꯤ",
    gas: "ꯒ꯭ꯌꯥꯁ",
    water: "ꯏꯁꯤꯡ",
    municipal: "ꯃꯌꯨꯅꯤꯁꯤꯄꯦꯜ ꯁꯔꯚꯤꯁꯁꯤꯡ",
    sanitation: "ꯁꯦꯅꯤꯇꯦꯁꯟ",

    // Service Actions
    viewBill: "ꯕꯤꯜ ꯌꯦꯡꯕꯥ",
    payBill: "ꯕꯤꯜ ꯄꯦꯃꯦꯟꯇ ꯇꯧꯕꯥ",
    serviceInfo: "ꯁꯔꯚꯤꯁ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ",
    registerComplaint: "ꯀꯝꯞꯂꯦꯟꯇ ꯔꯦꯖꯤꯁ꯭ꯇꯔ ꯇꯧꯕꯥ",
    trackComplaint: "ꯀꯝꯞꯂꯦꯟꯇ ꯇ꯭ꯔꯦꯛ ꯇꯧꯕꯥ",
    newConnection: "ꯑꯅꯧꯕ ꯀꯅꯦꯛꯁꯟ",
    requestService: "ꯁꯔꯚꯤꯁ ꯔꯤꯀ꯭ꯋꯦꯁ꯭ꯠ",

    // Bill Payment
    lookupMethod: "ꯊꯤꯕꯒꯤ ꯃꯑꯣꯡ",
    byConsumerId: "ꯀꯟꯖꯨꯃꯔ ꯅꯝꯕꯔꯅ",
    byMobileNumber: "ꯃꯣꯕꯥꯏꯜ ꯅꯝꯕꯔꯅ",
    enterConsumerId: "ꯀꯟꯖꯨꯃꯔ ID ꯏꯁꯤꯟꯗꯨꯅ",
    enterPhoneNumber: "ꯐꯣꯟ ꯅꯝꯕꯔ ꯏꯁꯤꯟꯗꯨꯅ",
    consumerIdPlaceholder: "ꯀꯟꯖꯨꯃꯔ ID / ꯑꯦꯀꯥꯎꯟꯇ ꯅꯝꯕꯔ",
    phoneNumberPlaceholder: "10 ꯗꯤꯖꯤꯠꯀꯤ ꯃꯣꯕꯥꯏꯜ ꯅꯝꯕꯔ",
    lookupHelperConsumer: "ꯅꯍꯥꯛꯀꯤ ꯕꯤꯜ ꯌꯦꯡꯅꯕ ꯅꯍꯥꯛꯀꯤ ꯀꯟꯖꯨꯃꯔ ꯅꯝꯕꯔ ꯏꯁꯤꯟꯗꯨꯅ",
    lookupHelperMobile: "ꯀꯔꯤꯒꯨꯝꯕ ꯅꯍꯥꯛꯀꯤ ꯀꯟꯖꯨꯃꯔ ꯅꯝꯕꯔ ꯅꯤꯡꯁꯤꯡꯗꯕ ꯑꯣꯏꯔꯕꯗꯤ, ꯅꯍꯥꯛꯀꯤ ꯔꯦꯖꯤꯁ꯭ꯇꯔ ꯇꯧꯔꯕ ꯃꯣꯕꯥꯏꯜ ꯅꯝꯕꯔ ꯁꯤꯖꯤꯟꯅꯧ",
    fetchBill: "ꯕꯤꯜ ꯂꯧꯕꯥ",
    billDetails: "ꯕꯤꯜ ꯗꯤꯇꯦꯏꯂꯁꯤꯡ",
    consumerName: "ꯀꯟꯖꯨꯃꯔꯒꯤ ꯃꯤꯡ",
    consumerAddress: "ꯑꯦꯗ꯭ꯔꯦꯁ",
    billAmount: "ꯕꯤꯜ ꯑꯃꯥꯎꯟꯇ",
    dueDate: "ꯑꯔꯣꯏꯕ ꯇꯥꯡ",
    billPeriod: "ꯕꯤꯂꯤꯡ ꯄꯤꯔꯤꯌꯗ",
    previousDues: "ꯍꯥꯟꯅꯒꯤ ꯕꯀꯥꯌꯥ",
    totalAmount: "ꯑꯄꯨꯅꯕ ꯑꯃꯥꯎꯟꯇ",
    payNow: "ꯍꯧꯖꯤꯛ ꯄꯦ ꯇꯧꯕꯥ",

    // Payment Success
    paymentSuccess: "ꯄꯦꯃꯦꯟꯇ ꯃꯥꯌꯄꯥꯛꯂꯦ!",
    paymentSuccessMessage: "ꯅꯍꯥꯛꯀꯤ ꯄꯦꯃꯦꯟꯇ ꯃꯥꯌꯄꯥꯛꯅ ꯄ꯭ꯔꯣꯁꯦꯁ ꯇꯧꯔꯦ",
    transactionId: "ꯇ꯭ꯔꯥꯟꯖꯦꯛꯁꯟ ID",
    paymentDate: "ꯄꯦꯃꯦꯟꯇ ꯇꯥꯡ",
    amountPaid: "ꯄꯦ ꯇꯧꯔꯕ ꯑꯃꯥꯎꯟꯇ",
    downloadReceipt: "ꯔꯤꯁꯤꯠ ꯗꯥꯎꯅꯂꯣꯗ ꯇꯧꯕꯥ",
    printReceipt: "ꯔꯤꯁꯤꯠ ꯄ꯭ꯔꯤꯟꯇ ꯇꯧꯕꯥ",

    // Complaint Registration
    complaintTitle: "ꯀꯝꯞꯂꯦꯟꯇ ꯔꯦꯖꯤꯁ꯭ꯇꯔ ꯇꯧꯕꯥ",
    selectCategory: "ꯄ꯭ꯔꯣꯕ꯭ꯂꯦꯝ ꯀꯦꯇꯦꯒꯣꯔꯤ ꯈꯅꯕꯤꯌꯨ",
    categoryElectricity: "ꯏꯂꯦꯛꯠꯔꯤꯁꯤꯇꯤ ꯀꯠꯄ / ꯏꯂꯦꯛꯠꯔꯤꯁꯤꯇꯤ ꯄ꯭ꯔꯣꯕ꯭ꯂꯦꯝ",
    categoryGas: "ꯒ꯭ꯌꯥꯁ ꯁꯞꯂꯥꯏ ꯄ꯭ꯔꯣꯕ꯭ꯂꯦꯝ",
    categoryWater: "ꯏꯁꯤꯡ ꯁꯞꯂꯥꯏ / ꯀ꯭ꯕꯥꯂꯤꯇꯤ ꯄ꯭ꯔꯣꯕ꯭ꯂꯦꯝ",
    categoryStreetlight: "ꯁ꯭ꯠꯔꯤꯠ ꯂꯥꯏꯠ ꯊꯕꯛ ꯇꯧꯗꯦ",
    categoryGarbage: "ꯒꯥꯔꯕꯦꯖ ꯈꯣꯃꯖꯤꯅꯕꯒꯤ ꯄ꯭ꯔꯣꯕ꯭ꯂꯦꯝ",
    categorySanitation: "ꯁꯦꯅꯤꯇꯦꯁꯟ / ꯗ꯭ꯔꯦꯅꯦꯖ ꯄ꯭ꯔꯣꯕ꯭ꯂꯦꯝ",
    categoryOther: "ꯑꯇꯩ",
    complaintDescription: "ꯄ꯭ꯔꯣꯕ꯭ꯂꯦꯝ ꯐꯣꯡꯗꯣꯀꯄꯥ",
    descriptionPlaceholder: "ꯆꯥꯅꯕꯤꯗꯨꯅ ꯄ꯭ꯔꯣꯕ꯭ꯂꯦꯝꯒꯤ ꯃꯇꯥꯡꯗ ꯗꯤꯇꯦꯏꯜ ꯄꯤꯌꯨ...",
    attachPhoto: "ꯐꯣꯇꯣ ꯑꯦꯇꯦꯆ ꯇꯧꯕꯥ (ꯑꯣꯄꯁꯅꯦꯜ)",
    submitComplaint: "ꯀꯝꯞꯂꯦꯟꯇ ꯊꯥꯗꯣꯀꯄꯥ",
    complaintSuccess: "ꯀꯝꯞꯂꯦꯟꯇ ꯃꯥꯌꯄꯥꯛꯅ ꯔꯦꯖꯤꯁ꯭ꯇꯔ ꯇꯧꯔꯦ",
    complaintTicketId: "ꯀꯝꯞꯂꯦꯟꯇ ꯇꯤꯀꯦꯠ ID",
    complaintMessage: "ꯅꯍꯥꯛꯀꯤ ꯀꯝꯞꯂꯦꯟꯇ ꯔꯦꯖꯤꯁ꯭ꯇꯔ ꯇꯧꯔꯦ꯫ ꯇ꯭ꯔꯦꯀꯤꯡꯒꯤꯗꯃꯛ ꯇꯤꯀꯦꯠ ID ꯅꯣꯠ ꯇꯧꯕꯤꯌꯨ꯫",

    // Municipal Services
    municipalTitle: "ꯃꯌꯨꯅꯤꯁꯤꯄꯦꯜ ꯁꯔꯚꯤꯁꯁꯤꯡ",
    grievanceRegistration: "ꯀꯝꯞꯂꯦꯟꯇ ꯔꯦꯖꯤꯁ꯭ꯠꯔꯦꯁꯟ",
    trackGrievance: "ꯀꯝꯞꯂꯦꯟꯇ ꯁ꯭ꯇꯦꯇꯁ ꯇ꯭ꯔꯦꯛ ꯇꯧꯕꯥ",
    emergencyInfo: "ꯏꯃꯔꯖꯦꯟꯁꯤ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ",
    advisories: "ꯄꯕ꯭ꯂꯤꯛ ꯑꯦꯗꯚꯥꯏꯖꯔꯤꯁꯤꯡ",

    // Help
    helpTitle: "ꯃꯇꯦꯡ ꯑꯃꯁꯨꯡ ꯁꯄꯣꯔꯠ",
    helpContact: "ꯀꯟꯇꯦꯛꯇ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ",
    helpline: "ꯍꯦꯜꯄꯂꯥꯏꯟ",
    email: "ꯏꯃꯦꯏꯜ",
    operatingHours: "ꯑꯣꯄꯔꯦꯇꯤꯡ ꯑꯋꯥꯔꯁꯤꯡ",
    helpHours: "24/7 ꯐꯪꯏ",
    faq: "ꯑꯌꯥꯝꯕ ꯍꯪꯅ ꯍꯪꯂꯤꯕ ꯋꯥꯍꯪꯁꯤꯡ",

    // Session & Privacy
    sessionTimeout: "ꯁꯦꯁꯟ ꯂꯣꯏꯔꯦ",
    sessionTimeoutMessage: "ꯅꯍꯥꯛꯀꯤ ꯁꯦꯁꯟ ꯂꯣꯏꯁꯤꯅꯒꯅꯤ",
    sessionExpired: "ꯁꯦꯁꯟ ꯂꯣꯏꯔꯦ",
    sessionExpiredMessage: "ꯅꯍꯥꯛꯀꯤ ꯁꯦꯁꯟ ꯂꯣꯏꯔꯦ꯫ ꯍꯣꯝ ꯁ꯭ꯛꯔꯤꯟꯗ ꯍꯟꯅ ꯆꯠꯂꯤ...",
    privacyNotice: "ꯄ꯭ꯔꯥꯏꯚꯦꯁꯤ ꯅꯣꯇꯤꯁ",
    privacyMessage: "ꯅꯍꯥꯛꯀꯤ ꯗꯦꯇꯥ ꯁꯦꯐ ꯑꯣꯏ ꯑꯃꯁꯨꯡ ꯁꯔꯚꯤꯁ ꯗꯦꯂꯤꯚꯔꯤꯒꯤꯗꯃꯛꯇ ꯁꯤꯖꯤꯟꯅꯒꯅꯤ꯫",

    // Status Messages
    loading: "ꯂꯣꯗ ꯇꯧꯔꯤ...",
    processing: "ꯄ꯭ꯔꯣꯁꯦꯁ ꯇꯧꯔꯤ...",
    success: "ꯃꯥꯌꯄꯥꯛꯂꯦ",
    error: "ꯑꯁꯣꯏꯕ",
    noDataFound: "ꯗꯦꯇꯥ ꯐꯪꯗꯦ",
    tryAgain: "ꯑꯃꯨꯛ ꯍꯟꯅ ꯍꯣꯠꯅꯧ",

    // Currency
    currency: "₹",

    // Time
    seconds: "ꯁꯦꯀꯦꯟꯗꯁꯤꯡ",
    minutes: "ꯃꯤꯅꯤꯠꯁꯤꯡ",
  },

  sa: {
    // Welcome Page
    welcome: "स्वागतम्",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "कृपया स्वभाषां चिनुत",
    touchToStart: "आरम्भार्थं स्पृशतु",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "पृष्ठम्",
    next: "अग्रिमम्",
    submit: "प्रेषयतु",
    cancel: "निरस्यतु",
    confirm: "पुष्टीकरोतु",
    close: "बन्धयतु",
    home: "गृहम्",
    help: "साहाय्यम्",
    logout: "सत्रं समाप्यतु",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "उच्च विरोधः",
    sessionTimer: "सत्र समयः",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "सेवां चिनुत",
    homeSubtitle: "अधः दत्तेषु सेवासु चिनुत",
    dashboard: "फलकम्",
    myDashboard: "मम फलकम्",
    goodAfternoon: "शुभमध्याह्नम्",
    goodMorning: "सुप्रभातम्",
    goodEvening: "शुभसायम्",
    citizenId: "नागरिक परिचयः",
    totalDue: "कुल देयम्",
    active: "सक्रियः",
    pending: "लम्बितम्",
    actionsRequired: "आवश्यक कार्यवाही",
    yourConnectedServices: "भवतः संयोजित सेवाः",
    viewAll: "सर्वं पश्यतु",
    recentActivity: "नूतन बिलापः च गतिविधिः",
    newComplaint: "नूतन बिलापः",
    linkNewService: "नूतन सेवां योजयतु",
    complaints: "बिलापाः",
    services: "सेवाः",

    // Services
    electricity: "विद्युत्",
    gas: "गैस",
    water: "जलम्",
    municipal: "नगरपालिका सेवाः",
    sanitation: "स्वच्छता",

    // Service Actions
    viewBill: "बिलं पश्यतु",
    payBill: "बिल भुगतानं कुर्वन्तु",
    serviceInfo: "सेवा सूचना",
    registerComplaint: "शिकायतं पञ्जीकुर्वन्तु",
    trackComplaint: "शिकायतं अनुसरतु",
    newConnection: "नवीन सम्पर्कः",
    requestService: "सेवा अनुरोधः",

    // Bill Payment
    lookupMethod: "अन्वेषण विधिः",
    byConsumerId: "उपभोक्तृ संख्यया",
    byMobileNumber: "मोबाइल संख्यया",
    enterConsumerId: "उपभोक्तृ ID प्रविशतु",
    enterPhoneNumber: "फोन संख्यां प्रविशतु",
    consumerIdPlaceholder: "उपभोक्तृ ID / खाता संख्या",
    phoneNumberPlaceholder: "10 अङ्कानां मोबाइल संख्या",
    lookupHelperConsumer: "स्वबिलं द्रष्टुं स्वउपभोक्तृ संख्यां प्रविशतु",
    lookupHelperMobile: "यदि भवतः उपभोक्तृ संख्या स्मरणे नास्ति तर्हि स्वपञ्जीकृत मोबाइल संख्यां उपयुज्यताम्",
    fetchBill: "बिलं प्राप्नुवन्तु",
    billDetails: "बिल विवरणम्",
    consumerName: "उपभोक्तुः नाम",
    consumerAddress: "पता",
    billAmount: "बिल राशिः",
    dueDate: "अन्तिम तिथिः",
    billPeriod: "बिलिंग अवधिः",
    previousDues: "पूर्व बकाया",
    totalAmount: "कुल राशिः",
    payNow: "इदानीं भुगतानं कुर्वन्तु",

    // Payment Success
    paymentSuccess: "भुगतानं सफलम्!",
    paymentSuccessMessage: "भवतः भुगतानं सफलतया प्रक्रियितम्",
    transactionId: "लेनदेन ID",
    paymentDate: "भुगतान तिथिः",
    amountPaid: "भुगतितः राशिः",
    downloadReceipt: "रसीदं डाउनलोड कुर्वन्तु",
    printReceipt: "रसीदं मुद्रयतु",

    // Complaint Registration
    complaintTitle: "शिकायतं पञ्जीकुर्वन्तु",
    selectCategory: "समस्या श्रेणीं चिनुत",
    categoryElectricity: "विद्युत् कर्तनम् / विद्युत् समस्या",
    categoryGas: "गैस आपूर्ति समस्या",
    categoryWater: "जल आपूर्ति / गुणवत्ता समस्या",
    categoryStreetlight: "मार्ग प्रकाशः कार्यं न करोति",
    categoryGarbage: "कचरा संग्रहण समस्या",
    categorySanitation: "स्वच्छता / जल निकासी समस्या",
    categoryOther: "अन्यत्",
    complaintDescription: "समस्यायाः वर्णनं कुर्वन्तु",
    descriptionPlaceholder: "कृपया समस्यायाः विवरणं प्रदातु...",
    attachPhoto: "चित्रं संलग्नं कुर्वन्तु (वैकल्पिकम्)",
    submitComplaint: "शिकायतं प्रेषयतु",
    complaintSuccess: "शिकायतं सफलतया पञ्जीकृतम्",
    complaintTicketId: "शिकायत टिकट ID",
    complaintMessage: "भवतः शिकायतं पञ्जीकृतम्। अनुसरणार्थं टिकट ID टिप्पणीं कुर्वन्तु।",

    // Municipal Services
    municipalTitle: "नगरपालिका सेवाः",
    grievanceRegistration: "शिकायत पञ्जीकरणम्",
    trackGrievance: "शिकायत स्थितिं अनुसरतु",
    emergencyInfo: "आपातकालीन सूचना",
    advisories: "सार्वजनिक परामर्शाः",

    // Help
    helpTitle: "साहाय्यं च समर्थनम्",
    helpContact: "सम्पर्क सूचना",
    helpline: "सहायता रेखा",
    email: "ईमेल",
    operatingHours: "संचालन समयः",
    helpHours: "24/7 उपलब्धम्",
    faq: "बहुधा पृष्टाः प्रश्नाः",

    // Session & Privacy
    sessionTimeout: "सत्रं समाप्तम्",
    sessionTimeoutMessage: "भवतः सत्रं समाप्स्यते",
    sessionExpired: "सत्रं समाप्तम्",
    sessionExpiredMessage: "भवतः सत्रं समाप्तम्। गृह पटलं प्रति गच्छामः...",
    privacyNotice: "गोपनीयता सूचना",
    privacyMessage: "भवतः दत्तांशः सुरक्षितः अस्ति केवलं सेवा वितरणार्थं उपयुज्यते च।",

    // Status Messages
    loading: "लोड भवति...",
    processing: "प्रक्रिया भवति...",
    success: "सफलता",
    error: "त्रुटिः",
    noDataFound: "दत्तांशः न प्राप्तः",
    tryAgain: "पुनः प्रयतताम्",

    // Currency
    currency: "₹",

    // Time
    seconds: "सेकेण्डाः",
    minutes: "निमेषाः",
  },

  sat: {
    // Welcome Page
    welcome: "ᱡᱚᱦᱟᱨ",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
    touchToStart: "ᱮᱛᱦᱚᱵ ᱞᱟᱹᱜᱤᱫ ᱪᱷᱩᱸᱭ ᱢᱮ",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "ᱛᱟᱭᱚᱢ",
    next: "ᱤᱱᱟᱹ ᱛᱟᱭᱚᱢ",
    submit: "ᱡᱚᱢᱟ ᱢᱮ",
    cancel: "ᱵᱟᱹᱰᱨᱟᱹ",
    confirm: "ᱜᱚᱴᱟᱣ ᱢᱮ",
    close: "ᱵᱚᱸᱫᱚ ᱢᱮ",
    home: "ᱚᱲᱟᱜ",
    help: "ᱜᱚᱲᱚ",
    logout: "ᱥᱮᱥᱚᱱ ᱵᱚᱸᱫᱚ ᱢᱮ",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "ᱩᱥᱩᱞ ᱠᱚᱱᱴᱨᱟᱥᱴ",
    sessionTimer: "ᱥᱮᱥᱚᱱ ᱚᱠᱛᱚ",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "ᱢᱤᱫ ᱥᱮᱵᱟ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
    homeSubtitle: "ᱞᱟᱛᱟᱨ ᱮᱢ ᱟᱠᱟᱱ ᱥᱮᱵᱟᱠᱚ ᱠᱷᱚᱱ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
    dashboard: "ᱰᱮᱥᱵᱳᱨᱰ",
    myDashboard: "ᱤᱧᱟᱜ ᱰᱮᱥᱵᱳᱨᱰ",
    goodAfternoon: "ᱡᱚᱦᱟᱨ ᱛᱤᱠᱤᱱ",
    goodMorning: "ᱥᱟᱹᱜᱩᱱ ᱥᱮᱛᱟᱜ",
    goodEvening: "ᱥᱟᱹᱜᱩᱱ ᱟᱹᱭᱩᱵ",
    citizenId: "ᱱᱟᱜᱚᱨᱤᱠ ᱩᱯᱨᱩᱢ",
    totalDue: "ᱡᱚᱛᱚ ᱵᱟᱠᱤ",
    active: "ᱪᱟᱹᱞᱩ",
    pending: "ᱵᱟᱠᱤ",
    actionsRequired: "ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱠᱟᱹᱢᱤ",
    yourConnectedServices: "ᱟᱢᱟᱜ ᱡᱚᱲᱟᱣ ᱟᱠᱟᱱ ᱥᱮᱵᱟᱠᱚ",
    viewAll: "ᱡᱚᱛᱚ ᱧᱮᱞ ᱢᱮ",
    recentActivity: "ᱱᱤᱛᱚᱜᱟᱜ ᱥᱤᱠᱟᱹᱭᱚᱛ ᱟᱨ ᱠᱟᱹᱢᱤ",
    newComplaint: "ᱱᱟᱣᱟ ᱥᱤᱠᱟᱹᱭᱚᱛ",
    linkNewService: "ᱱᱟᱣᱟ ᱥᱮᱵᱟ ᱡᱚᱲᱟᱣ ᱢᱮ",
    complaints: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱠᱚ",
    services: "ᱥᱮᱵᱟᱠᱚ",

    // Services
    electricity: "ᱵᱤᱡᱽᱞᱤ",
    gas: "ᱜᱮᱥ",
    water: "ᱫᱟᱜ",
    municipal: "ᱱᱚᱜᱚᱨ ᱯᱟᱞᱤᱠᱟ ᱥᱮᱵᱟᱠᱚ",
    sanitation: "ᱥᱟᱯᱷᱟ",

    // Service Actions
    viewBill: "ᱵᱤᱞ ᱧᱮᱞ ᱢᱮ",
    payBill: "ᱵᱤᱞ ᱵᱷᱩᱜᱛᱟᱱ ᱢᱮ",
    serviceInfo: "ᱥᱮᱵᱟ ᱠᱷᱚᱵᱚᱨ",
    registerComplaint: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱚᱞ ᱢᱮ",
    trackComplaint: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱯᱟᱸᱡᱟ ᱢᱮ",
    newConnection: "ᱱᱟᱣᱟ ᱡᱚᱲᱟᱣ",
    requestService: "ᱥᱮᱵᱟ ᱠᱷᱚᱡᱽ",

    // Bill Payment
    lookupMethod: "ᱥᱮᱸᱫᱽᱨᱟ ᱦᱚᱨ",
    byConsumerId: "ᱵᱮᱵᱷᱟᱨᱤᱭᱟᱹ ᱮᱞ ᱛᱮ",
    byMobileNumber: "ᱢᱚᱵᱟᱭᱤᱞ ᱮᱞ ᱛᱮ",
    enterConsumerId: "ᱵᱮᱵᱷᱟᱨᱤᱭᱟᱹ ID ᱚᱞ ᱢᱮ",
    enterPhoneNumber: "ᱯᱷᱚᱱ ᱮᱞ ᱚᱞ ᱢᱮ",
    consumerIdPlaceholder: "ᱵᱮᱵᱷᱟᱨᱤᱭᱟᱹ ID / ᱠᱷᱟᱛᱟ ᱮᱞ",
    phoneNumberPlaceholder: "10 ᱮᱞᱮᱞᱟᱜ ᱢᱚᱵᱟᱭᱤᱞ ᱮᱞ",
    lookupHelperConsumer: "ᱟᱢᱟᱜ ᱵᱤᱞ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱵᱮᱵᱷᱟᱨᱤᱭᱟᱹ ᱮᱞ ᱚᱞ ᱢᱮ",
    lookupHelperMobile: "ᱡᱩᱫᱤ ᱟᱢᱟᱜ ᱵᱮᱵᱷᱟᱨᱤᱭᱟᱹ ᱮᱞ ᱵᱟᱝ ᱠᱩᱥᱤᱭᱟᱜ-ᱟ, ᱟᱢᱟᱜ ᱚᱞ ᱟᱠᱟᱱ ᱢᱚᱵᱟᱭᱤᱞ ᱮᱞ ᱵᱮᱵᱷᱟᱨ ᱢᱮ",
    fetchBill: "ᱵᱤᱞ ᱟᱹᱜᱩ ᱢᱮ",
    billDetails: "ᱵᱤᱞ ᱵᱤᱵᱚᱨᱚᱱ",
    consumerName: "ᱵᱮᱵᱷᱟᱨᱤᱭᱟᱹᱣᱟᱜ ᱧᱩᱛᱩᱢ",
    consumerAddress: "ᱴᱷᱤᱠᱟᱹᱱᱟ",
    billAmount: "ᱵᱤᱞ ᱴᱟᱠᱟ",
    dueDate: "ᱢᱩᱪᱟᱹᱫ ᱢᱟᱦᱟᱸ",
    billPeriod: "ᱵᱤᱞᱤᱝ ᱚᱠᱛᱚ",
    previousDues: "ᱢᱟᱲᱟᱝ ᱵᱟᱠᱤ",
    totalAmount: "ᱡᱚᱛᱚ ᱴᱟᱠᱟ",
    payNow: "ᱱᱤᱛᱚᱜ ᱵᱷᱩᱜᱛᱟᱱ ᱢᱮ",

    // Payment Success
    paymentSuccess: "ᱵᱷᱩᱜᱛᱟᱱ ᱥᱚᱯᱷᱚᱞ!",
    paymentSuccessMessage: "ᱟᱢᱟᱜ ᱵᱷᱩᱜᱛᱟᱱ ᱥᱚᱯᱷᱚᱞ ᱛᱮ ᱯᱨᱚᱥᱮᱥ ᱦᱩᱭ ᱟᱠᱟᱱᱟ",
    transactionId: "ᱞᱮᱱᱫᱮᱱ ID",
    paymentDate: "ᱵᱷᱩᱜᱛᱟᱱ ᱢᱟᱦᱟᱸ",
    amountPaid: "ᱵᱷᱩᱜᱛᱟᱱ ᱟᱠᱟᱱ ᱴᱟᱠᱟ",
    downloadReceipt: "ᱨᱚᱥᱤᱫ ᱰᱟᱣᱩᱱᱞᱚᱰ ᱢᱮ",
    printReceipt: "ᱨᱚᱥᱤᱫ ᱪᱷᱟᱯᱟ ᱢᱮ",

    // Complaint Registration
    complaintTitle: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱚᱞ ᱢᱮ",
    selectCategory: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
    categoryElectricity: "ᱵᱤᱡᱽᱞᱤ ᱠᱚᱢ / ᱵᱤᱡᱽᱞᱤ ᱮᱴᱠᱮᱴᱚᱬᱮ",
    categoryGas: "ᱜᱮᱥ ᱮᱢ ᱮᱴᱠᱮᱴᱚᱬᱮ",
    categoryWater: "ᱫᱟᱜ ᱮᱢ / ᱜᱩᱱ ᱮᱴᱠᱮᱴᱚᱬᱮ",
    categoryStreetlight: "ᱥᱚᱲᱚᱠ ᱞᱟᱭᱤᱴ ᱵᱟᱝ ᱠᱟᱹᱢᱤᱭᱟ",
    categoryGarbage: "ᱠᱩᱲᱟᱹ ᱡᱚᱢᱟ ᱮᱴᱠᱮᱴᱚᱬᱮ",
    categorySanitation: "ᱥᱟᱯᱷᱟ / ᱫᱟᱜ ᱚᱰᱚᱠ ᱮᱴᱠᱮᱴᱚᱬᱮ",
    categoryOther: "ᱮᱴᱟᱜ",
    complaintDescription: "ᱮᱴᱠᱮᱴᱚᱬᱮᱭᱟᱜ ᱵᱤᱵᱚᱨᱚᱱ ᱮᱢ ᱢᱮ",
    descriptionPlaceholder: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱵᱟᱵᱚᱛ ᱵᱤᱵᱚᱨᱚᱱ ᱮᱢ ᱢᱮ...",
    attachPhoto: "ᱪᱤᱛᱟᱹᱨ ᱞᱟᱜᱟᱣ ᱢᱮ (ᱵᱟᱪᱷᱟᱣ ᱞᱮᱠᱟᱛᱮ)",
    submitComplaint: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱡᱚᱢᱟ ᱢᱮ",
    complaintSuccess: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱥᱚᱯᱷᱚᱞ ᱛᱮ ᱚᱞ ᱟᱠᱟᱱᱟ",
    complaintTicketId: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱴᱤᱠᱮᱴ ID",
    complaintMessage: "ᱟᱢᱟᱜ ᱥᱤᱠᱟᱹᱭᱚᱛ ᱚᱞ ᱟᱠᱟᱱᱟ᱾ ᱯᱟᱸᱡᱟ ᱞᱟᱹᱜᱤᱫ ᱴᱤᱠᱮᱴ ID ᱚᱞ ᱫᱚᱦᱚ ᱢᱮ᱾",

    // Municipal Services
    municipalTitle: "ᱱᱚᱜᱚᱨ ᱯᱟᱞᱤᱠᱟ ᱥᱮᱵᱟᱠᱚ",
    grievanceRegistration: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱚᱞ",
    trackGrievance: "ᱥᱤᱠᱟᱹᱭᱚᱛ ᱡᱟᱹᱱᱤᱡ ᱯᱟᱸᱡᱟ ᱢᱮ",
    emergencyInfo: "ᱵᱤᱯᱚᱫ ᱠᱷᱚᱵᱚᱨ",
    advisories: "ᱥᱟᱱᱟᱢ ᱞᱟᱹᱜᱤᱫ ᱥᱚᱞᱟ",

    // Help
    helpTitle: "ᱜᱚᱲᱚ ᱟᱨ ᱥᱚᱦᱚᱫ",
    helpContact: "ᱥᱚᱢᱯᱚᱨᱠᱚ ᱠᱷᱚᱵᱚᱨ",
    helpline: "ᱜᱚᱲᱚ ᱞᱟᱭᱤᱱ",
    email: "ᱤᱢᱮᱞ",
    operatingHours: "ᱠᱟᱹᱢᱤ ᱚᱠᱛᱚ",
    helpHours: "24/7 ᱧᱟᱢᱚᱜ-ᱟ",
    faq: "ᱡᱮᱞᱮᱠᱟ ᱠᱩᱞᱤ ᱠᱚ",

    // Session & Privacy
    sessionTimeout: "ᱥᱮᱥᱚᱱ ᱪᱟᱵᱟ ᱮᱱᱟ",
    sessionTimeoutMessage: "ᱟᱢᱟᱜ ᱥᱮᱥᱚᱱ ᱪᱟᱵᱟᱜ-ᱟ",
    sessionExpired: "ᱥᱮᱥᱚᱱ ᱪᱟᱵᱟ ᱮᱱᱟ",
    sessionExpiredMessage: "ᱟᱢᱟᱜ ᱥᱮᱥᱚᱱ ᱪᱟᱵᱟ ᱮᱱᱟ᱾ ᱚᱲᱟᱜ ᱥᱠᱨᱤᱱ ᱛᱮ ᱨᱩᱣᱟᱹᱲ ᱤᱫᱤᱭᱟ...",
    privacyNotice: "ᱱᱤᱡᱚᱨ ᱠᱷᱚᱵᱚᱨ",
    privacyMessage: "ᱟᱢᱟᱜ ᱰᱟᱴᱟ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱢᱮᱱᱟᱜ-ᱟ ᱟᱨ ᱠᱷᱟᱹᱞᱤ ᱥᱮᱵᱟ ᱮᱢ ᱞᱟᱹᱜᱤᱫ ᱵᱮᱵᱷᱟᱨᱚᱜ-ᱟ᱾",

    // Status Messages
    loading: "ᱞᱚᱰ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ...",
    processing: "ᱯᱨᱚᱥᱮᱥ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ...",
    success: "ᱥᱚᱯᱷᱚᱞ",
    error: "ᱵᱷᱩᱞ",
    noDataFound: "ᱰᱟᱴᱟ ᱵᱟᱝ ᱧᱟᱢ ᱞᱮᱱᱟ",
    tryAgain: "ᱫᱚᱦᱲᱟ ᱠᱩᱨᱩᱢᱩᱴᱩ ᱢᱮ",

    // Currency
    currency: "₹",

    // Time
    seconds: "ᱥᱮᱠᱮᱱᱰ",
    minutes: "ᱢᱤᱱᱤᱴ",
  },

  sd: {
    // Welcome Page
    welcome: "ڀلي ڪري آيا",
    welcomeMessage: "My SUVIDHA APP",
    selectLanguage: "مهرباني ڪري پنهنجي ٻولي چونڊيو",
    touchToStart: "شروع ڪرڻ لاءِ ڇهيو",

    // Languages
    english: "English",
    hindi: "हिंदी",
    assamese: "অসমীয়া",

    // Common
    back: "واپس",
    next: "اڳيون",
    submit: "جمع ڪرايو",
    cancel: "منسوخ ڪريو",
    confirm: "تصديق ڪريو",
    close: "بند ڪريو",
    home: "گهر",
    help: "مدد",
    logout: "سيشن ختم ڪريو",

    // Header
    govtBranding: "My SUVIDHA APP",
    highContrast: "اعليٰ تضاد",
    sessionTimer: "سيشن جو وقت",
    emergency: "Emergency",

    // Home Dashboard
    homeTitle: "هڪ سروس چونڊيو",
    homeSubtitle: "هيٺ ڏنل خدمتن مان چونڊيو",
    dashboard: "ڊيش بورڊ",
    myDashboard: "منهنجو ڊيش بورڊ",
    goodAfternoon: "منجهند جو سلام",
    goodMorning: "صبح جو سلام",
    goodEvening: "شام جو سلام",
    citizenId: "شهري سڃاڻپ",
    totalDue: "ڪل رهيل رقم",
    active: "فعال",
    pending: "زير التوا",
    actionsRequired: "گهربل عمل",
    yourConnectedServices: "توهان جون ڳنڍيل خدمتون",
    viewAll: "سڀ ڏسو",
    recentActivity: "تازيون شڪايتون ۽ سرگرميون",
    newComplaint: "نئين شڪايت",
    linkNewService: "نئين سروس لنڪ ڪريو",
    complaints: "شڪايتون",
    services: "خدمتون",

    // Services
    electricity: "بجلي",
    gas: "گئس",
    water: "پاڻي",
    municipal: "ميونسپل خدمتون",
    sanitation: "صفائي",

    // Service Actions
    viewBill: "بل ڏسو",
    payBill: "بل ادا ڪريو",
    serviceInfo: "سروس جي معلومات",
    registerComplaint: "شڪايت درج ڪريو",
    trackComplaint: "شڪايت ٽريڪ ڪريو",
    newConnection: "نئون ڪنيڪشن",
    requestService: "سروس جي درخواست",

    // Bill Payment
    lookupMethod: "ڳولا جو طريقو",
    byConsumerId: "صارف نمبر ذريعي",
    byMobileNumber: "موبائيل نمبر ذريعي",
    enterConsumerId: "صارف ID داخل ڪريو",
    enterPhoneNumber: "فون نمبر داخل ڪريو",
    consumerIdPlaceholder: "صارف ID / اڪائونٽ نمبر",
    phoneNumberPlaceholder: "10 عددن جو موبائيل نمبر",
    lookupHelperConsumer: "پنهنجو بل ڏسڻ لاءِ پنهنجو صارف نمبر داخل ڪريو",
    lookupHelperMobile: "جيڪڏهن توهان کي پنهنجو صارف نمبر ياد ناهي، پنهنجو رجسٽرڊ موبائيل نمبر استعمال ڪريو",
    fetchBill: "بل حاصل ڪريو",
    billDetails: "بل جا تفصيل",
    consumerName: "صارف جو نالو",
    consumerAddress: "پتو",
    billAmount: "بل جي رقم",
    dueDate: "آخري تاريخ",
    billPeriod: "بلنگ جو عرصو",
    previousDues: "اڳوڻا واجبات",
    totalAmount: "ڪل رقم",
    payNow: "هاڻي ادا ڪريو",

    // Payment Success
    paymentSuccess: "ادائيگي ڪامياب!",
    paymentSuccessMessage: "توهان جي ادائيگي ڪاميابي سان مڪمل ٿي وئي",
    transactionId: "ٽرانزيڪشن ID",
    paymentDate: "ادائيگي جي تاريخ",
    amountPaid: "ادا ڪيل رقم",
    downloadReceipt: "رسيد ڊائون لوڊ ڪريو",
    printReceipt: "رسيد پرنٽ ڪريو",

    // Complaint Registration
    complaintTitle: "شڪايت درج ڪريو",
    selectCategory: "مسئلي جو قسم چونڊيو",
    categoryElectricity: "بجلي جي بندش / بجلي جو مسئلو",
    categoryGas: "گئس جي فراهمي جو مسئلو",
    categoryWater: "پاڻي جي فراهمي / معيار جو مسئلو",
    categoryStreetlight: "اسٽريٽ لائيٽ ڪم نٿي ڪري",
    categoryGarbage: "ڪچرو گڏ ڪرڻ جو مسئلو",
    categorySanitation: "صفائي / نيڪاسي جو مسئلو",
    categoryOther: "ٻيو",
    complaintDescription: "مسئلو بيان ڪريو",
    descriptionPlaceholder: "مهرباني ڪري مسئلي جا تفصيل ڏيو...",
    attachPhoto: "تصوير منسلڪ ڪريو (اختياري)",
    submitComplaint: "شڪايت جمع ڪرايو",
    complaintSuccess: "شڪايت ڪاميابي سان درج ٿي وئي",
    complaintTicketId: "شڪايت ٽڪيٽ ID",
    complaintMessage: "توهان جي شڪايت درج ٿي وئي آهي. ٽريڪنگ لاءِ ٽڪيٽ ID نوٽ ڪريو.",

    // Municipal Services
    municipalTitle: "ميونسپل خدمتون",
    grievanceRegistration: "شڪايت جي رجسٽريشن",
    trackGrievance: "شڪايت جي حالت ٽريڪ ڪريو",
    emergencyInfo: "ايمرجنسي معلومات",
    advisories: "عوامي مشورا",

    // Help
    helpTitle: "مدد ۽ سپورٽ",
    helpContact: "رابطي جي معلومات",
    helpline: "هيلپ لائين",
    email: "اي ميل",
    operatingHours: "ڪم جا ڪلاڪ",
    helpHours: "24/7 دستياب",
    faq: "اڪثر پڇيل سوال",

    // Session & Privacy
    sessionTimeout: "سيشن ختم ٿي ويو",
    sessionTimeoutMessage: "توهان جو سيشن ختم ٿي ويندو",
    sessionExpired: "سيشن ختم ٿي ويو",
    sessionExpiredMessage: "توهان جو سيشن ختم ٿي ويو آهي. گهر اسڪرين ڏانهن واپس وڃي رهيا آهيون...",
    privacyNotice: "رازداري جو نوٽيس",
    privacyMessage: "توهان جو ڊيٽا محفوظ آهي ۽ صرف سروس جي فراهمي لاءِ استعمال ٿيندو.",

    // Status Messages
    loading: "لوڊ ٿي رهيو آهي...",
    processing: "پروسيس ٿي رهيو آهي...",
    success: "ڪاميابي",
    error: "غلطي",
    noDataFound: "ڪوبه ڊيٽا نه مليو",
    tryAgain: "ٻيهر ڪوشش ڪريو",

    // Currency
    currency: "₹",

    // Time
    seconds: "سيڪنڊ",
    minutes: "منٽ",
  }
};

export default translations;
