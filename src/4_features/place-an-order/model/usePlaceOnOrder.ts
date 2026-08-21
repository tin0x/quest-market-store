import type { PlaceAnOrderForm } from '@features/place-an-order/schemas/PlaceAnOrderSchema.ts';
import { useCreateOrderMutation } from '@features/place-an-order/api/orderApi.ts';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { calculateTotalCost, useGetItemsFromCartQuery } from '@entities/cart';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import { useNavigate } from 'react-router-dom';
import type { ApiError } from '@entities/order';

const usePlaceOnOrder = () => {
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const { data: cartList } = useGetItemsFromCartQuery();
  const { session } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: PlaceAnOrderForm) => {
    if (!session) {
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: appErrorMessages.UNAUTHORIZED,
        }),
      );
      navigate('/login', { replace: true });
      return;
    }

    const { cardHolderName, cardNumber } = data;
    const formattedName = cardHolderName.trim().replace(/\s+/g, ' ');
    const formattedCardNumber = Number(cardNumber.slice(-4));
    const totalPrice = cartList ? Number(calculateTotalCost(cartList).toFixed(2)) : 0;

    try {
      const response = await createOrder({
        totalPrice: totalPrice,
        userId: session?.user.id,
        holderName: formattedName,
        lastDigitsOfCard: formattedCardNumber,
      }).unwrap();
      navigate(`/order-confirmation/${response.id}`, { replace: true });
      return;
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

  return { onSubmit, isLoading };
};

export default usePlaceOnOrder;
