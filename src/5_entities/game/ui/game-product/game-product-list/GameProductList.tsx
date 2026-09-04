import React from 'react';
import type { GameProductListProps } from '@entities/game/types.ts';
import GameProductCard from '@entities/game/ui/game-product/game-product-card/GameProductCard.tsx';

const GameProductList: React.FC<GameProductListProps> = ({ gameList }) => {
  return (
    <ul className="grid grid-cols-1 items-stretch gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {gameList.map((game) => (
        <li key={game.gameId}>
          <GameProductCard
            title={game.title}
            poster={game.poster || ''}
            pathTo={`/game/${game.id}`}
            price={game?.price}
          />
        </li>
      ))}
    </ul>
  );
};

export default GameProductList;
