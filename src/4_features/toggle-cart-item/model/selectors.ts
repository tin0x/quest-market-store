import { cartApi } from '@entities/cart/api/cartApi.ts';
import type { RootState } from '@app/store/store.ts';

const selectCartItems = cartApi.endpoints.getItemsFromCart.select();

export const getCartItems = (state: RootState) => selectCartItems(state) ?? [];
