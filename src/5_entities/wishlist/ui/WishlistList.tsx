import React from 'react';
import type { WishlistListProps } from '@entities/wishlist/types.ts';
import WishlistItem from '@entities/wishlist/ui/WishlistItem.tsx';
import { cn } from '@shared/lib/utils/cn.ts';

const WishlistList: React.FC<WishlistListProps> = ({ wishlist, actions }) => {
  return (
    <ul className="flex flex-1 flex-col">
      {wishlist.map((wishlistItem) => (
        <li className={cn('border-b py-9 first:pt-0 last:border-none last:pb-0')} key={wishlistItem.id}>
          <WishlistItem
            wishlistItem={wishlistItem}
            actionSlots={{
              renderRemove: actions.renderRemove(wishlistItem),
              renderAdd: actions.renderAdd(wishlistItem),
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default WishlistList;
