import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { ShoppingCartWidget } from '@widgets/shopping-cart-widget';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';

const CartPage: React.FC = () => {
  useToggleTitle('Cart');

  return (
    <div className="h-full">
      <Container className="flex gap-12">
        <ShoppingCartWidget />
      </Container>
    </div>
  );
};

export default CartPage;
