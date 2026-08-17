import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import type { OrderFromCartProps } from '@entities/cart/types.ts';
import calculateTotalCost from '@entities/cart/lib/calculateTotalCost.ts';

const OrderFromCart: React.FC<OrderFromCartProps> = ({ cartList }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-center text-[22px] font-bold">Order Summary</h3>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-2 text-xl">
          <span className="text-text-secondary">Subtotal</span>
          <span>{`$${calculateTotalCost(cartList).toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between gap-2 text-xl">
          <span className="text-text-secondary">Discount</span>
          <span>$00.00</span>
        </div>
        <div className="border-t">
          <div className="flex justify-between gap-2 py-6 text-xl">
            <span>Total</span>
            <span>{`$${calculateTotalCost(cartList).toFixed(2)}`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 text-[18px]">
        <Button asLink pathTo="/checkout" text="Procced to Checkout" variant="dark" />
        <Button className="border-white" asLink pathTo="/browse" text="Continue Shopping" variant="transparent" />
      </div>
    </div>
  );
};

export default OrderFromCart;
