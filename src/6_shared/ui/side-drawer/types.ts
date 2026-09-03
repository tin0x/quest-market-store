import React from 'react';

export type SideDrawerProps = {
  className?: string;
  drawerClass?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
