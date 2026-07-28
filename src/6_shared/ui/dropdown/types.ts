import React from 'react';

export type DropdownProps = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
