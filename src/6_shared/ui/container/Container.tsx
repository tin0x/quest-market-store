import React from 'react';
import type { ContainerProps } from '@shared/ui/container/types.ts';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto w-full max-w-322.5">{children}</div>;
};

export default Container;
