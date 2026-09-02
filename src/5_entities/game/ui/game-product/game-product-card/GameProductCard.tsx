import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@shared/ui/card/Card.tsx';
import Image from '@shared/ui/image/Image.tsx';
import type { GameProductCardProps } from '@entities/game/types.ts';

const GameProductCard: React.FC<GameProductCardProps> = ({ pathTo, poster, title, price }) => {
  return (
    <Link className="group h-full" to={pathTo}>
      <Card className="h-full overflow-hidden" variant="surface">
        <div className="w-full overflow-hidden">
          <Image
            className="rounded-none rounded-t-md duration-300 ease-in-out group-hover:scale-110"
            source={poster}
            alt={title}
            type="game"
          />
        </div>
        <div className="px-4 py-6 text-[18px]">
          <p className="font-bold">{title}</p>
          <span className="text-text-secondary">{price ? `$${price}` : ''}</span>
        </div>
      </Card>
    </Link>
  );
};

export default GameProductCard;
