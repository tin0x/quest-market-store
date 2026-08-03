import React from 'react';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import CartItem from '@entities/cart/ui/CartItem.tsx';
import type { CartDropdownProps } from '@entities/cart/types.ts';

const CartDropdown: React.FC<CartDropdownProps> = ({ orders, isOpen, renderAction }) => {
  return (
    <Dropdown className="absolute top-full right-0 w-120 rounded-md p-3" isOpen={isOpen}>
      <span className="mb-4 block text-center text-xl font-bold underline">List of Orders</span>
      <ul className="flex max-h-137.5 flex-col gap-2 overflow-y-scroll pr-4">
        {orders.map((order) => (
          <li key={order.id}>
            <CartItem
              title={order.title}
              gameId={order.gameId}
              cover={order.poster}
              price={order.price}
              actionSlot={renderAction(order)}
            />
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default CartDropdown;
