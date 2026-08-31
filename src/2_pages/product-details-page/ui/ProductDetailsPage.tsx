import React, { useState } from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { useParams } from 'react-router-dom';
import { useGetGameByIdQuery } from '@entities/game/api/gameApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { GallerySliderWidget } from '@widgets/gallery-slider-widget';
import GameHeaderWidget from '@widgets/game-header-widget/ui/GameHeaderWidget.tsx';
import { generateRandomPrice } from '@entities/game';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [price] = useState(() => generateRandomPrice(30, 80));
  const { data, isLoading, isError, refetch } = useGetGameByIdQuery(id ? { gameId: Number(id) } : skipToken);
  useToggleTitle(data?.name ?? 'Game');

  const game = data
    ? {
        id: data.id,
        title: data.name,
        poster: data.cover,
        price,
        summary: data.summary,
        gameId: data.id,
      }
    : null;

  return (
    <div className="h-full">
      <Container>
        {isLoading ? (
          <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
            <div className="mb-4 w-1/2">
              <Skeleton count={1.5} height={30} />
            </div>
          </SkeletonTheme>
        ) : (
          <div className="mb-4">
            <h1 className="text-xl text-[40px] font-bold">{data?.name}</h1>
            <span className="text-text-secondary text-[20px] font-bold">${price} USD</span>
          </div>
        )}
        <div className="grid grid-cols-[2fr_1fr] gap-10">
          <GallerySliderWidget
            videoId={data?.videoId ?? null}
            screenshots={data?.screenshots ?? []}
            cover={data?.cover}
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
          />
          <GameHeaderWidget game={game} isLoading={isLoading} isError={isError} refetch={refetch} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
