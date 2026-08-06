import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import type { BuyItemNowProps } from '@features/buy-item-now/types.ts';
import useBuyItemNow from '@features/buy-item-now/model/useBuyItemNow.ts';

const BuyItemNow: React.FC<BuyItemNowProps> = ({ product }) => {
  const { isLoading, handleBuyItemNow } = useBuyItemNow(product);

  return <Button className="text-xl" variant="accent" text="Buy Now" disabled={isLoading} onClick={handleBuyItemNow} />;
};

export default BuyItemNow;
