import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import { parseResponse } from '@shared/lib/utils/parseResponse.ts';
import { type CartDTO, mapCartError } from '@entities/cart';
import { OrderSchema } from '@features/place-an-order/schemas/OrderSchema.ts';
import { mapOrderError } from '@entities/order';
import mapOrder from '@features/place-an-order/mappers/mapOrder.ts';
import type { CreateOrderArgs, Order } from '@features/place-an-order/types.ts';

const orderApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<Order, CreateOrderArgs>({
      async queryFn({ totalPrice, holderName, lastDigitsOfCard, userId }) {
        const { data: order, error: orderError } = await supabase
          .from('orders')
          .insert({
            total_price: totalPrice,
            holder_name: holderName,
            last_digits_of_card: lastDigitsOfCard,
            user_id: userId,
          })
          .eq('user_id', userId)
          .select()
          .single();

        if (orderError) {
          return {
            error: mapOrderError(orderError),
          };
        }

        const orderResponse = parseResponse(OrderSchema, order);

        if ('error' in orderResponse) {
          return orderResponse;
        }

        const { data: cart, error: cartError } = await supabase.from('cart').select('*');

        if (cartError) {
          return {
            error: mapCartError(cartError),
          };
        }

        const itemsToInsert = cart.map((item: CartDTO) => ({
          order_id: orderResponse.data.id,
          game_id: item.game_id,
          title: item.title,
          price: item.price,
          poster: item.poster,
        }));

        const { error: itemsError } = await supabase.from('order_items').insert(itemsToInsert);

        if (itemsError) {
          return {
            error: mapOrderError(itemsError),
          };
        }

        const { error: clearCartError } = await supabase.from('cart').delete().eq('user_id', userId);

        if (clearCartError) {
          return { error: mapCartError(clearCartError) };
        }

        return {
          data: mapOrder(orderResponse.data),
        };
      },
      invalidatesTags: [
        {
          type: 'Order',
          id: 'LIST',
        },
        {
          type: 'Cart',
          id: 'LIST',
        },
      ],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
