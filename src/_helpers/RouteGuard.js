import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import userContext from '../_providers/userContext';

const ProtectedRoute = ({ children }) => {
    const {currentUser} = useContext(userContext);
    if (!currentUser.username) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
};

export default ProtectedRoute;