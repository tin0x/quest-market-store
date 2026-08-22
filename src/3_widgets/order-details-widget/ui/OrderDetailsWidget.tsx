import React from 'react';
import { OrderDetailsList } from '@entities/order';
import useFetchOrderDetailsList from '@widgets/order-details-widget/model/useFetchOrderDetailsList.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';

const OrderDetailsWidget: React.FC = () => {
  const { orderDetailsList, isLoading, isError, isEmpty, refetch } = useFetchOrderDetailsList();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isEmpty) {
    return <QueryPlaceholder type="emptyData" />;
  }

  if (isError) {
    return <QueryPlaceholder type="error" onClick={refetch} />;
  }

  return (
    <div className="flex flex-1 flex-col">
      <OrderDetailsList orderDetailsList={orderDetailsList} />
    </div>
  );
};

export default OrderDetailsWidget;
