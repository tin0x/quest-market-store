import React from 'react';
import type { FooterWidgetProps } from './types.ts';
import Container from '@shared/ui/container/Container.tsx';

const FooterWidget: React.FC<FooterWidgetProps> = ({ children }) => {
  return (
    <footer>
      <Container className="flex flex-col gap-5">{children}</Container>
      <div className="text-text-secondary mt-16 border-t-2 border-white py-4 text-center">
        <span className="text-lg font-bold">
          {`@ ${new Date().getUTCFullYear()} Quest Market. Licensed under MIT.`}
        </span>
      </div>
    </footer>
  );
};

export default FooterWidget;
