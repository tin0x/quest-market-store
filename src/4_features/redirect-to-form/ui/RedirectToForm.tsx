import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import { linkButtons } from '@features/redirect-to-form/model/constants.ts';
import type { RedirectToFormProps } from '@features/redirect-to-form/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const [loginData, registerData] = linkButtons;

const RedirectToForm: React.FC<RedirectToFormProps> = ({ className, classLogin }) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Button
        className={cn('text-[18px]', classLogin)}
        asLink
        pathTo={loginData.path}
        variant="transparent"
        text={loginData.title}
      />
      <Button className="text-[18px]" asLink pathTo={registerData.path} variant="dark" text={registerData.title} />
    </div>
  );
};

export default RedirectToForm;
