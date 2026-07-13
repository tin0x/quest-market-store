import React, { type SVGProps } from 'react';

export type InputProps = {
  className?: string;
  variant?: 'primary' | 'secondary';
  Icon?: React.FC<SVGProps<SVGSVGElement>>;
  isPassword?: boolean;
  type?: string;
} & React.ComponentPropsWithoutRef<'input'>;
