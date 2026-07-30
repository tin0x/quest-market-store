import { useAddToCartMutation } from '@features/add-to-cart/api/cartApi.ts';
import type { ApiError } from '@shared/api/error/types.ts';
import type { Product } from '@features/add-to-cart/types.ts';
import { useNavigate } from 'react-router-dom';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { errorMessages } from '@shared/api/error/constants.ts';

export const useAddToCart = () => {
  const { user } = useAuth();
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddToCart = async (product: Product) => {
    if (!user) {
      dispatch(
        showToast({
          title: 'Failed',
          message: errorMessages.UNAUTHORIZED,
          type: 'failed',
        }),
      );
      navigate('/login');
      return;
    }

    try {
      await addToCart({ ...product, userId: user.id }).unwrap();
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

  return { isLoading, handleAddToCart };
};
