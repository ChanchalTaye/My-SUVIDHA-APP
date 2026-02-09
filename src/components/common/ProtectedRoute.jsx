import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSession } from '../../context/SessionContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useSession();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
