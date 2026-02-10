# My SUVIDHA APP

## Project Overview

My SUVIDHA APP is a touch-first kiosk interface designed to simplify citizen access to essential government and utility services. The application provides multilingual accessibility, voice guidance, digital receipts, and an admin monitoring console. It is designed for deployment in public service kiosks.

---

## Features

### Multilingual Support
- Supports 23 Indian languages including English
- Built using i18next localization framework

### Voice Guidance
- Real-time navigation assistance
- Supports Hindi, Assamese, Bengali, and Odia
- Implemented using Web Speech API

### Unified Service Dashboard
Provides access to:
- Electricity Services
- Gas Services
- Water Services
- Municipal Services

### Digital Receipts
- Generates service receipts
- Supports PDF download using jsPDF

### Emergency Assistance
- Quick access emergency service support module

### Virtual Keyboard
- Touch optimized input system
- Secure kiosk-based data entry

### Admin Console
- Service monitoring dashboard
- Status control and kiosk management

---

## Tech Stack

### Frontend
- React 18
- React Router v6
- React Context API
- CSS3 with modern variables

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication
- OTP Verification System
- Demo Payment Gateway Integration

### Localization
- i18next

### Voice Integration
- Web Speech API

### Document Generation
- jsPDF

---

## System Architecture

### Frontend Layer
Responsible for:
- UI rendering
- Language translation
- Voice interaction
- Service navigation
- Payment UI
- Receipt generation

### Backend Layer
Responsible for:
- Authentication and authorization
- OTP verification
- Consumer ID recovery
- Bill retrieval
- Payment processing simulation
- Admin management
- API services

### Database Layer
Stores:
- User records
- Consumer details
- Bill information
- Transaction logs
- Admin credentials

---

## Project Structure

```
kiosk2.0-main/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── dashboard/
│   │   │   └── layout/
│   │   ├── context/
│   │   ├── i18n/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── App.js
│
└── README.md
```

---

## Installation Guide

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- MongoDB installed locally or cloud instance

---

### Clone Repository

```
git clone https://github.com/your-repo/kiosk2.0.git
cd kiosk2.0-main
```

---

### Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OTP_EXPIRY=300
```

Run backend server:

```
npm run dev
```

---

### Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

Backend runs at:

```
http://localhost:5000
```

---

## Admin Access

```
Route: /admin/login
Username: admin
Password: admin123
```

---

## API Documentation

### Authentication

#### Google Login
```
GET /auth/google
```

#### Google Callback
```
GET /auth/google/callback
```

---

### OTP Services

#### Generate OTP
```
POST /otp/send
```

Request:
```
{
  "mobile": "XXXXXXXXXX"
}
```

#### Verify OTP
```
POST /otp/verify
```

Request:
```
{
  "mobile": "XXXXXXXXXX",
  "otp": "123456"
}
```

---

### Bill Services

#### Fetch Bill
```
GET /bill/:consumerId
```

#### Recover Consumer ID
```
POST /consumer/recover
```

---

### Payment Services

#### Initiate Demo Payment
```
POST /payment/initiate
```

#### Verify Payment
```
POST /payment/verify
```

---

## Database Schema Overview

### User Model
```
name
mobile
email
language
createdAt
```

### Consumer Model
```
consumerId
serviceType
userDetails
billAmount
dueDate
```

### Transaction Model
```
transactionId
consumerId
amount
paymentStatus
timestamp
```

### Admin Model
```
username
passwordHash
role
```

---

## Language Support

| Language | Code |
|----------|--------|
| English | en |
| Hindi | hi |
| Bengali | bn |
| Assamese | as |
| Gujarati | gu |
| Marathi | mr |
| Tamil | ta |
| Telugu | te |
| Kannada | kn |
| Malayalam | ml |
| Punjabi | pa |
| Urdu | ur |
| Odia | or |
| Nepali | ne |
| Konkani | kok |
| Bodo | brx |
| Dogri | doi |
| Kashmiri | ks |
| Maithili | mai |
| Manipuri | mni |
| Sanskrit | sa |
| Santali | sat |
| Sindhi | sd |

---

## Deployment Guide

### Build Frontend

```
cd frontend
npm run build
```

---

### Deploy Backend (Node Server)

```
cd backend
npm install
npm start
```

---

### Docker Deployment (Optional)

Create Dockerfile:

```
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm","start"]
```

Run Container:

```
docker build -t suvidha-app .
docker run -p 5000:5000 suvidha-app
```

---

## Security Considerations

- JWT based authentication
- OTP expiration and verification limits
- Input validation middleware
- Environment variable protection
- Role based admin access

---

## Future Enhancements

- Real payment gateway integration
- Aadhaar based authentication
- AI chatbot assistance
- Offline kiosk mode
- Analytics dashboard
- SMS and email notification services

---

## Contributor Guidelines

### Steps to Contribute

1. Fork repository
2. Create feature branch
```
git checkout -b feature-name
```

3. Commit changes
```
git commit -m "Add feature"
```

4. Push branch
```
git push origin feature-name
```

5. Create Pull Request

---

## Development Best Practices

- Follow modular folder structure
- Maintain component reusability
- Use environment variables for secrets
- Write descriptive commit messages
- Maintain API response consistency

---

## Purpose

The objective of My SUVIDHA APP is to provide an accessible, scalable, and reliable public service interface that improves citizen engagement and simplifies utility service interactions through kiosk infrastructure.
