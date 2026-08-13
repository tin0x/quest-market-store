import React, { type ReactNode } from 'react';

type CartErrorCode = 'CART_ITEM_EXISTS' | 'CART_ITEM_NOT_FOUND' | 'UNKNOWN_ERROR';

export type ApiError = {
  status: number | string;
  data: {
    code: CartErrorCode;
    message: string;
  };
};

export type Cart = {
  id: number;
  userId: string;
  title: string;
  price: number;
  poster?: string;
  createdAt: string;
  gameId: number;
};

export type CartItemProps = {
  cartItem: Cart;
  actionSlot: React.ReactNode;
};

export type CartDropdownProps = {
  cartList: Cart[];
  closeDropdown: () => void;
  isOpen: boolean;
  renderAction: (cartItem: Cart) => ReactNode;
};

export type UserCartProps = {
  cartList: Cart[];
  renderAction: (cartItem: Cart) => ReactNode;
};
