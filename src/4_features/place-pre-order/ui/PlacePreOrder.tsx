import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import type { PlacePreOrderProps } from '@features/place-pre-order/types.ts';

const PlacePreOrder: React.FC<PlacePreOrderProps> = ({ id }) => {
  return <Button text="Pre-Order" type="button" variant="accent" onClick={() => console.log(id)} />;
};

export default PlacePreOrder;
