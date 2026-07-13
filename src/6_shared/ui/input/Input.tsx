import React, { useState } from 'react';
import type { InputProps } from '@shared/ui/input/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import Button from '@shared/ui/button/Button.tsx';
import IconEye from '@shared/assets/icons/eye.svg?react';
import IconClosedEye from '@shared/assets/icons/closed-eye.svg?react';

const inputStyles = {
  primary: 'bg-input-primary text-text-secondary rounded-lg border focus:border-white',
  secondary: 'text-text-secondary bg-input-secondary rounded-sm border focus:border-white',
} as const;

const Input: React.FC<InputProps> = ({ className, variant = 'primary', Icon, isPassword, type = 'text', ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="relative">
      {Icon && <Icon className="bg-icon-primary absolute top-1/2 left-5 h-6 w-6 -translate-y-1/2" />}
      <input
        type={inputType}
        className={cn('h-full w-full p-5 pr-5 pl-6', inputStyles[variant], className)}
        {...rest}
      />
      {isPassword && (
        <Button
          onClick={() => setShowPassword((prev) => !prev)}
          variant="transparent"
          Icon={showPassword ? IconEye : IconClosedEye}
        />
      )}
    </div>
  );
};

export default Input;
