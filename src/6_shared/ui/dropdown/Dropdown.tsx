import React from 'react';
import type { DropdownProps } from '@shared/ui/dropdown/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const Dropdown: React.FC<DropdownProps> = ({ className, children }) => {
  return <ul className={cn('bg-surface rounded-md border border-white p-2', className)}>{children}</ul>;
};

export default Dropdown;
