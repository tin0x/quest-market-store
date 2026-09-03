import React from 'react';
import { Link } from 'react-router-dom';
import type { LogoProps } from '@shared/ui/logo/types.ts';
import LogoIcon from '@shared/assets/icons/logo.svg?react';
import { cn } from '@shared/lib/utils/cn.ts';

const Logo: React.FC<LogoProps> = ({ children, pathTo, textClass }) => {
  const content = (
    <div className="flex items-center gap-4">
      <LogoIcon className="h-14 w-14 shrink-0" />
      <span className={cn('text-xl font-bold tracking-wider', textClass)}>{children}</span>
    </div>
  );

  return pathTo ? (
    <Link className='gap-1" flex w-max items-center' to={pathTo}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default Logo;
