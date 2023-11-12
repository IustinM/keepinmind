import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {

    const isAuth = localStorage.getItem('userInfo');
    const location = useLocation();


  return isAuth ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

