import React from 'react';
import ShoppingCartItem from '@entities/cart/ui/shopping-cart/ShoppingCartItem.tsx';
import type { ShoppingCartListProps } from '@entities/cart/types.ts';
import Card from '@shared/ui/card/Card.tsx';

const ShoppingCartList: React.FC<ShoppingCartListProps> = ({ cartList, renderAction }) => {
  return (
    <Card className="px-10 py-7.5" variant="surface">
      <ul className="flex flex-col">
        {cartList.map((cartItem) => (
          <li className="border-b py-8 first:pt-0 last:border-none last:pb-0" key={cartItem.id}>
            <ShoppingCartItem cartItem={cartItem} actionSlot={renderAction(cartItem)} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ShoppingCartList;
