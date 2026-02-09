import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import VirtualKeyboard from '../../components/common/VirtualKeyboard';
import './AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [activeInput, setActiveInput] = useState(null); // 'username' or 'password'
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAdmin();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        setActiveInput(null); // Close keyboard on submit

        // Simulate network delay
        setTimeout(() => {
            const success = login(username, password);
            if (success) {
                navigate('/admin/dashboard');
            } else {
                setError('Invalid credentials. Try admin / admin123');
                setLoading(false);
            }
        }, 800);
    };

    const handleKeyPress = (key) => {
        if (activeInput === 'username') {
            setUsername(prev => prev + key);
        } else if (activeInput === 'password') {
            setPassword(prev => prev + key);
        }
    };

    const handleDelete = () => {
        if (activeInput === 'username') {
            setUsername(prev => prev.slice(0, -1));
        } else if (activeInput === 'password') {
            setPassword(prev => prev.slice(0, -1));
        }
    };

    return (
        <div className={`admin-login-page ${activeInput ? 'keyboard-active' : ''}`}>
            {/* Back Button */}
            <button
                className="admin-back-btn"
                onClick={() => navigate('/')}
                title="Back to Home"
            >
                ← Back
            </button>

            <div className="admin-login-card">
                <div className="admin-login-header">
                    <div className="admin-logo-circle">
                        <img src="/favicon.png" alt="My Suvidha App" className="admin-login-logo" />
                    </div>
                    <h2>My SUVIDHA APP</h2>
                    <p>Admin Operations Center</p>
                </div>

                <form onSubmit={handleSubmit} className="admin-login-form">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => setActiveInput('username')}
                            placeholder="Enter admin ID"
                            autoFocus
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setActiveInput('password')}
                            placeholder="Enter secure password"
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button
                        type="submit"
                        className={`btn-admin-login ${loading ? 'loading' : ''}`}
                        disabled={loading || !username || !password}
                    >
                        {loading ? 'Authenticating...' : 'Access Dashboard'}
                    </button>

                    <div className="login-footer">
                        Secure Access • Authorized Personnel Only
                    </div>
                </form>
            </div>

            {/* Virtual Keyboard */}
            <VirtualKeyboard
                isVisible={!!activeInput}
                onClose={() => setActiveInput(null)}
                onKeyPress={handleKeyPress}
                onDelete={handleDelete}
                defaultLayout={activeInput === 'password' ? 'alpha' : 'alpha'}
            />
        </div>
    );
};

export default AdminLogin;
