import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import Loader from '@shared/ui/loader/Loader.tsx';

const ProtectedRoute: React.FC = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
