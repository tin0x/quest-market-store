import React from 'react';
import type { FooterWidgetProps } from './types.ts';
import Container from '@shared/ui/container/Container.tsx';

const FooterWidget: React.FC<FooterWidgetProps> = ({ children }) => {
  return (
    <footer className="pb-12">
      <Container>{children}</Container>
    </footer>
  );
};

export default FooterWidget;
