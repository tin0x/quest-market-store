import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { useParams } from 'react-router-dom';
import { useGetGameByIdQuery } from '@entities/game/api/gameApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetGameByIdQuery(id ? { gameId: Number(id) } : skipToken);
  useToggleTitle(data?.name ?? 'Game');

  return (
    <div>
      <Container>Page</Container>
    </div>
  );
};

export default ProductDetailsPage;
