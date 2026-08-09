import type { Session } from '@supabase/supabase-js';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetItemsFromCartQuery } from '@entities/cart';

export const useFetchProductCart = (session: Session | null) => {
  const { data, isLoading, isFetching, refetch } = useGetItemsFromCartQuery(session ? undefined : skipToken);

  return {
    products: data || [],
    isEmpty: data?.length === 0,
    isLoading: isLoading || isFetching,
    refetch,
  };
};
