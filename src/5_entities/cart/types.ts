import React from 'react';

export type CartDropdownProps = {
  orders: any;
  isOpen: boolean;
  actions: React.ReactNode;
};

export type CartItemProps = {
  title: string;
  cover: string;
  price: string;
  actionSlot: React.ReactNode;
};

export type UserCartProps = {
  orders: any;
  actions: React.ReactNode;
};
