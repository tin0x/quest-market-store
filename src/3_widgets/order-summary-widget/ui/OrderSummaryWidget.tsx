import React from 'react';
import { useFetchGameCart } from '@entities/cart';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import OrderFromCart from '@entities/cart/ui/order-from-cart/OrderFromCart.tsx';
import Card from '@shared/ui/card/Card.tsx';
import type { OrderSummaryWidgetProps } from '@widgets/order-summary-widget/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const OrderSummaryWidget: React.FC<OrderSummaryWidgetProps> = ({ className }) => {
  const { games, isEmpty, isLoading, isError, refetch } = useFetchGameCart();

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (isEmpty) return <QueryPlaceholder type="emptyData" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return <OrderFromCart cartList={games} />;
  };

  return (
    <section className={cn(className)}>
      <Card className="sticky top-5 p-5" variant="surface">
        {renderContent()}
      </Card>
    </section>
  );
};

export default OrderSummaryWidget;
