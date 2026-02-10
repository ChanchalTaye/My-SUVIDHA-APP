// Mock Data Generators for Demo Purposes

export const generateBillData = (serviceType, consumerId) => {
    const serviceNames = {
        electricity: 'Electricity Board',
        gas: 'City Gas Corporation',
        water: 'Water Supply Department'
    };

    const consumers = {
        '1234567890': {
            name: 'Chanchal',
            address: 'House No. 123, Sector 5, Smart City'
        },
        '9876543210': {
            name: 'Priya Sharma',
            address: 'Flat 45, Tower B, Green Valley'
        },
        default: {
            name: 'Consumer',
            address: 'Smart City Area'
        }
    };

    const consumer = consumers[consumerId] || consumers.default;

    const baseAmount = Math.floor(Math.random() * 2000) + 500;
    const previousDues = Math.random() > 0.7 ? Math.floor(Math.random() * 500) : 0;

    return {
        consumerId,
        consumerName: consumer.name,
        consumerAddress: consumer.address,
        serviceProvider: serviceNames[serviceType],
        billAmount: baseAmount,
        previousDues,
        totalAmount: baseAmount + previousDues,
        billPeriod: getCurrentBillingPeriod(),
        dueDate: getNextDueDate(),
        billDate: getCurrentDate(),
    };
};

export const generateTransactionId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `TXN${timestamp}${random}`;
};

// Civic Status Alerts
export const civicAlerts = [
    {
        id: 'alert-1',
        type: 'alert', // alert, advisory, normal
        service: 'electricity',
        message: 'Power outage in Sector 7 due to grid maintenance. Restore: 4 PM.',
        timestamp: 'Just now'
    },
    {
        id: 'alert-2',
        type: 'advisory',
        service: 'water',
        message: 'Water supply will be low pressure tomorrow morning (6 AM - 9 AM).',
        timestamp: '15 mins ago'
    },
    {
        id: 'alert-3',
        type: 'normal',
        service: 'municipal',
        message: 'Garbage collection is on schedule for all zones.',
        timestamp: '1 hour ago'
    },
    {
        id: 'alert-4',
        type: 'alert',
        service: 'emergency',
        message: 'Heatwave warning: Please stay hydrated and avoid direct sun.',
        timestamp: '2 hours ago'
    },
    {
        id: 'alert-5',
        type: 'advisory',
        service: 'gas',
        message: 'Gas pipeline inspection scheduled for West District on Sunday.',
        timestamp: '3 hours ago'
    }
];

export const getCivicStatusUpdates = () => {
    return civicAlerts;
};

// Mock User Profile for Dashboard
export const mockUserProfile = {
    name: "Chanchal",
    consumerId: "CONS-8829-1029",
    mobile: "+91 98765 43210",
    address: "Flat 402, Sunshine Apts, Sector 4",
    connectedServices: [
        {
            id: 'elec-001',
            service: 'electricity',
            provider: 'Power Grid Corp',
            consumerNumber: '10023489',
            status: 'pending', // pending, paid, overdue
            lastBillDate: '01 Feb 2026',
            dueDate: '15 Feb 2026',
            amount: 1450.00,
            lastPayment: '12 Jan 2026'
        },
        {
            id: 'water-002',
            service: 'water',
            provider: 'Municipal Water',
            consumerNumber: 'CMC-9928',
            status: 'paid',
            lastBillDate: '05 Feb 2026',
            dueDate: '20 Feb 2026',
            amount: 450.00,
            lastPayment: '08 Feb 2026'
        },
        {
            id: 'gas-003',
            service: 'gas',
            provider: 'City Gas Ltd',
            consumerNumber: 'GAS-7721',
            status: 'overdue',
            lastBillDate: '25 Jan 2026',
            dueDate: '10 Feb 2026',
            amount: 890.00,
            lastPayment: '20 Dec 2025'
        }
    ],
    complaints: [
        {
            id: 'CMP-2026-001',
            service: 'electricity',
            date: '10 Feb 2026',
            subject: 'Frequent Voltage Fluctuation',
            status: 'in-progress' // open, in-progress, resolved
        },
        {
            id: 'CMP-2026-002',
            service: 'municipal',
            date: '02 Feb 2026',
            subject: 'Garbage not collected',
            status: 'resolved'
        }
    ]
};

export const generateComplaintTicketId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `CMP${timestamp}${random}`;
};

export const generateServiceRequestId = (serviceType) => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    const serviceCode = {
        electricity: 'ELE',
        gas: 'GAS',
        water: 'WAT',
        municipal: 'MUN'
    }[serviceType] || 'SRV';

    return `SR-${serviceCode}-${year}-${random}`;
};

const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

const getNextDueDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 15); // 15 days from now
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

const getCurrentBillingPeriod = () => {
    const date = new Date();
    const lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    const currentMonth = new Date(date.getFullYear(), date.getMonth(), 0);

    const formatDate = (d) => d.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    return `${formatDate(lastMonth)} - ${formatDate(currentMonth)}`;
};

export const mockServiceInfo = {
    electricity: {
        title: 'Electricity Service Information',
        content: [
            'Power supply available 24/7',
            'Emergency helpline: 1912',
            'Planned maintenance on Sundays 2 AM - 4 AM',
            'Report power outages immediately'
        ]
    },
    gas: {
        title: 'Gas Service Information',
        content: [
            'PNG supply available 24/7',
            'Emergency helpline: 1800-XXX-XXXX',
            'Safety inspection every 6 months',
            'Report gas leaks immediately'
        ]
    },
    water: {
        title: 'Water Service Information',
        content: [
            'Water supply: 6 AM - 10 AM, 6 PM - 10 PM',
            'Emergency helpline: 1916',
            'Quality testing done monthly',
            'Report contamination immediately'
        ]
    }
};

export const complaintCategories = [
    { id: 'electricity', label: 'Power Outage / Electricity Issue' },
    { id: 'gas', label: 'Gas Supply Issue' },
    { id: 'water', label: 'Water Supply / Quality Issue' },
    { id: 'streetlight', label: 'Streetlight Not Working' },
    { id: 'garbage', label: 'Garbage Collection Issue' },
    { id: 'sanitation', label: 'Sanitation / Drainage Issue' },
    { id: 'other', label: 'Other' }
];

const mockData = {
    generateBillData,
    generateTransactionId,
    generateComplaintTicketId,
    mockServiceInfo,
    complaintCategories
};

export default mockData;
