import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { WishlistItemProps } from '@entities/wishlist/types.ts';

const WishlistItem: React.FC<WishlistItemProps> = ({ wishlistItem, actionSlots }) => {
  return (
    <div className="flex gap-4">
      <div className="aspect-square w-50 rounded-md">
        <Image source={wishlistItem.poster} type="game" alt={wishlistItem.title} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-center justify-between text-[22px] font-bold">
          <span>{wishlistItem.title}</span>
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
