import React from 'react';
import type { OrderListProps } from '@entities/order/types.ts';
import ProductItemCard from '@shared/ui/product-item-card/ProductItemCard.tsx';
import Card from '@shared/ui/card/Card.tsx';
import { cn } from '@shared/lib/utils/cn.ts';

const OrderList: React.FC<OrderListProps> = ({ className, orderItemsList }) => {
  return (
    <Card className={cn('rounded-md px-10 py-7.5', className)} variant="surface">
      <ul className="flex flex-col">
        {orderItemsList.map((order) => (
          <li className="last: border-b py-5 first:pt-0 last:border-none last:pb-0" key={order.gameId}>
            <ProductItemCard item={order} showAmount />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default OrderList;
