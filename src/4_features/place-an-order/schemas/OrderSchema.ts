import { z } from 'zod';

export const OrderSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  total_price: z.number(),
  created_at: z.string(),
  holder_name: z.string(),
  last_digits_of_card: z.number(),
});

export type OrderDTO = z.infer<typeof OrderSchema>;
