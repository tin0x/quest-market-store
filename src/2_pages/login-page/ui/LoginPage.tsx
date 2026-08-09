import React from 'react';
import AuthWrapper from '@shared/ui/auth-wrapper/AuthWrapper.tsx';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { Login } from '@features/login';

const LoginPage: React.FC = () => {
  useToggleTitle('Login');

  return (
    <AuthWrapper title="Welcome Back">
      <Login />
    </AuthWrapper>
  );
};

export default LoginPage;
