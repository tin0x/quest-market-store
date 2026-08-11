import type { CartResponse } from '@entities/cart/types.ts';

const calculateTotalCost = (products: CartResponse[]) => {
  return products.reduce((total, product) => total + parseInt(product.price), 0);
};

export default calculateTotalCost;
