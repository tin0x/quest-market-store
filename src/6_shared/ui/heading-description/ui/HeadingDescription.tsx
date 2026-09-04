import React from 'react';
import type { HeadingDescriptionProps } from '@shared/ui/heading-description/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const HeadingDescription: React.FC<HeadingDescriptionProps> = ({ className, classTitle, title, text }) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className={cn('sm:text max-h-max border-b-3 border-cyan-400 pb-2 text-[30px] font-bold', classTitle)}>
        {title}
      </span>
      <div className="md:text-text-secondary text-[22px] text-white">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeadingDescription;
