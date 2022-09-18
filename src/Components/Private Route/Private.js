import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/Auth/useAuth';
const Private = ({ children }) => {
    const { user } = useAuth();
    return user?.email ? children : <Navigate to="/signin"></Navigate>
};

export default Private;