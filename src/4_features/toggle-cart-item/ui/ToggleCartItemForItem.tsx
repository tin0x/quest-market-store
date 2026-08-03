import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import RemoveIcon from '@shared/assets/icons/cross.svg?react';
import type { ToggleCartItemForItemProps } from '@features/toggle-cart-item/types.ts';
import { useToggleCartItem } from '@features/toggle-cart-item/model/useToggleCartItem.ts';

const ToggleCartItemForItem: React.FC<ToggleCartItemForItemProps> = ({ product }) => {
  const { isLoading, handleToggleCartItem } = useToggleCartItem();

  return (
    <Button
      className="hover:bg-transparent hover:opacity-80"
      type="button"
      variant="transparent"
      disabled={isLoading}
      onClick={() => handleToggleCartItem(product)}
      Icon={RemoveIcon}
    />
  );
};

export default ToggleCartItemForItem;
