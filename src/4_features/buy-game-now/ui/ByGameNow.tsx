import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import type { BuyGameNowProps } from '@features/buy-game-now/types.ts';
import useBuyGameNow from '@features/buy-game-now/model/useBuyGameNow.ts';

const BuyItemNow: React.FC<BuyGameNowProps> = ({ game }) => {
  const { isLoading, handleBuyItemNow } = useBuyGameNow(game);

  return <Button className="text-xl" variant="accent" text="Buy Now" disabled={isLoading} onClick={handleBuyItemNow} />;
};

export default BuyItemNow;
