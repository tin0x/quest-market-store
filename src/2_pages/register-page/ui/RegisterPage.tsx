import React from 'react';
import AuthWrapper from '@shared/ui/auth-wrapper/AuthWrapper.tsx';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { Register } from '@features/register';

const RegisterPage: React.FC = () => {
  useToggleTitle('Register');

  return (
    <AuthWrapper title="Create an account">
      <Register />
    </AuthWrapper>
  );
};

export default RegisterPage;
