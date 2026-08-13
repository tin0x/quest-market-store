import React from 'react';
import { WishlistList } from '@entities/wishlist';
import { ToggleGameStatusWishlist } from '@features/toggle-game-status-wishlist';
import { ToggleCartItemForCart } from '@features/toggle-cart-item';
import useFetchWishlist from '@widgets/wishlist-widget/useFetchWishlist.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import type { Wishlist } from '@entities/wishlist/types.ts';
import type { Game } from '@entities/game';

const WishlistWidget: React.FC = () => {
  const { wishlist, isEmpty, isLoading, isError, refetch } = useFetchWishlist();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isEmpty) {
    return <QueryPlaceholder type="emptyData" />;
  }

  if (isError) {
    return <QueryPlaceholder type="error" onClick={refetch} />;
  }

  const actions = {
    renderRemove: (wishlistGame: Wishlist) => (
      <ToggleGameStatusWishlist wishlistGame={wishlistGame} type="textButton" />
    ),
    renderAdd: (game: Game) => <ToggleCartItemForCart game={game} />,
  };

  return <WishlistList wishlist={wishlist} actions={actions} />;
};

export default WishlistWidget;
