import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import { linkButtons } from '@features/auth/redirect-to-form/model/constants.ts';

const [loginData, registerData] = linkButtons;

const RedirectToForm: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Button className="text-[18px]" asLink pathTo={loginData.path} variant="transparent" text={loginData.title} />
      <Button className="text-[18px]" asLink pathTo={registerData.path} variant="dark" text={registerData.title} />
    </div>
  );
};

export default RedirectToForm;
