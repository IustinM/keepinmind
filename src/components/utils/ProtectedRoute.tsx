import React, { useState, useEffect, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {

    const isAuth = localStorage.getItem('userInfo');
    const location = useLocation();
  console.log('Protected: ',isAuth)

  return isAuth ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

