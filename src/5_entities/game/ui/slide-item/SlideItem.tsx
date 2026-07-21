import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { SlideItemProps } from '@entities/game/types.ts';

const SlideItem: React.FC<SlideItemProps> = ({ image, alt, name, actionSlot }) => {
  return (
    <div className="bg-surface flex h-full w-full flex-col rounded-lg p-6">
      <div className="relative mb-4 aspect-video w-full grow">
        <Image source={image} alt={alt} type="game" />
      </div>
      <div className="flex items-end justify-between gap-2">
        <div className="flex basis-2/3 flex-col gap-2 overflow-hidden">
          <p className="truncate text-xl font-bold">{name}</p>
          <span className="text-[17px]">$50,99</span>
        </div>
        <div className="">{actionSlot}</div>
      </div>
    </div>
  );
};

export default SlideItem;
