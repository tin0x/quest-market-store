import { useGetGamesSlidesQuery } from '@entities/game/api/gameSlidesApi.ts';
import { splitIntoChunks } from '@shared/lib/utils/splitIntoChunks.ts';

export const useFetchGamesSlides = () => {
  const { data, isLoading, isFetching, isError, refetch } = useGetGamesSlidesQuery();

  return {
    slides: splitIntoChunks(data?.results || [], 3),
    isEmpty: data?.results?.length === 0,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
