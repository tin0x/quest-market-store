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
    }),
    removeFromCart: builder.mutation<void, RemoveFromCartArgs>({
      async queryFn({ productId }) {
        const { error } = await supabase.from('cart').delete().eq('game_id', productId);

        if (error) {
          return {
            error: mapCartError(error),
          };
        }

        return {
          data: undefined,
        };
      },
    }),
  }),
});

export const { useAddToCartMutation, useRemoveFromCartMutation } = cartApi;
