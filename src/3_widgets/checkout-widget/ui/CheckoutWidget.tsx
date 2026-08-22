import React from 'react';
import { PlaceAnOrder } from '@features/place-an-order';
import { useFetchGameCart } from '@entities/cart';
import Button from '@shared/ui/button/Button.tsx';

const CheckoutWidget: React.FC = () => {
  const { games, isLoading, isError, isEmpty, refetch } = useFetchGameCart();

  return (
    <section className="flex justify-between gap-11">
      <PlaceAnOrder
        className="flex-2"
        games={games}
        orderStates={{
          isLoading,
          isError,
          isEmpty,
          refetch,
        }}
        renderAction={(isValid: boolean, isLoading: boolean) => (
          <Button type="submit" text="Confirm Payment" disabled={!isValid || isLoading} variant="dark" />
        )}
      />
    </section>
  );
};

export default CheckoutWidget;
