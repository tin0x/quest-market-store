import React, { type ReactNode } from 'react';

type CartErrorCode = 'CART_ITEM_EXISTS' | 'CART_ITEM_NOT_FOUND' | 'UNKNOWN_ERROR';

export type ApiError = {
  status: number | string;
  data: {
    code: CartErrorCode;
    message: string;
  };
};

export type CartItemProps = {
  product: CartResponse;
  actionSlot: React.ReactNode;
};

export type CartResponse = {
  id: number;
  userId: string;
  title: string;
  price: string;
  poster: string | null;
  createdAt: string;
  gameId: number;
};

export type CartDropdownProps = {
  orders: CartResponse[];
  closeDropdown: () => void;
  isOpen: boolean;
  renderAction: (product: CartResponse) => ReactNode;
};

export type UserCartProps = {
  orders: CartResponse[];
  renderAction: (product: CartResponse) => ReactNode;
};
