import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import mapOrderError from '@entities/order/mappers/mapOrderError.ts';
import type { GetOrderByIdArgs, GetOrderListArgs, OrderById, OrderList } from '@entities/order/types.ts';
import { parseResponse } from '@shared/lib/utils/parseResponse.ts';
import { OrderListOfGameSchema } from '@entities/order/schemas/OrderListOfGameSchema.ts';
import { OrderListSchema } from '@entities/order/schemas/OrderListSchema.ts';
import mapOrderList from '@entities/order/mappers/mapOrderList.ts';
import mapOrderById from '@entities/order/mappers/mapOrderById.ts';

const orderApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrderById: builder.query<OrderById, GetOrderByIdArgs>({
      async queryFn({ orderId }) {
        const { data, error } = await supabase
          .from('orders')
          .select(`id, user_id, total_price, created_at, order_items ( game_id, title, price, poster)`)
          .eq('id', orderId)
          .single();

        if (error) {
          return {
            error: mapOrderError(error),
          };
        }

        const response = parseResponse(OrderListOfGameSchema, data);

        if ('error' in response) {
          return response;
        }

        return {
          data: mapOrderById(response.data),
        };
      },
    }),
    getOrderList: builder.query<OrderList[], GetOrderListArgs>({
      async queryFn({ userId }) {
        const { data, error } = await supabase.from('orders').select().eq('user_id', userId);

        if (error) {
          return {
            error: mapOrderError(error),
          };
        }

        const response = parseResponse(OrderListSchema, data);

        if ('error' in response) return response;

        return {
          data: response.data.map(mapOrderList),
        };
      },
      providesTags: [
        {
          type: 'Order',
          id: 'LIST',
        },
      ],
    }),
  }),
});

export const { useGetOrderByIdQuery, useGetOrderListQuery } = orderApi;
