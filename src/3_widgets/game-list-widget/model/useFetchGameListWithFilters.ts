import { useGetGameListWithPaginationQuery } from '@entities/game/api/gameApi.ts';
import { useSearchParams } from 'react-router-dom';

const useFetchGameListWithFilters = (limit: number, offset: number) => {
  const [searchParams] = useSearchParams();

  const { data, isLoading, isFetching, isError } = useGetGameListWithPaginationQuery({
    limit,
    offset,
    searchParams: searchParams.toString(),
  });

  return {
    gameList: data?.results,
    hasMore: data?.hasMore,
    isLoading,
    isFetching,
    isError,
  };
};

export default useFetchGameListWithFilters;
