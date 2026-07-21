import React from 'react';
import type { TitleProps } from '@shared/ui/title/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@shared/assets/icons/arrow-right.svg?react';

const Title: React.FC<TitleProps> = ({ className, children, type, toPath }) => {
  const Tag = type === 'primary' ? 'h1' : 'h2';

  const content = (
    <Tag className={cn('text-text-primary flex items-center gap-1 text-xl font-bold', className)}>
      <span>{children}</span>
      {toPath && <ArrowRightIcon className="h-6 w-6" />}
    </Tag>
  );

  return toPath ? <Link to={toPath}>{content}</Link> : content;
};

export default Title;
