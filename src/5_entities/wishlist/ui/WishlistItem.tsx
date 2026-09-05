import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { WishlistItemProps } from '@entities/wishlist/types.ts';
import { Link } from 'react-router-dom';

const WishlistItem: React.FC<WishlistItemProps> = ({ wishlistItem, actionSlots }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Link
        className="aspect-video w-full overflow-hidden rounded-md md:aspect-square md:w-50"
        to={`/game/${wishlistItem.gameId}`}
      >
        <Image
          className="transition-transform duration-300 hover:scale-110"
          source={wishlistItem.poster}
          type="game"
          alt={wishlistItem.title}
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="flex items-center justify-between text-[22px] font-bold">
          <Link to={`/game/${wishlistItem.gameId}`}>{wishlistItem.title}</Link>
          {wishlistItem.price && <span>{`$${wishlistItem.price}`}</span>}
        </div>
        <div className="flex flex-col justify-end gap-2 md:flex-row">
          {actionSlots.renderRemove}
          {wishlistItem.price && actionSlots.renderAdd}
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
