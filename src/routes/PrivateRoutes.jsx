import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(authContext)

    if (loading) {
        return <progress className="progress w-56 text-white bg-red-500"></progress>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;