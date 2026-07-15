import React from 'react';
import type { ButtonProps } from '@shared/ui/button/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import { Link } from 'react-router-dom';

const buttonStyles = {
  accent: 'bg-button-primary text-text-dark rounded-lg',
  transparent:
    'text-text-primary rounded-lg bg-transparent border-2 hover:border-white hover:bg-white hover:text-black',
  dark: 'bg-button-secondary rounded-lg text-text-primary border-2 border-transparent hover:bg-transparent hover:border-white',
  blur: 'bg-white bg-gray-200/10 backdrop-blur-sm text-text-primary rounded-md hover:bg-gray-200/1',
} as const;

const Button: React.FC<ButtonProps> = ({
  className,
  iconStyles,
  variant = 'accent',
  text,
  pathTo,
  asLink,
  Icon,
  ...rest
}) => {
  if (asLink && pathTo) {
    return (
      <Link
        className={cn('flex items-center justify-center gap-2 px-5 py-3 font-bold', buttonStyles[variant], className, {
          'rounded-circle text-text-primary p-1': Icon && !text,
        })}
        to={pathTo}
      >
        {Icon && <Icon className={cn('h-full w-full', iconStyles)} />}
        {text && <span>{text}</span>}
      </Link>
    );
  }

  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2 px-5 py-3 font-bold hover:cursor-pointer',
        buttonStyles[variant],
        className,
        {
          'rounded-circle text-text-primary p-1': Icon && !text,
        },
      )}
      {...rest}
    >
      {Icon && <Icon className={cn('h-full w-full', iconStyles)} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
