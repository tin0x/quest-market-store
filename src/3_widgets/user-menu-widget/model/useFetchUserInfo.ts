import { useGetUserQuery } from '@entities/user';

export const useFetchUserInfo = () => {
  const { data, isLoading, isFetching, refetch } = useGetUserQuery();

  return {
    user: data,
    isLoading: isFetching || isLoading,
    refetch,
  };
};
