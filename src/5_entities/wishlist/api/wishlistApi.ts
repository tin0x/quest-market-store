import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import mapWishlistError from '@entities/wishlist/mappers/mapWishlistError.ts';
import { parseResponse } from '@shared/lib/utils/parseResponse.ts';
import { WishlistResponseSchema } from '@entities/wishlist/schemas/WishlistSchema.ts';
import mapWishlist from '@entities/wishlist/mappers/mapWishlist.ts';
import type { GetWishlistArgs, Wishlist } from '@entities/wishlist/types.ts';

const wishlistApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query<Wishlist[], GetWishlistArgs>({
      async queryFn({ userId }) {
        const { data, error } = await supabase.from('wishlist').select('*').eq('user_id', userId);

        if (error) {
          return {
            error: mapWishlistError(error),
          };
        }

        const result = parseResponse(WishlistResponseSchema, data);

        if ('error' in result) return result;

        return {
          data: result.data.map(mapWishlist),
        };
      },
      providesTags: [
        {
          type: 'Wishlist',
          id: 'LIST',
        },
      ],
    }),
  }),
});

export const { useGetWishlistQuery } = wishlistApi;
