import type { Cart } from '@entities/cart/types.ts';

const calculateTotalCost = (cartList: Cart[]) => {
  return cartList.reduce((total, cartItem) => total + cartItem.price, 0);
};

export default calculateTotalCost;
