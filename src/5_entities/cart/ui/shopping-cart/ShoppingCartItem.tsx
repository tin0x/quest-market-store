import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { ShoppingCartItemProps } from '@entities/cart/types.ts';

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ cartItem, actionSlot }) => {
  return (
    <div className="flex justify-between gap-6">
      <div className="aspect-square max-w-41.5 rounded-md">
        <Image source={cartItem.poster} alt={cartItem.title} type="game" />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 py-2">
        <div className="flex justify-between gap-2">
          <p className="text-xl font-bold">{cartItem.title}</p>
          {actionSlot}
        </div>
        <span className="self-end text-xl">${cartItem.price}</span>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
