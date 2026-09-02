import { useAppSelector } from '@shared/hooks/redux/useAppSelector.ts';
import { getCartItems } from '@features/toggle-cart-item/model/selectors.ts';
import { useNavigate } from 'react-router-dom';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import type { ApiError } from '@shared/api/error/types.ts';
import type { Game } from '@entities/game';
import { useAddToCartMutation } from '@features/toggle-cart-item';
import { userErrorMessages } from '@entities/user';

const useBuyGameNow = (game: Game) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const { data } = useAppSelector(getCartItems);
  const navigate = useNavigate();
  const { session } = useAuth();
  const dispatch = useAppDispatch();

  const exists = data?.some((current) => current.gameId === game.gameId);

  const handleBuyItemNow = async () => {
    if (!session) {
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: userErrorMessages.UNAUTHORIZED,
        }),
      );
      navigate('/login');
      return;
    }

    if (exists) {
      navigate('/cart');
      return;
    }

    try {
      await addToCart({ game, userId: session.user.id });
      navigate('/cart');
    } catch (error) {
      const ApiError = error as ApiError;
      dispatch(showToast({ type: 'failed', title: 'Failed', message: ApiError.data.message }));
    }
  };

  return { isLoading, handleBuyItemNow };
};

export default useBuyGameNow;
