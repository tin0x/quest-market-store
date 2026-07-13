import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import { linkButtons } from '@features/auth/auth-buttons/constants.ts';

const [loginData, registerData] = linkButtons;

const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Button asLink pathTo={loginData.path} variant="transparent" text={loginData.title} />
      <Button asLink pathTo={registerData.path} variant="dark" text={registerData.title} />
    </div>
  );
};

export default AuthButtons;
