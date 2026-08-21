import React from 'react';
import { OrderList } from '@entities/order';
import useFetchOrderById from '@widgets/order-summary-widget/model/useFetchOrderById.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { cn } from '@shared/lib/utils/cn.ts';
import type { OrderSummaryWidgetProps } from '@widgets/order-summary-widget/types.ts';

const OrderSummaryWidget: React.FC<OrderSummaryWidgetProps> = ({ className }) => {
  const { data, isLoading, isError } = useFetchOrderById();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || isError) {
    return <QueryPlaceholder type="error" />;
  }

  if (!data.orderItems.length) {
    return <QueryPlaceholder type="emptyData" />;
  }

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <h3 className="text-[30px] font-bold">Order Summary</h3>
      <OrderList orderItemsList={data.orderItems} />
    </div>
  );
};

export default OrderSummaryWidget;
