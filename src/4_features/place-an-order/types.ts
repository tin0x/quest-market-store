import type { CartItem } from '@entities/cart/types.ts';
import React from 'react';

export type PlaceAnOrderProps = {
  className?: string;
  games: CartItem[];
  renderAction: (isValid: boolean, isLoading: boolean) => React.ReactNode;
};

export type Order = {
  id: string;
  userId: string;
  totalPrice: number;
  holderName: string;
  lastDigitsOfCard: number;
  createdAt: string;
};

export type CreateOrderArgs = {
  totalPrice: number;
  holderName: string;
  lastDigitsOfCard: number;
  userId: string;
};
