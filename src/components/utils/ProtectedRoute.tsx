import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {

    const isAuth = localStorage.getItem('userInfo');
    const admin = localStorage.getItem('admin')
    const location = useLocation();


  return true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

