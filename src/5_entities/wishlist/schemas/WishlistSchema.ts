import { z } from 'zod';

const WishlistSchema = z.object({
  id: z.number(),
  user_id: z.string(),
  title: z.string(),
  price: z.number(),
  poster: z.string().nullish(),
  created_at: z.string(),
  game_id: z.number(),
  summary: z.string().nullish(),
});

export const WishlistResponseSchema = z.array(WishlistSchema);

export type WishlistDTOType = z.infer<typeof WishlistSchema>;
