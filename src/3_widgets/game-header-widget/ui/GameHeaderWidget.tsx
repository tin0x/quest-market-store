import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { GameHeaderWidgetProps } from '@widgets/game-header-widget/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import ByGameNow from '@features/buy-game-now/ui/ByGameNow.tsx';
import { ToggleCartItemForCart } from '@features/toggle-cart-item';
import { ToggleGameStatusWishlist } from '@features/toggle-game-status-wishlist';

const GameHeaderWidget: React.FC<GameHeaderWidgetProps> = ({ className, game }) => {
  return (
    <div className={cn('flex flex-col justify-center gap-10', className)}>
      <div className="aspect-video w-full">
        <Image source={game.poster} alt="game-logo" type="game" />
      </div>
      <div className="text-text-primary line-clamp-5 text-justify text-[20px]">
        <p>{game.summary}</p>
      </div>
      <div className="flex flex-col gap-2">
        <ByGameNow game={game} />
        <ToggleCartItemForCart className="text-xl" game={game} />
        <ToggleGameStatusWishlist wishlistGame={game} type="textButton" />
      </div>
    </div>
  );
};

export default GameHeaderWidget;
