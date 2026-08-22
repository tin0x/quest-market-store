import React, { useState } from 'react';
import type { AccordionProps } from '@shared/ui/accordion/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import ArrowDown from '@shared/assets/icons/arrow-down.svg?react';

const Accordion: React.FC<AccordionProps> = ({ topSlot, innerSlot }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div
      className="bg-card-secondary cursor-pointer rounded-md p-8.5"
      onClick={() => setShowAccordion((prev) => !prev)}
    >
      <div
        className={cn(
          'flex items-center justify-between gap-10 border-b border-transparent transition-all ease-in-out',
          {
            'border-white pb-10': showAccordion,
          },
        )}
      >
        {topSlot}
        <ArrowDown
          className={cn('h-5 w-5 transition-transform duration-300 ease-in-out', { 'rotate-180': showAccordion })}
        />
      </div>
      <div
        className={cn('grid grid-rows-[0fr] transition-all duration-300 ease-in-out', {
          'grid-rows-[1fr]': showAccordion,
        })}
      >
        <div className="overflow-hidden pt-10">{innerSlot}</div>
      </div>
    </div>
  );
};

export default Accordion;
