import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import OrderSummaryWidget from '@widgets/order-summary-widget/ui/OrderSummaryWidget.tsx';
import InformationStatusOperation from '@shared/ui/information-status-operation/InformationStatusOperation.tsx';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="h-full">
      <Container className="flex flex-col items-center gap-20">
        <InformationStatusOperation
          type="success"
          title="Thank you for your purchase!"
          message="An email will be sent to you with order details."
        />
        <OrderSummaryWidget className="w-225" />
      </Container>
    </div>
  );
};

export default OrderConfirmationPage;
