import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { SlideItemProps } from '@entities/game/types.ts';
import { Link } from 'react-router-dom';

const SlideItem: React.FC<SlideItemProps> = ({ id, image, alt, name, actionSlot }) => {
  return (
    <div className="bg-gradient-card flex min-w-0 flex-1 flex-col justify-between rounded-lg p-6">
      <Link to={`game/${id}`} className="aspect-video w-full overflow-hidden rounded-md">
        <Image
          className="object-top transition-transform duration-250 hover:scale-110"
          source={image}
          alt={alt}
          type="game"
        />
      </Link>
      <div className="flex justify-between gap-2">
        <div className="min-w-0">
          <Link
            className="block truncate text-[22px] font-bold transition-transform duration-400 hover:scale-105"
            to={`/game/${id}`}
          >
            {name}
          </Link>
          <span className="mt-2 block text-[18px]">$50,99</span>
        </div>
        <div className="flex shrink-0 justify-center self-end">{actionSlot}</div>
      </div>
    </div>
  );
};

export default SlideItem;
