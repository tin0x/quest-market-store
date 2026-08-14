import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import type { AddGameToWishlistArgs, RemoveGameFromWishlistArgs } from '@features/toggle-game-status-wishlist/types.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import mapWishlistError from '@entities/wishlist/mappers/mapWishlistError.ts';

const wishlistApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addGameToWishlist: builder.mutation<void, AddGameToWishlistArgs>({
      async queryFn({ game, userId }) {
        const { error } = await supabase
          .from('wishlist')
          .insert({
            title: game.title,
            poster: game.poster,
            game_id: game.gameId,
            summary: game.summary,
            price: game.price,
            user_id: userId,
          })
          .eq('user_id', userId);

        if (error) {
          return {
            error: mapWishlistError(error),
          };
        }

        return {
          data: undefined,
        };
      },
      invalidatesTags: [
        {
          type: 'Wishlist',
          id: 'LIST',
        },
      ],
    }),
    removeGameWithWishlist: builder.mutation<void, RemoveGameFromWishlistArgs>({
      async queryFn({ userId, gameId }) {
        const { error } = await supabase.from('wishlist').delete().eq('game_id', gameId).eq('user_id', userId);

        if (error) {
          return {
            error: mapWishlistError(error),
          };
        }

        return {
          data: undefined,
        };
      },
      invalidatesTags: [
        {
          type: 'Wishlist',
          id: 'LIST',
        },
      ],
    }),
  }),
});

export const { useAddGameToWishlistMutation, useRemoveGameWithWishlistMutation } = wishlistApi;
