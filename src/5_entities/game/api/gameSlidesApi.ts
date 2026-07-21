import { rawgApi } from '@shared/api/rawgApi.ts';
import type { GamesSlides, GamesSlidesArgs } from '@entities/game/types.ts';
import { mapGameSlides } from '@entities/game/mappers/mapGameSlides.ts';
import { GameSlidesSchema } from '@entities/game/schemas/GameSlidesSchema.ts';

export const gameSlidesApi = rawgApi.injectEndpoints({
  endpoints: (build) => ({
    getGamesSlides: build.query<GamesSlides, GamesSlidesArgs>({
      query: ({ ordering }) => ({
        url: '/gameSlides',
        params: {
          ordering: ordering,
          metacritic: '60,100',
          exclude_additions: true,
          page_size: 12,
        },
      }),
      transformResponse: (response: unknown): GamesSlides => {
        const dto = GameSlidesSchema.parse(response);
        const gameSlides = dto.results.map(mapGameSlides);
        return { results: gameSlides };
      },
    }),
  }),
});

export const { useGetGamesSlidesQuery } = gameSlidesApi;
