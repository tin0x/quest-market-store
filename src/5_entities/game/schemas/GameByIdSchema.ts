import { z } from 'zod';

const GameByIdSchema = z.object({
  id: z.number(),
  age_ratings: z.array(
    z.object({
      id: z.number(),
      organization: z.object({
        id: z.number(),
        name: z.string(),
      }),
      rating_category: z.object({
        id: z.number(),
        rating: z.string(),
      }),
    }),
  ),
  cover: z
    .object({
      id: z.number(),
      url: z.string(),
    })
    .nullish(),
  first_release_date: z.number(),
  genres: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  name: z.string(),
  player_perspectives: z.array(
    z
      .object({
        id: z.number(),
        name: z.string(),
      })
      .nullish(),
  ),
  screenshots: z.array(
    z
      .object({
        id: z.number(),
        url: z.string(),
      })
      .nullish(),
  ),
  storyline: z.string(),
  summary: z.string(),
  total_rating: z.number(),
  videos: z.array(
    z
      .object({
        id: z.number(),
        video_id: z.string(),
      })
      .nullish(),
  ),
});

export const GameByIdResponseSchema = z.array(GameByIdSchema);
export type GameByIdDTO = z.infer<typeof GameByIdSchema>;
