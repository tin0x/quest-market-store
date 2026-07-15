import React, { type SVGProps } from 'react';

export type ButtonProps = {
  className?: string;
  variant?: 'accent' | 'transparent' | 'dark' | 'blur';
  text?: string;
  Icon?: React.FC<SVGProps<SVGSVGElement>>;
  iconStyles?: string;
  asLink?: boolean;
  pathTo?: string;
} & React.ComponentPropsWithoutRef<'button'>;
