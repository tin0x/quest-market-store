import { useAppSelector } from '@shared/hooks/redux/useAppSelector.ts';
import { getCartItems } from '@features/toggle-cart-item/model/selectors.ts';
import type { Product } from '@features/buy-item-now/types.ts';
import { useNavigate } from 'react-router-dom';
import { useAddToCartMutation } from '@features/toggle-cart-item/api/cartApi.ts';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import type { ApiError } from '@shared/api/error/types.ts';
import { errorMessages } from '@shared/api/error/constants.ts';

const useBuyItemNow = (product: Product) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const { data } = useAppSelector(getCartItems);
  const navigate = useNavigate();
  const { session } = useAuth();
  const dispatch = useAppDispatch();

  const exists = data?.some((current) => current.gameId === product.gameId);

  const handleBuyItemNow = async () => {
    if (!session) {
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: errorMessages.UNAUTHORIZED,
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
      await addToCart({ ...product, userId: session.user.id });
      navigate('/cart');
    } catch (error) {
      const ApiError = error as ApiError;
      dispatch(showToast({ type: 'failed', title: 'Failed', message: ApiError.data.message }));
    }
  };

  return { isLoading, handleBuyItemNow };
};

export default useBuyItemNow;
