import React from 'react';
import type { HeadingDescriptionProps } from '@shared/ui/heading-description/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const HeadingDescription: React.FC<HeadingDescriptionProps> = ({ className, title, text }) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className="max-h-max border-b-3 border-cyan-400 pb-2 text-[30px] font-bold">{title}</span>
      <div className="text-text-secondary text-[22px]">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeadingDescription;
