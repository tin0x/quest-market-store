import React from 'react';
import { gameOffers } from '@entities/game/ui/game-offer/constants.ts';
import GameOfferItem from '@entities/game/ui/game-offer/game-offer-item/GameOfferItem.tsx';

const GameOfferList: React.FC = () => {
  return (
    <ul className="flex justify-between gap-17.5">
      {gameOffers.map((offer, i) => (
        <li className="flex flex-1" key={i}>
          <GameOfferItem text={offer.text} title={offer.title} image={offer.image} pathTo={offer.pathTo} />
        </li>
      ))}
    </ul>
  );
};

export default GameOfferList;
