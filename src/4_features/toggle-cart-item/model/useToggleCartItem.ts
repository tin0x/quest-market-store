import type { ApiError } from '@shared/api/error/types.ts';
import { useNavigate } from 'react-router-dom';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { useAddToCartMutation, useRemoveFromCartMutation } from '@features/toggle-cart-item/api/cartApi.ts';
import { useAppSelector } from '@shared/hooks/redux/useAppSelector.ts';
import { getCartItems } from '@features/toggle-cart-item/model/selectors.ts';
import { useEffect, useState } from 'react';
import type { Game } from '@entities/game';
import { userErrorMessages } from '@entities/user';

export const useToggleCartItem = (game: Game) => {
  const { session } = useAuth();
  const { data } = useAppSelector(getCartItems);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isExists, setIsExist] = useState(false);

  const [addToCart, { isLoading: isLoadingAdding }] = useAddToCartMutation();
  const [removeFromCart, { isLoading: isLoadingRemoving }] = useRemoveFromCartMutation();

  useEffect(() => {
    const isExists = data?.some((current) => current.gameId === game?.gameId) ?? false;

    setTimeout(() => {
      setIsExist(isExists);
    }, 0);
  }, [data, game.gameId]);

  const handleToggleCartItem = async () => {
    if (!session) {
      dispatch(
        showToast({
          title: 'Failed',
          message: userErrorMessages.UNAUTHORIZED,
          type: 'failed',
        }),
      );
      navigate('/login');
      return;
    }

    try {
      if (isExists) {
        await removeFromCart({ gameId: game.gameId, userId: session.user.id }).unwrap();
        return;
      }
      await addToCart({ game, userId: session.user.id }).unwrap();
    } catch (error) {
      const apiError = error as ApiError;
      dispatch(
        showToast({
          title: 'Failed',
          message: apiError.data.message,
          type: 'failed',
        }),
      );
    }
  };

  return { isLoading: isLoadingAdding || isLoadingRemoving, isExists, handleToggleCartItem };
};
