import React from 'react';
import type { OrderDetailsListProps } from '@entities/order/types.ts';
import OrderDetailsItem from '@entities/order/ui/OrderDetailsItem.tsx';
import Accordion from '@shared/ui/accordion/Accordion.tsx';
import { OrderList } from '@entities/order';

const OrderDetailsList: React.FC<OrderDetailsListProps> = ({ orderDetailsList }) => {
  return (
    <ul className="flex flex-col gap-6">
      {orderDetailsList.map((order) => (
        <li key={order.id}>
          <Accordion
            topSlot={<OrderDetailsItem orderId={order.id} totalPrice={order.totalPrice} date={order.createdAt} />}
            innerSlot={<OrderList className="bg-card-secondary p-0" orderItemsList={order.orderItems} />}
          />
        </li>
      ))}
    </ul>
  );
};

export default OrderDetailsList;
