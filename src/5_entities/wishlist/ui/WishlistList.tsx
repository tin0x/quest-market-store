import React from 'react';
import type { WishlistListProps } from '@entities/wishlist/types.ts';
import WishlistItem from '@entities/wishlist/ui/WishlistItem.tsx';

const WishlistList: React.FC<WishlistListProps> = ({ wishlist, actions }) => {
  return (
    <ul className="flex flex-col">
      {wishlist.map((wishlistItem) => (
        <li key={wishlistItem.id}>
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
