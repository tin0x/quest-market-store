import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { ShoppingCartWidget } from '@widgets/shopping-cart-widget';

const CartPage: React.FC = () => {
  return (
    <div className="h-full">
      <Container className="flex gap-12">
        <ShoppingCartWidget />
      </Container>
    </div>
  );
};

export default CartPage;
