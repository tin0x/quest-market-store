import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import type { AddToCartArgs, RemoveFromCartArgs } from '@features/toggle-cart-item/types.ts';
import mapCartError from '@features/toggle-cart-item/mappers/mapCartError.ts';

const cartApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation<void, AddToCartArgs>({
      async queryFn({ title, price, poster, gameId, userId }) {
        const { error } = await supabase.from('cart').insert({
          title,
          price,
          poster,
          user_id: userId,
          game_id: gameId,
        });

        if (error) {
          return {
            error: mapCartError(error),
          };
        }

        return {
          data: undefined,
        };
      },
      invalidatesTags: [
        {
          type: 'Cart',
          id: 'LIST',
        },
      ],
    }),
    removeFromCart: builder.mutation<void, RemoveFromCartArgs>({
      async queryFn({ productId, userId }) {
        const { error } = await supabase.from('cart').delete().eq('game_id', productId).eq('user_id', userId);

        if (error) {
          return {
            error: mapCartError(error),
          };
        }

        return {
          data: undefined,
        };
      },
      invalidatesTags: [
        {
          type: 'Cart',
          id: 'LIST',
        },
      ],
    }),
  }),
});

export const { useAddToCartMutation, useRemoveFromCartMutation } = cartApi;
