import React from 'react';
import type { HeaderWidgetProps } from './types.ts';

const HeaderWidget: React.FC<HeaderWidgetProps> = ({ children }) => {
  return <header className="pt-12">{children}</header>;
};

export default HeaderWidget;
