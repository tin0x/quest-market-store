import { useGetUserQuery } from '@entities/user';

const useFetchProfileInfo = () => {
  const { data, isLoading, isFetching, isError, refetch } = useGetUserQuery();

  return {
    user: data,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};

export default useFetchProfileInfo;
