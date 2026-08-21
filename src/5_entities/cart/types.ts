import React, { type ReactNode } from 'react';
import type { Game } from '@entities/game';

type CartErrorCode = 'CART_ITEM_EXISTS' | 'CART_ITEM_NOT_FOUND' | 'UNKNOWN_ERROR';

export type ApiError = {
  status: number | string;
  data: {
    code: CartErrorCode;
    message: string;
  };
};

export type CartItem = {
  id: number;
  userId: string;
  title: string;
  price: number;
  poster?: string;
  createdAt: string;
  gameId: number;
};

export type CartItemProps = {
  cartItem: CartItem;
  actionSlot: React.ReactNode;
};

export type CartDropdownProps = {
  cartList: CartItem[];
  closeDropdown: () => void;
  isOpen: boolean;
  renderAction: (cartItem: CartItem) => ReactNode;
};

export type UserCartProps = {
  cartList: CartItem[];
  renderAction: (cartItem: CartItem) => ReactNode;
};

export type ShoppingCartItemProps = {
  cartItem: CartItem;
  actionSlot: React.ReactNode;
};

export type ShoppingCartListProps = {
  className?: string;
  cartList: CartItem[];
  renderAction: (game: Game) => ReactNode;
};

export type OrderFromCartProps = {
  className?: string;
  cartList: CartItem[];
  actionSlot?: React.ReactNode;
  isContinueShopping?: boolean;
};
