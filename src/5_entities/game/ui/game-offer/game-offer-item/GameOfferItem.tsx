import React from 'react';
import OfferCard from '@shared/ui/offer-card/OfferCard.tsx';
import type { GameOfferItemProps } from '@entities/game/ui/game-offer/types.ts';

const GameOfferItem: React.FC<GameOfferItemProps> = ({ image, title, text, pathTo }) => {
  return <OfferCard pathTo={pathTo} image={image} title={title} text={text} />;
};

export default GameOfferItem;
