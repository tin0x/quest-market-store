import { useGetGameListQuery } from '@entities/game/api/gameApi.ts';
import type { OrderingType } from '@widgets/slider-widget/types.ts';

export const useFetchGamesSlides = (ordering: OrderingType) => {
  const { data, isLoading, isFetching, isError, refetch } = useGetGameListQuery({ ordering });

  return {
    slides: data?.results || [],
    isEmpty: data?.results?.length === 0,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
