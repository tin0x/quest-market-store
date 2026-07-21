import { useGetGamesSlidesQuery } from '@entities/game/api/gameSlidesApi.ts';
import type { OrderingGames } from '@widgets/slider-widget/types.ts';

export const useFetchGamesSlides = (ordering: OrderingGames) => {
  const { data, isLoading, isFetching, isError, refetch } = useGetGamesSlidesQuery({ ordering });

  return {
    slides: data?.results,
    isEmpty: data?.results.length === 0,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
