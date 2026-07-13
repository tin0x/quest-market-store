import React from 'react';
import type { ButtonProps } from '@shared/ui/button/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const buttonStyles = {
  accent: 'bg-button-primary text-text-dark rounded-lg p-2.5',
  transparent: 'text-text-primary rounded-lg bg-transparent p-2.5',
  dark: 'bg-button-secondary rounded-lg text-text-primary p-2.5',
  blur: 'blur-lg bg-white text-text-primary',
} as const;

const Button: React.FC<ButtonProps> = ({ className, buttonStyle, variant = 'accent', text, Icon, ...rest }) => {
  return (
    <button
      className={cn('flex items-center gap-2 font-bold', buttonStyles[variant], className, {
        'rounded-circle text-text-primary p-1': Icon && !text,
      })}
      {...rest}
    >
      {Icon && <Icon className={cn('h-6 w-6', buttonStyle)} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
