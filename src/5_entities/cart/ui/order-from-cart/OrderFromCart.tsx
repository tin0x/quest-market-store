import React from 'react';
import type { OrderFromCartProps } from '@entities/cart/types.ts';
import Card from '@shared/ui/card/Card.tsx';
import { cn } from '@shared/lib/utils/cn.ts';
import OrderFromCartSkeleton from '@shared/ui/skeletons/order-from-cart-skeleton/OrderFromCartSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { calculateTotalCost } from '@entities/cart';
import Button from '@shared/ui/button/Button.tsx';

const OrderFromCart: React.FC<OrderFromCartProps> = ({
  className,
  cartList,
  actionSlot,
  isContinueShopping,
  orderStates,
}) => {
  const renderContent = () => {
    if (orderStates?.isLoading) return <OrderFromCartSkeleton />;
    if (orderStates?.isEmpty) return <QueryPlaceholder type="emptyData" />;
    if (orderStates?.isError) return <QueryPlaceholder type="error" onClick={orderStates.refetch} />;

    return (
      <>
        <h3 className="text-[26px] font-bold">Order Summary</h3>
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
            <div className="flex justify-between gap-2 py-6 text-[26px]">
              <span>Total</span>
              <span>{`$${calculateTotalCost(cartList).toFixed(2)}`}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 text-[18px]">
          {actionSlot || <Button asLink pathTo="/checkout" text="Procced to Checkout" variant="dark" />}
          {isContinueShopping && (
            <Button className="border-white" asLink pathTo="/browse" text="Continue Shopping" variant="transparent" />
          )}
        </div>
      </>
    );
  };

  return (
    <Card className={cn('sticky top-5 flex flex-col gap-6 p-5', className)} variant="surface">
      {renderContent()}
    </Card>
  );
};

export default OrderFromCart;
