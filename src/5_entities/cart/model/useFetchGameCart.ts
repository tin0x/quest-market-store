import { useGetItemsFromCartQuery } from '@entities/cart';

export const useFetchGameCart = () => {
  const { data, isLoading, isError, refetch } = useGetItemsFromCartQuery();

  return {
    games: data || [],
    isEmpty: data?.length === 0,
    isLoading: isLoading,
    isError,
    refetch,
  };
};
