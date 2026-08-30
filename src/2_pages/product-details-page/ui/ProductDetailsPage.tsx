import React, { useState } from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { useParams } from 'react-router-dom';
import { useGetGameByIdQuery } from '@entities/game/api/gameApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { GallerySliderWidget } from '@widgets/gallery-slider-widget';
import GameHeaderWidget from '@widgets/game-header-widget/ui/GameHeaderWidget.tsx';
import { generateRandomPrice } from '@entities/game';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetGameByIdQuery(id ? { gameId: Number(id) } : skipToken);
  useToggleTitle(data?.name ?? 'Game');
  const [price] = useState(() => generateRandomPrice(30, 80));

  if (!data) return null;

  const game = {
    id: data.id,
    title: data.name,
    poster: data.cover,
    price: price,
    summary: data.summary,
    gameId: data.id,
  };

  return (
    <div className="h-full">
      <Container>
        <div className="mb-4">
          <h1 className="text-xl text-[40px] font-bold">{data?.name}</h1>
          <span className="text-text-secondary text-[20px] font-bold">${game.price} USD</span>
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-10">
          <GallerySliderWidget
            videoId={data?.videoId ?? ''}
            screenshots={data?.screenshots ?? []}
            cover={data?.cover ?? ''}
          />
          <GameHeaderWidget game={game} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
