import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import { useAddToCart } from '@features/add-to-cart/model/useAddToCart.ts';
import type { AddToCartProps } from '@features/add-to-cart/types.ts';

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const { isLoading, handleAddToCart } = useAddToCart();

  return (
    <Button
      text="Add to Cart"
      type="button"
      variant="accent"
      disabled={isLoading}
      onClick={() => handleAddToCart(product)}
    />
  );
};

export default AddToCart;
