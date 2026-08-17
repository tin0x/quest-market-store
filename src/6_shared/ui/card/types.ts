import React from 'react';

export type CardProps = {
  variant?: 'primary' | 'secondary' | 'surface';
  children: React.ReactNode;
  className?: string;
};
