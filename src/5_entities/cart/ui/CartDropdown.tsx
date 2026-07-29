import React from 'react';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import CartItem from '@entities/cart/ui/CartItem.tsx';
import type { CartDropdownProps } from '@entities/cart/types.ts';

const CartDropdown: React.FC<CartDropdownProps> = ({ orders, isOpen, actions }) => {
  return (
    <Dropdown className="absolute top-full right-0 w-40 rounded-sm" isOpen={isOpen}>
      <ul className="p flex flex-col gap-2">
        {orders.map((order: any) => (
          <li key={order.id}>
            <CartItem title={order.title} cover={order.cover} price={order.price} actionSlot={actions} />
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default CartDropdown;
