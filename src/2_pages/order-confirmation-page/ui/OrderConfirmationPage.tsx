import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import InformationStatusOperation from '@shared/ui/information-status-operation/InformationStatusOperation.tsx';
import { OrderSummaryWidget } from '@widgets/order-summary-widget';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';

const OrderConfirmationPage: React.FC = () => {
  useToggleTitle('Order Confirmation');

  return (
    <div className="h-full">
      <Container className="flex flex-col items-center gap-20">
        <InformationStatusOperation
          type="success"
          title="Thank you for your purchase!"
          message="An email will be sent to you with order details."
        />
        <OrderSummaryWidget className="w-full lg:w-225" />
      </Container>
    </div>
  );
};

export default OrderConfirmationPage;
