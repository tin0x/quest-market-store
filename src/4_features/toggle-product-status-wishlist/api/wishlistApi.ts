import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import type {
  AddItemToWishlistArgs,
  RemoveItemFromWishlistArgs,
} from '@features/toggle-product-status-wishlist/types.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import mapWishlistError from '@entities/wishlist/mappers/mapWishlistError.ts';

const wishlistApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addItemToWishlist: builder.mutation<void, AddItemToWishlistArgs>({
      async queryFn({ product, userId }) {
        const { error } = await supabase
          .from('wishlist')
          .insert({
            title: product.title,
            poster: product.poster,
            game_id: product.gameId,
            summary: product.summary,
            price: 50.99,
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
    removeItemWithWishlist: builder.mutation<void, RemoveItemFromWishlistArgs>({
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

export const { useAddItemToWishlistMutation, useRemoveItemWithWishlistMutation } = wishlistApi;
