import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import { useToggleCartItem } from '@features/toggle-cart-item/model/useToggleCartItem.ts';
import type { ToggleCartItemForCardProps } from '@features/toggle-cart-item/types.ts';

const ToggleCartItemForCard: React.FC<ToggleCartItemForCardProps> = ({ product }) => {
  const { isLoading, isExist, handleToggleCartItem } = useToggleCartItem();
  const content = isExist ? 'Remove from Cart' : 'Add to Cart';

  return (
    <Button
      type="button"
      variant="accent"
      disabled={isLoading}
      text={content}
      onClick={() => handleToggleCartItem(product)}
    />
  );
};

export default ToggleCartItemForCard;
