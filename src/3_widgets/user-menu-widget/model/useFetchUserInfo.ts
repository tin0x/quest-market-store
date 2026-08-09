import { useGetUserQuery } from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query';
import type { Session } from '@supabase/supabase-js';

export const useFetchUserInfo = (session: Session | null) => {
  const { data, isLoading, isFetching, refetch } = useGetUserQuery(session ? undefined : skipToken);

  return {
    user: data,
    isLoading: isFetching || isLoading,
    refetch,
  };
};
