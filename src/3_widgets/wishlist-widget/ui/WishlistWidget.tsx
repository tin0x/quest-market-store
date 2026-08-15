import React from 'react';
import useFetchWishlist from '@widgets/wishlist-widget/useFetchWishlist.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import WishlistSkeleton from '@shared/ui/skeletons/wishlist-skeleton/WishlistSkeleton.tsx';
import { ToggleCartItemForCart } from '@features/toggle-cart-item';
import { ToggleGameStatusWishlist } from '@features/toggle-game-status-wishlist';
import type { Game } from '@entities/game';
import { type Wishlist, WishlistList } from '@entities/wishlist';

const WishlistWidget: React.FC = () => {
  const { wishlist, isEmpty, isLoading, isError, refetch } = useFetchWishlist();

  const actions = {
    renderRemove: (wishlistGame: Wishlist) => (
      <ToggleGameStatusWishlist className="min-w-57.5 text-[18px]" wishlistGame={wishlistGame} type="textButton" />
    ),
    renderAdd: (game: Game) => <ToggleCartItemForCart className="min-w-57.5 text-[18px]" game={game} />,
  };

  const renderContent = () => {
    if (isLoading) return <WishlistSkeleton />;
    if (isEmpty)
      return (
        <QueryPlaceholder type="emptyData" customMessage="Your wishlist is currently empty, add your first game." />
      );
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return <WishlistList wishlist={wishlist} actions={actions} />;
  };

  return <div className="w-full">{renderContent()}</div>;
};

export default WishlistWidget;
