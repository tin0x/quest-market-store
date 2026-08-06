import React from 'react';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import CartItem from '@entities/cart/ui/CartItem.tsx';
import type { CartDropdownProps } from '@entities/cart/types.ts';
import CartStub from '@shared/assets/icons/cart-stub.svg?react';

const CartDropdown: React.FC<CartDropdownProps> = ({ orders, isOpen, renderAction }) => {
  const isEmpty = orders.length === 0;

  return (
    <Dropdown className="absolute top-full right-0 w-120 rounded-md p-3" isOpen={isOpen}>
      {isEmpty ? (
        <div className="flex h-full min-h-90 flex-col items-center justify-center gap-4">
          <CartStub className="h-30 w-30" />
          <span className="text-center text-xl font-bold">It's empty here for now. Choose your first item.</span>
        </div>
      ) : (
        <>
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
        </>
      )}
    </Dropdown>
  );
};

export default CartDropdown;
