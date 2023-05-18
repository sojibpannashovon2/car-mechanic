import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(authContext)

    if (loading) {
        return <progress className="progress w-56 text-white bg-red-500"></progress>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;