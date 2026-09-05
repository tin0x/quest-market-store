import React from 'react';
import useFetchOrderById from '@widgets/order-summary-widget/model/useFetchOrderById.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import type { OrderSummaryWidgetProps } from '@widgets/order-summary-widget/types.ts';
import OrderSummarySkeleton from '@shared/ui/skeletons/order-summary-skeleton/OrderSummarySkeleton.tsx';
import { cn } from '@shared/lib/utils/cn.ts';
import { OrderList } from '@entities/order';

const OrderSummaryWidget: React.FC<OrderSummaryWidgetProps> = ({ className }) => {
  const { data, isLoading, isError } = useFetchOrderById();

  const renderContent = () => {
    if (isLoading) return <OrderSummarySkeleton />;

    if (!data || isError) return <QueryPlaceholder type="error" />;

    if (!data.orderItems.length) return <QueryPlaceholder type="emptyData" />;

    return (
      <>
        <h3 className="text-[30px] font-bold">Order Summary</h3>
        <OrderList className="px-5 sm:px-10" orderItemsList={data.orderItems} />
      </>
    );
  };

  return <div className={cn('flex flex-col gap-4', className)}>{renderContent()}</div>;
};

export default OrderSummaryWidget;
