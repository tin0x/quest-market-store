import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import HeartIcon from '@shared/assets/icons/heart.svg?react';
import type { ToggleProductStatusWishlistProps } from '@features/toggle-product-status-wishlist/types.ts';
import useToggleProductStatusWishlist from '@features/toggle-product-status-wishlist/model/useToggleProductStatusWishlist.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const ToggleProductStatusWishlist: React.FC<ToggleProductStatusWishlistProps> = ({ type, product }) => {
  const { isExists, isLoading, handleToggleProductStatusWishlist } = useToggleProductStatusWishlist(product);

  const currentStatusText = isExists ? 'Remove from Wishlist' : 'Add to Wishlist';

  const currentStyle = {
    iconButton: 'rounded-circle px-2 py-1',
    textButton: undefined,
  };

  return (
    <Button
      className={cn('text-xl', currentStyle[type])}
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

export default ToggleProductStatusWishlist;
