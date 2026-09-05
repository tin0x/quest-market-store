import React from 'react';
import { Link } from 'react-router-dom';
import Image from '@shared/ui/image/Image.tsx';
import type { ProductItemCardProps } from '@shared/ui/product-item-card/types.ts';

const ProductItemCard: React.FC<ProductItemCardProps> = ({ item, actionSlot, showAmount }) => {
  return (
    <div className="flex flex-col justify-between gap-6 sm:flex-row">
      <Link className="aspect-video overflow-hidden rounded-sm sm:max-w-50" to={`/game/${item.gameId}`}>
        <Image
          className="transition-transform duration-300 hover:scale-110"
          source={item.poster}
          alt={item.title}
          type="game"
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between gap-4 py-2">
        <div className="flex justify-between gap-2">
          <Link className="text-xl font-bold" to={`/game/${item.gameId}`}>
            {item.title}
          </Link>
          {actionSlot}
        </div>
        <div className="flex justify-between gap-2">
          {showAmount && <span className="text-xl font-bold">1x Total</span>}
          <span className="self-end text-[24px]">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
