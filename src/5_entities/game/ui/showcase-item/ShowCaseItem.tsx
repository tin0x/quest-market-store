import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import type { ShowCaseItemProps } from '@entities/game/types.ts';

const ShowCaseItem: React.FC<ShowCaseItemProps> = ({ subtitle, src, text }) => {
  return (
    <div className="flex flex-col gap-5">
      {subtitle && <span className="block">{subtitle}</span>}
      {src && <Image source={src} type="game" alt="game-screenshot" />}
      <div className="text-text-secondary text-justify text-[18px]">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ShowCaseItem;
