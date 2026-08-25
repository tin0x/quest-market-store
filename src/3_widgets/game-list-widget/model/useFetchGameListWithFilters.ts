import { useGetGameListWithPaginationQuery } from '@entities/game/api/gameApi.ts';

const useFetchGameListWithFilters = (limit: number, offset: number) => {
  const { data, isLoading, isFetching, isError } = useGetGameListWithPaginationQuery({ limit, offset });

  return {
    gameList: data?.results,
    isLoading,
    isFetching,
    isError,
  };
};

export default useFetchGameListWithFilters;
