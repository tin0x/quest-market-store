import { useGetWishlistQuery } from '@entities/wishlist';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { skipToken } from '@reduxjs/toolkit/query';

const useFetchWishlist = () => {
  const { session } = useAuth();
  const { data, isLoading, isError, refetch } = useGetWishlistQuery(session ? { userId: session.user.id } : skipToken);

  return { wishlist: data || [], isEmpty: data?.length === 0, isLoading, isError, refetch };
};

export default useFetchWishlist;
