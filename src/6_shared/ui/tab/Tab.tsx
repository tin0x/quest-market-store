import React from 'react';
import { NavLink } from 'react-router-dom';
import type { TabProps } from '@shared/ui/tab/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const Tab: React.FC<TabProps> = ({ pathTo, title, description }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'bg-surface flex flex-col gap-2 border-x-15 border-transparent px-4 py-6 hover:border-[#9290C3] hover:bg-[#535C9180] hover:text-[#9290C3] focus:border-[#9290C3] focus:bg-[#535C9180] focus:text-[#9290C3]',
          {
            'border-[#9290C3] bg-[#535C9180] text-[#9290C3]': isActive,
          },
        )
      }
      to={pathTo}
    >
      <span className="text-[20px] font-bold">{title}</span>
      <span className="text-text-secondary">{description}</span>
    </NavLink>
  );
};

export default Tab;
