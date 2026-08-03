import type { ApiError } from '@shared/api/error/types.ts';
import type { Product } from '@features/toggle-cart-item/types.ts';
import { useNavigate } from 'react-router-dom';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { errorMessages } from '@shared/api/error/constants.ts';
import { useAddToCartMutation, useRemoveFromCartMutation } from '@features/toggle-cart-item/api/cartApi.ts';
import { useAppSelector } from '@shared/hooks/redux/useAppSelector.ts';
import { getCartItems } from '@features/toggle-cart-item/model/selectors.ts';
import { useState } from 'react';

export const useToggleCartItem = () => {
  const { user } = useAuth();
  const { data } = useAppSelector(getCartItems);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isExist, setIsExist] = useState(false);

  const [addToCart, { isLoading }] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  const handleToggleCartItem = async (product: Product) => {
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

    const isExists = data?.some((current) => current.gameId === product.gameId);

    try {
      if (isExists) {
        await removeFromCart({ productId: product.gameId }).unwrap();
        setIsExist(false);
        return;
      }
      await addToCart({ ...product, userId: user.id }).unwrap();
      setIsExist(true);
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

  return { isLoading, isExist, handleToggleCartItem };
};
