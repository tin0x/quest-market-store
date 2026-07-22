import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import Title from '@shared/ui/title/Title.tsx';
import Button from '@shared/ui/button/Button.tsx';
import type { OfferCardProps } from '@shared/ui/offer-card/types.ts';

const OfferCard: React.FC<OfferCardProps> = ({ image, title, text, pathTo }) => {
  return (
    <div className="flex h-full w-full flex-col bg-transparent">
      <div className="flex h-full flex-col gap-10">
        <div className="w-full">
          <Image source={image} type="game" alt={title} />
        </div>
        <div>
          <Title className="text-[24px]" type="secondary">
            {title}
          </Title>
          <p className="text-text-secondary mt-4 text-[18px]">{text}</p>
        </div>
        <Button className="mt-auto text-[18px]" text="Browse" variant="dark" asLink pathTo={pathTo} />
      </div>
    </div>
  );
};

export default OfferCard;
