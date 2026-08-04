import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import mapCartError from '@features/toggle-cart-item/mappers/mapCartError.ts';
import { parseResponse } from '@shared/lib/utils/parseResponse.ts';
import { CartListSchema } from '@entities/cart/schemas/CartSchemas.ts';
import type { CartResponse } from '@entities/cart/types.ts';
import mapCartWithItems from '@entities/cart/mappers/mapCartWithItems.ts';

export const cartApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getItemsFromCart: builder.query<CartResponse[], void>({
      async queryFn() {
        const { data, error } = await supabase.from('cart').select('*');

        if (error) {
          return {
            error: mapCartError(error),
          };
        }

        const result = parseResponse(CartListSchema, data);

        if ('error' in result) return result;

        return {
          data: result.data.map(mapCartWithItems),
        };
      },
      providesTags: [
        {
          type: 'Cart',
          id: 'LIST',
        },
      ],
    }),
  }),
});

export const { useGetItemsFromCartQuery } = cartApi;
