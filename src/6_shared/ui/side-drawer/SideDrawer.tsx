import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { SideDrawerProps } from '@shared/ui/side-drawer/types.ts';
import { useClickOutside } from '@shared/hooks/ui/useClickOutside.ts';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';

const SideDrawer: React.FC<SideDrawerProps> = ({ className, drawerClass, isOpen, onClose, children }) => {
  const [modalRoot] = useState(() => document.getElementById('modal-root')!);
  const location = useLocation();

  const refDrawer = useRef<HTMLDivElement | null>(null);
  useClickOutside(refDrawer, onClose);

  useEffect(() => {
    if (isOpen) onClose();
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return createPortal(
    <div
      className={cn(
        'pointer-events-auto fixed inset-0 z-999 flex justify-end bg-black/50 opacity-100 transition-opacity duration-400',
        className,
        {
          ['pointer-events-none opacity-0']: !isOpen,
        },
      )}
    >
      <div
        className={cn(
          'bg-primary relative translate-x-full transition-transform duration-400',
          {
            ['translate-x-0']: isOpen,
          },
          drawerClass,
        )}
        ref={refDrawer}
      >
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default SideDrawer;
