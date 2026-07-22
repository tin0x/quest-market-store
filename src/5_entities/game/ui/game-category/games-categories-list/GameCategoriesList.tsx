import React from 'react';
import { gamesCategories } from '@entities/game/ui/game-category/constants.ts';
import GameCategoryCard from '@entities/game/ui/game-category/game-category-card/GameCategoryCard.tsx';

const GameCategoriesList: React.FC = () => {
  return (
    <ul className="grid grid-cols-2 gap-22.5">
      {gamesCategories.map((gameCategory) => (
        <li className="aspect-video" key={gameCategory.genre}>
          <GameCategoryCard
            pathTo={gameCategory.pathTo}
            genre={gameCategory.genre}
            heroImage={gameCategory.heroImage}
            cover={gameCategory.cover}
          />
        </li>
      ))}
    </ul>
  );
};

export default GameCategoriesList;
