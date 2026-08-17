import React, { useRef, useState } from 'react';
import Button from '@shared/ui/button/Button.tsx';
import CartIcon from '@shared/assets/icons/cart.svg?react';
import type { UserCartProps } from '@entities/cart/types.ts';
import CartDropdown from '@entities/cart/ui/user-cart/CartDropdown.tsx';
import { useClickOutside } from '@shared/hooks/ui/useClickOutside.ts';

const UserCart: React.FC<UserCartProps> = ({ cartList, renderAction }) => {
  const [showCart, setShowCart] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => setShowCart(false));

  const isOrders = cartList?.length > 0;

  return (
    <div className="relative" ref={dropdownRef}>
      {isOrders && (
        <div className="rounded-circle bg-surface pointer-events-none absolute -top-6 -right-5 z-10 h-7 min-w-7 border-2 px-1 text-center">
          <span className="text-text-primary font-bold select-none">{cartList.length}</span>
        </div>
      )}
      <Button
        className="text-text-primary h-12 w-12 bg-transparent"
        Icon={CartIcon}
        onClick={() => setShowCart((prev) => !prev)}
      />
      <CartDropdown
        cartList={cartList}
        renderAction={renderAction}
        closeDropdown={() => setShowCart(false)}
        isOpen={showCart}
      />
    </div>
  );
};

export default UserCart;
