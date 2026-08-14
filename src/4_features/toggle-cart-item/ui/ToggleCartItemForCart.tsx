import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import { useToggleCartItem } from '@features/toggle-cart-item/model/useToggleCartItem.ts';
import type { ToggleCartItemForCartProps } from '@features/toggle-cart-item/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const ToggleCartItemForCart: React.FC<ToggleCartItemForCartProps> = ({ className, game }) => {
  const { isLoading, isExists, handleToggleCartItem } = useToggleCartItem(game);
  const content = isExists ? 'Remove from Cart' : 'Add to Cart';

  return (
    <Button
      className={cn(className)}
      type="button"
      variant="accent"
      disabled={isLoading}
      text={content}
      onClick={handleToggleCartItem}
    />
  );
};

export default ToggleCartItemForCart;
