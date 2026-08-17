import React from 'react';
import type { CardProps } from '@shared/ui/card/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const Card: React.FC<CardProps> = ({ variant = 'primary', className, children }) => {
  const styles = {
    primary: 'bg-surface',
    secondary: 'bg-secondary',
    surface: 'bg-card',
  };

  return <div className={cn('rounded-md', styles[variant], className)}>{children}</div>;
};

export default Card;
