import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import type { AddToCartArgs } from '@features/add-to-cart/types.ts';
import mapCartError from '@features/add-to-cart/mappers/mapCartError.ts';

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
  }),
});

export const { useAddToCartMutation } = cartApi;
