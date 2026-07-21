import React from 'react';
import type { ContainerProps } from '@shared/ui/container/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn('mx-auto h-full w-full max-w-350', className)}>{children}</div>;
};

export default Container;
