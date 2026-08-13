import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import type { AddToCartArgs, RemoveFromCartArgs } from '@features/toggle-cart-item/types.ts';
import mapCartError from '@features/toggle-cart-item/mappers/mapCartError.ts';

const cartApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation<void, AddToCartArgs>({
      async queryFn({ game, userId }) {
        const { error } = await supabase.from('cart').insert({
          title: game.title,
          price: game.price,
          poster: game.poster,
          summary: game.summary,
          game_id: game.gameId,
          user_id: userId,
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
      async queryFn({ gameId, userId }) {
        const { error } = await supabase.from('cart').delete().eq('game_id', gameId).eq('user_id', userId);

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
