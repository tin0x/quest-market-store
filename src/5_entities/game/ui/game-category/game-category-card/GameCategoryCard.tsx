import React from 'react';
import { Link } from 'react-router-dom';
import type { GameCategoryCardProps } from '@entities/game/types.ts';

const GameCategoryCard: React.FC<GameCategoryCardProps> = ({ heroImage, cover, genre, pathTo }) => {
  return (
    <Link className="group relative block h-full w-full" to={pathTo}>
      <div
        className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-cover bg-no-repeat group-hover:shadow-[0px_0px_30px_10px_#ffffff]"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <span className="ml-50 text-[30px] font-bold transition-transform duration-400 group-hover:scale-110">
          {genre}
        </span>
        <img
          className="absolute bottom-0 -left-15 z-50 transition-all duration-400 group-hover:bottom-2 group-hover:-left-20"
          src={heroImage}
          alt={genre}
        />
      </div>
    </Link>
  );
};

export default GameCategoryCard;
