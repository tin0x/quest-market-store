import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { useGetWishlistQuery } from '@entities/wishlist/api/wishlistApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import type { ApiError } from '@entities/wishlist/types.ts';
import {
  useAddGameToWishlistMutation,
  useRemoveGameWithWishlistMutation,
} from '@features/toggle-game-status-wishlist/api/wishlistApi.ts';
import type { Game } from '@entities/game';
import { userErrorMessages } from '@entities/user';

const useToggleGameStatusWishlist = (game: Game) => {
  const { session } = useAuth();
  const [addGameToWishlist, { isLoading: isLoadingAdding }] = useAddGameToWishlistMutation();
  const [removeGameWithWishlist, { isLoading: isLoadingRemoving }] = useRemoveGameWithWishlistMutation();
  const { data } = useGetWishlistQuery(session ? { userId: session?.user.id } : skipToken);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isExists = data?.some((current) => current.gameId === game.gameId) ?? false;

  const handleToggleProductStatusWishlist = async () => {
    if (!session) {
      navigate('/login');
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: userErrorMessages.UNAUTHORIZED,
        }),
      );
      return;
    }

    try {
      if (isExists) {
        await removeGameWithWishlist({ userId: session.user.id, gameId: game.gameId }).unwrap();
      } else {
        await addGameToWishlist({ game: { ...game }, userId: session.user.id }).unwrap();
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

export default useToggleGameStatusWishlist;
