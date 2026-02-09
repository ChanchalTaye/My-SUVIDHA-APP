import React, { createContext, useState, useContext, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionContext = createContext();

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};

const INACTIVITY_TIMEOUT = 90 * 1000; // 90 seconds in milliseconds
const WARNING_TIME = 20 * 1000; // Show warning 20 seconds before timeout

export const SessionProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(INACTIVITY_TIMEOUT);

    const [user, setUser] = useState(null);
    const [serviceRequests, setServiceRequests] = useState([]);

    const navigate = useNavigate();
    const timeoutIdRef = useRef(null);
    const warningTimeoutIdRef = useRef(null);
    const intervalIdRef = useRef(null);

    const resetSession = useCallback(() => {
        setIsActive(false);
        setUser(null);
        setServiceRequests([]);
        setShowWarning(false);
        setTimeRemaining(INACTIVITY_TIMEOUT);
        lastActivityRef.current = Date.now(); // Prevent immediate re-trigger
        if (window.location.pathname !== '/' && window.location.pathname !== '/welcome') {
            navigate('/');
        }
    }, [navigate]);

    const startSession = useCallback(() => {
        setIsActive(true);
        setShowWarning(false);
        setTimeRemaining(INACTIVITY_TIMEOUT);
        lastActivityRef.current = Date.now();
    }, []);

    const login = useCallback((mockUser) => {
        setUser(mockUser);
        startSession();
    }, [startSession]);

    const addServiceRequest = useCallback((request) => {
        setServiceRequests(prev => [request, ...prev]);
    }, []);

    const clearServiceRequests = useCallback(() => {
        setServiceRequests([]);
    }, []);

    // ... existing resetTimer logic ...

    // Activity Tracking
    const lastActivityRef = useRef(Date.now());

    const handleActivity = useCallback(() => {
        lastActivityRef.current = Date.now();
        setIsActive(true);
        if (showWarning) setShowWarning(false);
    }, [showWarning]);

    useEffect(() => {
        // Events to track activity
        const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click'];

        // Throttled activity handler
        let throttleTimer;
        const onActivity = () => {
            if (!throttleTimer) {
                throttleTimer = setTimeout(() => {
                    handleActivity();
                    throttleTimer = null;
                }, 1000); // Throttle to 1s
            }
        };

        events.forEach(event => window.addEventListener(event, onActivity));

        // Check for inactivity every second
        const checkInterval = setInterval(() => {
            const now = Date.now();
            const timeSinceLastActivity = now - lastActivityRef.current;
            const remaining = INACTIVITY_TIMEOUT - timeSinceLastActivity;

            if (remaining <= 0) {
                // Timeout reached
                // Only reset if not already on welcome page
                if (window.location.pathname !== '/' && window.location.pathname !== '/welcome') {
                    resetSession();
                } else {
                    // Just reset the timer if we are already on welcome page to avoid loop logic
                    lastActivityRef.current = Date.now();
                }
            } else {
                setTimeRemaining(remaining);
            }
        }, 1000);

        return () => {
            events.forEach(event => window.removeEventListener(event, onActivity));
            clearInterval(checkInterval);
            if (throttleTimer) clearTimeout(throttleTimer);
        };
    }, [handleActivity, resetSession, showWarning]);

    const value = {
        isActive,
        user,
        login,
        startSession,
        resetSession,
        showWarning,
        timeRemaining,
        serviceRequests,
        addServiceRequest,
        clearServiceRequests,
    };

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionContext;
