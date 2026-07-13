import React from 'react';
import { Link } from 'react-router-dom';
import type { LogoProps } from '@shared/ui/logo/types.ts';
import LogoIcon from '@shared/assets/icons/logo.svg?react';

const Logo: React.FC<LogoProps> = ({ children, pathTo }) => {
  const content = (
    <div className="flex items-center gap-1">
      <LogoIcon className="h-16 w-16" />
      <span>{children}</span>
    </div>
  );

  return pathTo ? (
    <Link className='className="flex gap-1" items-center' to={pathTo}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default Logo;
