import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { useParams } from 'react-router-dom';
import { useGetGameByIdQuery } from '@entities/game/api/gameApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { GallerySliderWidget } from '@widgets/gallery-slider-widget';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetGameByIdQuery(id ? { gameId: Number(id) } : skipToken);
  useToggleTitle(data?.name ?? 'Game');

  return (
    <div>
      <Container>
        <GallerySliderWidget
          videoId={data?.videoId ?? ''}
          screenshots={data?.screenshots ?? []}
          cover={data?.cover ?? ''}
        />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
