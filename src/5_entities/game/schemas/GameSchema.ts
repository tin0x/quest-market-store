import { z } from 'zod';

export const GameSchema = z.object({
  id: z.number(),
  cover: z.object({
    url: z.string().nullish(),
  }),
  name: z.string(),
  summary: z.string().nullish(),
});

export const GameListSchema = z.array(GameSchema);

export type GameDTO = z.infer<typeof GameSchema>;
