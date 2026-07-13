import React from 'react';
import type { ListContainerProps } from '@shared/ui/list-container/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import Title from '@shared/ui/title/Title.tsx';

const ListContainer: React.FC<ListContainerProps> = ({ className, title, children }) => {
  return (
    <div className="flex flex-col gap-9">
      <Title type="secondary">{title}</Title>
      <ul className={cn(className)}>{children}</ul>;
    </div>
  );
};

export default ListContainer;
