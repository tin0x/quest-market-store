import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { GameHeaderWidgetProps } from '@widgets/game-header-widget/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import ByGameNow from '@features/buy-game-now/ui/ByGameNow.tsx';
import { ToggleCartItemForCart } from '@features/toggle-cart-item';
import { ToggleGameStatusWishlist } from '@features/toggle-game-status-wishlist';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import GameHeaderSkeleton from '@shared/ui/skeletons/game-header-skeleton/GameHeaderSkeleton.tsx';

const GameHeaderWidget: React.FC<GameHeaderWidgetProps> = ({
  className,
  isLoading,
  isError,
  isReleased,
  game,
  refetch,
}) => {
  const renderContent = () => {
    if (isLoading) return <GameHeaderSkeleton />;
    if (!game || isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return (
      <>
        <div className="aspect-video w-full">
          <Image source={game.poster} alt="game-logo" type="game" />
        </div>
        <div className="text-text-primary line-clamp-6 text-justify text-[20px]">
          <p>{game.summary}</p>
        </div>
        <div className="flex flex-col gap-3">
          {isReleased && (
            <>
              <ByGameNow game={game} />
              <ToggleCartItemForCart className="text-xl" game={game} />
            </>
          )}
          <ToggleGameStatusWishlist wishlistGame={game} type="textButton" />
        </div>
      </>
    );
  };

  return <section className={cn('flex flex-col justify-between gap-5', className)}>{renderContent()}</section>;
};

export default GameHeaderWidget;
