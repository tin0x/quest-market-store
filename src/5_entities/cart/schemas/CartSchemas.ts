import { z } from 'zod';

const CartSchema = z.object({
  id: z.number(),
  user_id: z.string(),
  title: z.string(),
  price: z.number(),
  poster: z.string().nullish(),
  created_at: z.string(),
  game_id: z.number(),
});

export const CartListSchema = z.array(CartSchema);

export type CartDTO = z.infer<typeof CartSchema>;
