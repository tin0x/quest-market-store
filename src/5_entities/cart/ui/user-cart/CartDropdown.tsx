import React from 'react';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import CartItem from '@entities/cart/ui/user-cart/CartItem.tsx';
import type { CartDropdownProps } from '@entities/cart/types.ts';
import CartStub from '@shared/assets/icons/cart-stub.svg?react';
import Button from '@shared/ui/button/Button.tsx';
import calculateTotalCost from '@entities/cart/lib/calculateTotalCost.ts';

const CartDropdown: React.FC<CartDropdownProps> = ({ cartList, isOpen, closeDropdown, renderAction }) => {
  const isEmpty = cartList.length === 0;

  return (
    <Dropdown className="absolute top-full right-0 w-110 rounded-md p-3" isOpen={isOpen}>
      {isEmpty ? (
        <div className="flex h-full min-h-90 flex-col items-center justify-center gap-4">
          <CartStub className="h-30 w-30" />
          <span className="text-center text-xl font-bold">It's empty here for now. Choose your first item.</span>
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-2 pr-4">
          <span className="mb-4 block text-center text-xl font-bold underline">List of Orders</span>
          <ul className="flex max-h-137.5 flex-col gap-2 overflow-y-scroll">
            {cartList.map((cartItem) => (
              <li key={cartItem.id}>
                <CartItem cartItem={cartItem} actionSlot={renderAction(cartItem)} />
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-xl">
            <span className="font-bold">Total:</span>
            <span>{`${calculateTotalCost(cartList).toFixed(2)} $`}</span>
          </div>
          <Button asLink pathTo="/cart" onLink={closeDropdown} variant="accent" text="Proceed to order" />
        </div>
      )}
    </Dropdown>
  );
};

export default CartDropdown;
