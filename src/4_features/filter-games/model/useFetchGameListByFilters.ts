import { useSearchParams } from 'react-router-dom';
import { useGetGameListWithPaginationQuery } from '@entities/game/api/gameApi.ts';

const useFetchGameListByFilters = (limit: number, offset: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {} = useGetGameListWithPaginationQuery({ limit, offset });

  return {};
};

export default useFetchGameListByFilters;
