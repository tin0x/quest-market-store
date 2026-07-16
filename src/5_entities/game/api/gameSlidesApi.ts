import { rawgApi } from '@shared/api/rawgApi.ts';
import type { GameSlides } from '@entities/game/types.ts';
import { mapGameSlides } from '@entities/game/mappers/mapGameSlides.ts';
import { GameSlidesSchema } from '@entities/game/schemas/GameSlidesSchema.ts';

export const gameSlidesApi = rawgApi.injectEndpoints({
  endpoints: (build) => ({
    getTrendingGames: build.query<GameSlides, void>({
      query: () => ({
        url: '/gameSlides',
        params: {
          ordering: '-added',
          metacritic: '60,100',
          exclude_additions: true,
          page_size: 6,
        },
      }),
      transformResponse: (response: unknown): GameSlides => {
        const dto = GameSlidesSchema.parse(response);
        const gameSlides = dto.results.map(mapGameSlides);
        return { results: gameSlides };
      },
    }),
    getReleasedGames: build.query<GameSlides, void>({
      query: () => ({
        url: '/gameSlides',
        params: {
          ordering: '-rating',
          metacritic: '60,100',
          exclude_additions: true,
          page_size: 6,
        },
      }),
      transformResponse: (response: unknown): GameSlides => {
        const dto = GameSlidesSchema.parse(response);
        const gameSlides = dto.results.map(mapGameSlides);
        return { results: gameSlides };
      },
    }),
  }),
});

export const { useGetTrendingGamesQuery, useGetReleasedGamesQuery } = gameSlidesApi;
