import type { Product } from '@features/toggle-product-status-wishlist/types.ts';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import {
  useAddItemToWishlistMutation,
  useRemoveItemWithWishlistMutation,
} from '@features/toggle-product-status-wishlist/api/wishlistApi.ts';
import { useGetWishlistQuery } from '@entities/wishlist/api/wishlistApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import type { ApiError } from '@entities/wishlist/types.ts';

const useToggleProductStatusWishlist = (product: Product) => {
  const { session } = useAuth();
  const [addProductToWishlist, { isLoading: isLoadingAdding }] = useAddItemToWishlistMutation();
  const [removeProductWithWishlist, { isLoading: isLoadingRemoving }] = useRemoveItemWithWishlistMutation();
  const { data } = useGetWishlistQuery(session ? { userId: session?.user.id } : skipToken);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isExists = data?.some((current) => current.gameId === product.gameId) ?? false;

  const handleToggleProductStatusWishlist = async () => {
    if (!session) {
      navigate('/login');
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: appErrorMessages.UNAUTHORIZED,
        }),
      );
      return;
    }

    try {
      if (isExists) {
        await removeProductWithWishlist({ userId: session.user.id, gameId: product.gameId }).unwrap();
      } else {
        await addProductToWishlist({ product: { ...product }, userId: session.user.id }).unwrap();
      }
    } catch (error) {
      const apiError = error as ApiError;
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: apiError.data.message,
        }),
      );
    }
  };

  return { isExists, isLoading: isLoadingAdding || isLoadingRemoving, handleToggleProductStatusWishlist };
};

export default useToggleProductStatusWishlist;
