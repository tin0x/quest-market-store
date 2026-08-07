import React, { useRef, useState } from 'react';
import Button from '@shared/ui/button/Button.tsx';
import CartIcon from '@shared/assets/icons/cart.svg?react';
import type { UserCartProps } from '@entities/cart/types.ts';
import CartDropdown from '@entities/cart/ui/CartDropdown.tsx';
import { useClickOutside } from '@shared/hooks/ui/useClickOutside.ts';

const UserCart: React.FC<UserCartProps> = ({ orders, renderAction }) => {
  const [showCart, setShowCart] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => setShowCart(false));

  const isOrders = orders?.length > 0;

  return (
    <div className="relative" ref={dropdownRef}>
      {isOrders && (
        <div className="rounded-circle bg-surface pointer-events-none absolute -top-6 -right-5 z-10 border-2 px-3 py-1">
          <span className="text-text-primary font-bold select-none">{orders.length}</span>
        </div>
      )}
      <Button
        className="text-text-primary h-12 w-12 bg-transparent"
        Icon={CartIcon}
        onClick={() => setShowCart((prev) => !prev)}
      />
      <CartDropdown orders={orders} renderAction={renderAction} isOpen={showCart} />
    </div>
  );
};

export default UserCart;
