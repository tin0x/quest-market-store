import { useGetGamesSlidesQuery } from '@entities/game/api/gameSlidesApi.ts';
import { useEffect, useState } from 'react';

export const useGetTrendingGames = () => {
  const { data, isLoading, isFetching, isError, refetch } = useGetGamesSlidesQuery({ ordering: 'topRated' });

  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSelectSlideIndex = (index: number) => {
    setSelectedSlide(index);
  };

  useEffect(() => {
    if (data?.results) {
      data?.results.forEach((game) => {
        const img = new Image();

        if (game.poster) img.src = game.poster;
      });
    }
  }, [data?.results]);

  return {
    games: data?.results ?? [],
    isEmpty: data?.results?.length === 0,
    isLoading: isLoading || isFetching,
    isError,
    selectedSlide,
    refetch,
    handleSelectSlideIndex,
  };
};
