import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { CartItemProps } from '@entities/cart/types.ts';
import { Link } from 'react-router-dom';

const CartItem: React.FC<CartItemProps> = ({ cartItem, actionSlot }) => {
  return (
    <div className="hover:bg-gradient-card flex cursor-pointer items-center justify-between gap-4 rounded-md p-2">
      <Link to={`/game/${cartItem.gameId}`}>
        <div className="flex items-center gap-2">
          <div className="aspect-square w-20">
            <Image type="game" source={cartItem.poster} alt={cartItem.title} />
          </div>
          <div className="flex flex-2 flex-col gap-1">
            <span className="text-text-primary line-clamp-2 text-[18px] font-bold text-ellipsis">{cartItem.title}</span>
            <span className="text-text-secondary text-[14px] font-bold">${cartItem.price}</span>
          </div>
        </div>
      </Link>
      <div className="shrink-0">{actionSlot}</div>
    </div>
  );
};

export default CartItem;
