import type { CartItem } from '@entities/cart/types.ts';

const calculateTotalCost = (cartList: CartItem[]) => {
  return cartList.reduce((total, cartItem) => total + cartItem.price, 0);
};

export default calculateTotalCost;
