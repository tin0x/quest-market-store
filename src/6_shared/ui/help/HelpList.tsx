import React from 'react';
import { helpLinks } from '@shared/ui/help/constants.ts';
import HelpItem from '@shared/ui/help/HelpItem.tsx';
import type { HelpListProps } from '@shared/ui/help/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const HelpList: React.FC<HelpListProps> = ({ className }) => {
  return (
    <ul className={cn('flex items-center justify-center gap-20', className)}>
      {helpLinks.map((link) => (
        <li key={link.title}>
          <HelpItem title={link.title} links={link.links} />
        </li>
      ))}
    </ul>
  );
};

export default HelpList;
