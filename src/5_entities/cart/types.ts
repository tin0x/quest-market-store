import React, { type ReactNode } from 'react';

export type CartItemProps = {
  title: string;
  gameId: number;
  cover: string;
  price: number;
  actionSlot: React.ReactNode;
};

export type CartResponse = {
  id: number;
  userId: string;
  title: string;
  price: number;
  poster: string;
  createdAt: string;
  gameId: number;
};

export type CartDropdownProps = {
  orders: CartResponse[];
  isOpen: boolean;
  renderAction: (product: CartResponse) => ReactNode;
};

export type UserCartProps = {
  orders: CartResponse[];
  renderAction: (product: CartResponse) => ReactNode;
};
