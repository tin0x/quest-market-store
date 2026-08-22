import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { CheckoutWidget } from '@widgets/checkout-widget';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';

const CheckoutPage: React.FC = () => {
  useToggleTitle('Checkout');

  return (
    <div className="h-full">
      <Container>
        <h1 className="mb-6 text-[32px] font-bold">Checkout</h1>
        <CheckoutWidget />
      </Container>
    </div>
  );
};

export default CheckoutPage;
