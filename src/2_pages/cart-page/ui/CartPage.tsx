import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { ShoppingCartWidget } from '@widgets/shopping-cart-widget';
import { OrderSummaryWidget } from '@widgets/order-summary-widget';

const CartPage: React.FC = () => {
  return (
    <div className="h-full">
      <Container className="flex justify-between gap-12">
        <ShoppingCartWidget className="flex-2" />
        <OrderSummaryWidget className="flex-1 pt-32.5" />
      </Container>
    </div>
  );
};

export default CartPage;
