import type { Session } from '@supabase/supabase-js';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetItemsFromCartQuery } from '@entities/cart';

export const useFetchGameCart = (session: Session | null) => {
  const { data, isLoading, isFetching, refetch } = useGetItemsFromCartQuery(session ? undefined : skipToken);

  return {
    games: data || [],
    isEmpty: data?.length === 0,
    isLoading: isLoading || isFetching,
    refetch,
  };
};
