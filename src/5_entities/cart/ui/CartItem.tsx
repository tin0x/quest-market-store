import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { CartItemProps } from '@entities/cart/types.ts';

const CartItem: React.FC<CartItemProps> = ({ title, cover, price, actionSlot }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="gao-2 flex items-center">
        <Image type="game" source={cover} alt={title} />
        <div className="flex flex-col gap-1">
          <span className="text-text-primary text-[18px] font-bold">{title}</span>
          <span className="text-text-secondary text-[14px] font-bold">{price}</span>
        </div>
      </div>
      {actionSlot}
    </div>
  );
};

export default CartItem;
