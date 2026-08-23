import React from 'react';
import GamepadLoaderIcon from '@shared/assets/icons/gamepad-loader.svg?react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { LoaderProps } from '@shared/ui/loader/types.ts';

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <GamepadLoaderIcon className={cn('animate-wobble absolute top-1/2 left-1/2 h-60 w-60 -translate-1/2', className)} />
  );
};

export default Loader;
