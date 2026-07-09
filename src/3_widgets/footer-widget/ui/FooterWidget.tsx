import React from 'react';
import type { FooterWidgetProps } from './types.ts';

const FooterWidget: React.FC<FooterWidgetProps> = ({ children }) => {
  return <footer className="pb-12">{children}</footer>;
};

export default FooterWidget;
