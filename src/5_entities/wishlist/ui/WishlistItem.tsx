import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { WishlistItemProps } from '@entities/wishlist/types.ts';
import { Link } from 'react-router-dom';

const WishlistItem: React.FC<WishlistItemProps> = ({ wishlistItem, actionSlots }) => {
  return (
    <div className="flex gap-4">
      <Link className="aspect-square w-50 overflow-hidden rounded-md" to={`game/${wishlistItem.gameId}`}>
        <Image
          className="transition-transform duration-300 hover:scale-110"
          source={wishlistItem.poster}
          type="game"
          alt={wishlistItem.title}
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-center justify-between text-[22px] font-bold">
          <Link to={`/game/${wishlistItem.gameId}`}>{wishlistItem.title}</Link>
          <span>${wishlistItem.price}</span>
        </div>
        <div className="flex justify-end gap-2">
          {actionSlots.renderRemove}
          {actionSlots.renderAdd}
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
