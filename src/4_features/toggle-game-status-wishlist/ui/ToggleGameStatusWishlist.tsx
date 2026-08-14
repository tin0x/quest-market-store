import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import HeartIcon from '@shared/assets/icons/heart.svg?react';
import useToggleGameStatusWishlist from '@features/toggle-game-status-wishlist/model/useToggleGameStatusWishlist.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import type { ToggleGameStatusWishlistProps } from '@features/toggle-game-status-wishlist/types.ts';

const ToggleGameStatusWishlist: React.FC<ToggleGameStatusWishlistProps> = ({ className, type, wishlistGame }) => {
  const { isExists, isLoading, handleToggleProductStatusWishlist } = useToggleGameStatusWishlist(wishlistGame);

  const currentStatusText = isExists ? 'Remove from Wishlist' : 'Add to Wishlist';

  const currentStyle = {
    iconButton: 'rounded-circle px-2 py-1',
    textButton: undefined,
  };

  return (
    <Button
      className={cn('text-xl', currentStyle[type], className)}
      text={type === 'textButton' ? currentStatusText : undefined}
      Icon={type === 'iconButton' ? HeartIcon : undefined}
      iconStyles={cn('w-8 h-8', { 'text-text-primary': isExists, 'text-transparent': !isExists })}
      type="button"
      variant="blur"
      disabled={isLoading}
      onClick={handleToggleProductStatusWishlist}
    />
  );
};

export default ToggleGameStatusWishlist;
