import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';
import { LanguageProvider } from './context/LanguageContext';
import { SessionProvider } from './context/SessionContext';
import { AdminProvider } from './context/AdminContext';
import { ToastProvider } from './components/common/Toast';

// Pages
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Electricity from './pages/Electricity';
import Gas from './pages/Gas';
import Water from './pages/Water';
import Municipal from './pages/Municipal';
import Help from './pages/Help';
import PaymentSuccess from './pages/PaymentSuccess';
import Complaint from './pages/Complaint';
import NewServiceRequest from './pages/NewServiceRequest';
import ServiceRequestSuccess from './pages/ServiceRequestSuccess';

// Admin Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ServiceRequestManager from './pages/admin/ServiceRequestManager';
import ComplaintManager from './pages/admin/ComplaintManager';
import PaymentsMonitor from './pages/admin/PaymentsMonitor';
import AlertsManager from './pages/admin/AlertsManager';

// Styles
import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <SessionProvider>
          <AdminProvider>
            <ToastProvider>
              <Routes>
                {/* Public Routes */}
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* Citizen Dashboard */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />

                {/* Services */}
                <Route path="/electricity" element={<Electricity />} />
                <Route path="/gas" element={<Gas />} />
                <Route path="/water" element={<Water />} />
                <Route path="/municipal" element={<Municipal />} />
                <Route path="/help" element={<Help />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/complaint" element={<Complaint />} />
                <Route path="/new-service-request" element={<NewServiceRequest />} />
                <Route path="/service-request-success" element={<ServiceRequestSuccess />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="requests" element={<ServiceRequestManager />} />
                  <Route path="complaints" element={<ComplaintManager />} />
                  <Route path="payments" element={<PaymentsMonitor />} />
                  <Route path="alerts" element={<AlertsManager />} />
                </Route>

                {/* Default Redirect */}
                <Route path="/" element={<Navigate to="/welcome" replace />} />
                <Route path="*" element={<Navigate to="/welcome" replace />} />
              </Routes>
            </ToastProvider>
          </AdminProvider>
        </SessionProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
