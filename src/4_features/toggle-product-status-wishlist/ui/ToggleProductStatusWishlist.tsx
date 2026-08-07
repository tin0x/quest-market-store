import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import HeartIcon from '@shared/assets/icons/heart.svg?react';
import type { ToggleProductStatusWishlistProps } from '@features/toggle-product-status-wishlist/types.ts';
import useToggleProductStatusWishlist from '@features/toggle-product-status-wishlist/model/useToggleProductStatusWishlist.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const ToggleProductStatusWishlist: React.FC<ToggleProductStatusWishlistProps> = ({ product }) => {
  const { isExists, isLoading, handleToggleProductStatusWishlist } = useToggleProductStatusWishlist(product);

  return (
    <Button
      className="rounded-circle px-2 py-1"
      Icon={HeartIcon}
      iconStyles={cn('w-8 h-8', { 'text-text-primary': isExists, 'text-transparent': !isExists })}
      type="button"
      variant="blur"
      disabled={isLoading}
      onClick={handleToggleProductStatusWishlist}
    />
  );
};

export default ToggleProductStatusWishlist;
