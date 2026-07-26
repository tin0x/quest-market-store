import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@app/providers/auth-provider/useAuth.ts';

const ProtectedRoute: React.FC = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
