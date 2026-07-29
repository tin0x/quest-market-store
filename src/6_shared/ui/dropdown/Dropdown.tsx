import React from 'react';
import type { DropdownProps } from '@shared/ui/dropdown/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const Dropdown: React.FC<DropdownProps> = ({ className, isOpen, children }) => {
  return (
    <div
      className={cn(
        'bg-surface absolute top-full right-0 z-50 mt-5 max-w-100 min-w-80 rounded-md border border-white p-5 transition-all duration-150',
        {
          'pointer-events-auto scale-100 opacity-100': isOpen,
          'pointer-events-none scale-95 opacity-0': !isOpen,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Dropdown;
