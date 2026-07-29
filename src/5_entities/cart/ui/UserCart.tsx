import React, { useRef, useState } from 'react';
import Button from '@shared/ui/button/Button.tsx';
import CartIcon from '@shared/assets/icons/cart.svg?react';
import type { UserCartProps } from '@entities/cart/types.ts';
import CartDropdown from '@entities/cart/ui/CartDropdown.tsx';
import { useClickOutside } from '@shared/hooks/ui/useClickOutside.ts';

const UserCart: React.FC<UserCartProps> = ({ orders, actions }) => {
  const [showCart, setShowCart] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => setShowCart(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        className="text-text-primary h-12 w-12 bg-transparent"
        Icon={CartIcon}
        onClick={() => setShowCart((prev) => !prev)}
      />
      <CartDropdown orders={orders} actions={actions} isOpen={showCart} />
    </div>
  );
};

export default UserCart;
