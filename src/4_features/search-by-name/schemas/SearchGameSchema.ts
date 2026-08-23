import { z } from 'zod';

const SearchGameSchema = z.object({
  id: z.number(),
  game: z.number(),
  name: z.string(),
});

export const SearchGameListSchema = z.array(SearchGameSchema);
export type SearchGameDTO = z.infer<typeof SearchGameSchema>;
