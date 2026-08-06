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
import { useEffect, useState } from 'react';

export const useToggleCartItem = (product: Product) => {
  const { session } = useAuth();
  const { data } = useAppSelector(getCartItems);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isExists, setIsExist] = useState(false);

  const [addToCart, { isLoading: isLoadingAdding }] = useAddToCartMutation();
  const [removeFromCart, { isLoading: isLoadingRemoving }] = useRemoveFromCartMutation();

  useEffect(() => {
    const isExists = data?.some((current) => current.gameId === product?.gameId) ?? false;

    setTimeout(() => {
      setIsExist(isExists);
    }, 0);
  }, [data, product.gameId]);

  const handleToggleCartItem = async () => {
    if (!session) {
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
      if (isExists) {
        await removeFromCart({ productId: product.gameId, userId: session.user.id }).unwrap();
        return;
      }
      await addToCart({ ...product, userId: session.user.id }).unwrap();
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
