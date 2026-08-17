import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import TrashIcon from '@shared/assets/icons/trash.svg?react';
import SpinnerLoader from '@shared/assets/icons/spinner.svg?react';
import type { ToggleCartItemForItemProps } from '@features/toggle-cart-item/types.ts';
import { useToggleCartItem } from '@features/toggle-cart-item/model/useToggleCartItem.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const ToggleCartItemForItem: React.FC<ToggleCartItemForItemProps> = ({ game }) => {
  const { isLoading, handleToggleCartItem } = useToggleCartItem(game);

  return (
    <Button
      className="hover:bg-transparent hover:opacity-80"
      type="button"
      variant="transparent"
      disabled={isLoading}
      onClick={handleToggleCartItem}
      iconStyles={cn('w-6 h-6', { 'hover:text-text-primary': isLoading })}
      Icon={isLoading ? SpinnerLoader : TrashIcon}
    />
  );
};

export default ToggleCartItemForItem;
