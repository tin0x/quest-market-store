import React from 'react';
import type { HeaderWidgetProps } from './types.ts';
import Container from '@shared/ui/container/Container.tsx';

const HeaderWidget: React.FC<HeaderWidgetProps> = ({ children }) => {
  return (
    <header className="pt-8 lg:pt-12">
      <Container className="flex items-center justify-between gap-7 px-4 py-0">{children}</Container>
    </header>
  );
};

export default HeaderWidget;
