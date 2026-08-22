import React from 'react';
import type { OrderDetailsItemProps } from '@entities/order/types.ts';
import formatDate from '@shared/lib/utils/formatDate.ts';

const OrderDetailsItem: React.FC<OrderDetailsItemProps> = ({ orderId, totalPrice, date }) => {
  return (
    <div className="flex flex-1 flex-col gap-2.5 text-xl">
      <div className="text-text-secondary flex justify-between gap-2">
        <span>{formatDate(date)}</span>
        <span>Total</span>
      </div>
      <div className="text-text-primary flex justify-between gap-2">
        <span>{`Order number : ${orderId}`}</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default OrderDetailsItem;
