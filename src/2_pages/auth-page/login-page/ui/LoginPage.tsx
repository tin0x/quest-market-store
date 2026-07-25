import React from 'react';
import AuthWrapper from '@shared/ui/auth-wrapper/AuthWrapper.tsx';
import Login from '@features/auth/login/ui/Login.tsx';

const LoginPage: React.FC = () => {
  return (
    <AuthWrapper title="Welcome Back">
      <Login />
    </AuthWrapper>
  );
};

export default LoginPage;
