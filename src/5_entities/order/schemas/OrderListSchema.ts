import { z } from 'zod';

const OrderListItemSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  total_price: z.number(),
  created_at: z.string(),
  order_items: z.array(
    z.object({
      game_id: z.number(),
      title: z.string(),
      price: z.number(),
      poster: z.string(),
    }),
  ),
});

export const OrderListSchema = z.array(OrderListItemSchema);
export type OrderListDTO = z.infer<typeof OrderListItemSchema>;
