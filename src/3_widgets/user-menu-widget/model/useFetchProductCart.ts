import type { Session } from '@supabase/supabase-js';
import { useGetItemsFromCartQuery } from '@entities/cart/api/cartApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';

export const useFetchProductCart = (session: Session | null) => {
  const { data, isLoading, isFetching, refetch } = useGetItemsFromCartQuery(session ? undefined : skipToken);

  return {
    products: data || [],
    isEmpty: data?.length === 0,
    isLoading: isLoading || isFetching,
    refetch,
  };
};
