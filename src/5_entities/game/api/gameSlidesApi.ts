import type { GamesSlides, GamesSlidesArgs } from '@entities/game/types.ts';
import { mapGameSlides } from '@entities/game/mappers/mapGameSlides.ts';
import { GameSlidesSchema } from '@entities/game/schemas/GameSlidesSchema.ts';
import igdbApi from '@shared/api/game/igdbApi.ts';

export const gameSlidesApi = igdbApi.injectEndpoints({
  endpoints: (build) => ({
    getGamesSlides: build.query<GamesSlides, GamesSlidesArgs>({
      query: ({ ordering, limit }) => ({
        url: '/gameSlides',
        params: {
          ordering,
          limit,
        },
      }),
      transformResponse: (response: unknown): GamesSlides => {
        const dto = GameSlidesSchema.parse(response);
        const gameSlides = dto.map(mapGameSlides);
        return { results: gameSlides };
      },
    }),
  }),
});

export const { useGetGamesSlidesQuery } = gameSlidesApi;
