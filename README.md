# My SUVIDHA APP 📱🏛️

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**My SUVIDHA APP** is a next-generation, touch-first kiosk interface designed to simplify citizen access to essential government and utility services. Built with a premium **Future Glass** design system, it provides a seamless, accessible, and multilingual experience for urban and rural users.

---

## ✨ Key Features

- **🌐 23 Indian Languages**: Industry-leading support for 22 official regional languages of India plus English, ensuring no citizen is left behind.
- **🗣️ Voice Guidance**: Real-time voice prompts in Hindi, Assamese, Bengali, and Odia to assist users with the navigation flow.
- **⚡ Unified Service Dashboard**: A single hub for Electricity, Gas, Water, and Municipal services.
- **📄 Digital Receipts**: Instant generation and PDF download of service request receipts.
- **🚨 Emergency Assistance**: One-tap access to emergency alerts and support teams.
- **⌨️ Virtual Keyboard**: Custom-built on-screen keyboard for secure and easy data entry on touch terminals.
- **🔐 Admin Console**: Secure operations center for kiosk administrators to monitor service status.

---

## 🎨 Design System: Future Glass

The application utilizes a custom **Glassmorphism** aesthetic that emphasizes visual depth and modern aesthetics:
- **Mesh Gradients**: Vibrant, animated backgrounds that feel alive.
- **Translucent UI**: Context-aware surfaces with backdrop blur and subtle borders.
- **Micro-animations**: Smooth hover transitions, SVG feedback animations, and page entry effects.
- **Branding**: Integrated custom iconography and a unified logo (`favicon.png`).

---

## 🛠️ Tech Stack

- **Core**: [React 18](https://reactjs.org/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Localization**: [i18next](https://www.i18next.com/)
- **Voice**: Web Speech API with custom Indian language mapping.
- **State Management**: React Context API (Language & Session).
- **Styling**: Pure CSS3 with Modern CSS Variables.
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)

---

## 📂 Project Structure

```text
kiosk2.0-main/
├── public/                 # Static assets & favicon.png
├── src/
│   ├── components/
│   │   ├── common/         # Atomic UI components & Virtual Keyboard
│   │   ├── dashboard/      # Service-specific cards & status panels
│   │   └── layout/         # Structural components (Header, Container)
│   ├── context/            # Global state (Language, Session, Admin)
│   ├── i18n/               # Translation maps for 23 languages
│   ├── pages/              # Primary route views (Home, Welcome, Services)
│   ├── styles/             # Design tokens & Global animations
│   ├── utils/              # Voice guidance & helpers
│   └── App.js              # Routing & Application logic
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16.x or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/kiosk2.0.git
   cd kiosk2.0-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm start
```
The application will be available at `http://localhost:3000`.

### Admin Access
Access the operations console at `/admin/login`.
- **Default Username**: `admin`
- **Default Password**: `admin123`

---

## 🌍 Language Support

| Language | Code | Language | Code | Language | Code |
|:---|:---:|:---|:---:|:---|:---:|
| English | `en` | Hindi | `hi` | Bengali | `bn` |
| Assamese | `as` | Gujarati | `gu` | Marathi | `mr` |
| Tamil | `ta` | Telugu | `te` | Kannada | `kn` |
| Malayalam | `ml` | Punjabi | `pa` | Urdu | `ur` |
| Odia | `or` | Nepali | `ne` | Konkani | `kok` |
| Bodo | `brx` | Dogri | `doi` | Kashmiri | `ks` |
| Maithili | `mai` | Manipuri | `mni` | Sanskrit | `sa` |
| Santali | `sat` | Sindhi | `sd` | | |

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

© 2026 My SUVIDHA APP. Simplify Your Life.
