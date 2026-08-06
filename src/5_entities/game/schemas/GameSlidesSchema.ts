import { z } from 'zod';

export const GameSlideSchema = z.object({
  id: z.number(),
  cover: z.object({
    url: z.string().nullish(),
  }),
  name: z.string(),
  summary: z.string().nullish(),
});

export const GameSlidesSchema = z.array(GameSlideSchema);

export type GameSlideDTO = z.infer<typeof GameSlideSchema>;
