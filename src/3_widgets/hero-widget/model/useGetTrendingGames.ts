import { useGetGamesSlidesQuery } from '@entities/game/api/gameSlidesApi.ts';
import { useCallback, useEffect, useState } from 'react';

export const useGetTrendingGames = () => {
  const { data, isLoading, isFetching, isError } = useGetGamesSlidesQuery({ ordering: '-added' });

  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSelectSlideIndex = useCallback((index: number) => {
    setSelectedSlide(index);
  }, []);

  useEffect(() => {
    if (data?.results) {
      data?.results.forEach((game) => {
        const img = new Image();

        if (game.cover) img.src = game.cover;
      });
    }
  }, [data?.results]);

  return {
    games: data?.results ?? [],
    isEmpty: data?.results?.length === 0,
    isLoading: isLoading || isFetching,
    isError,
    selectedSlide,
    handleSelectSlideIndex,
  };
};
