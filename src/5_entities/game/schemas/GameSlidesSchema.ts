import { z } from 'zod';

export const GameSlideSchema = z.object({
  id: z.number(),
  name: z.string(),
  background_image: z.string().nullable(),
});

export const GameSlidesSchema = z.object({
  results: z.array(GameSlideSchema),
});

export type GameSlideDTO = z.infer<typeof GameSlideSchema>;
