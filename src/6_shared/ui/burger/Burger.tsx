import React from 'react';
import BurgerIcon from '@shared/assets/icons/burger.svg?react';
import type { BurgerProps } from '@shared/ui/burger/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const Burger: React.FC<BurgerProps> = ({ className, onClick }) => {
  return (
    <button className={cn('text-text-primary h-12 w-12 cursor-pointer', className)} onClick={onClick}>
      <BurgerIcon className="h-full w-full" />
    </button>
  );
};

export default Burger;
