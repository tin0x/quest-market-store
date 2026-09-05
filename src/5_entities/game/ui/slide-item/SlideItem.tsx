import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { SlideItemProps } from '@entities/game/types.ts';
import { Link } from 'react-router-dom';

const SlideItem: React.FC<SlideItemProps> = ({ gameSlide, purchaseSlot, favoriteSlot }) => {
  return (
    <div className="bg-gradient-card relative flex flex-1 flex-col justify-between gap-5 rounded-lg p-3 lg:p-6">
      <Link to={`game/${gameSlide.gameId}`} className="aspect-video w-full overflow-hidden rounded-md">
        <Image
          className="object-top transition-transform duration-300 hover:scale-110"
          source={gameSlide.poster}
          alt={gameSlide.title}
          type="game"
        />
      </Link>
      <div className="absolute top-8 left-8 z-10">{favoriteSlot}</div>
      <div className="flex justify-between gap-2">
        <div className="min-w-0">
          <Link className="block truncate text-[22px] font-bold" to={`/game/${gameSlide.gameId}`}>
            {gameSlide.title}
          </Link>
          <span className="mt-2 block text-[18px]">{gameSlide?.price ? `$${gameSlide.price}` : 'Soon'}</span>
        </div>
        <div className="flex shrink-0 justify-center self-end">{purchaseSlot}</div>
      </div>
    </div>
  );
};

export default SlideItem;
