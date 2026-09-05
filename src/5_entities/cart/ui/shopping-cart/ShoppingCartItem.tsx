import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { ShoppingCartItemProps } from '@entities/cart/types.ts';
import { Link } from 'react-router-dom';

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ cartItem, actionSlot }) => {
  return (
    <div className="flex flex-col justify-between gap-6 sm:flex-row">
      <Link
        className="aspect-video max-w-full overflow-hidden rounded-md sm:aspect-square sm:max-w-41.5"
        to={`/game/${cartItem.gameId}`}
      >
        <Image
          className="transition-transform duration-300 hover:scale-110"
          source={cartItem.poster}
          alt={cartItem.title}
          type="game"
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between gap-4 py-2">
        <div className="flex justify-between gap-2">
          <Link className="text-xl font-bold" to={`/game/${cartItem.gameId}`}>
            {cartItem.title}
          </Link>
          {actionSlot}
        </div>
        <span className="self-end text-xl">${cartItem.price}</span>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
