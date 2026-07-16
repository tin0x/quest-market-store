import { rawgApi } from '@shared/api/rawgApi.ts';
import type { TrendingGames, TrendingGamesDTO } from '@entities/game/types.ts';
import { mapTrendingGames } from '@entities/game/mappers/mapTrendingGame.ts';

export const gameSlidesApi = rawgApi.injectEndpoints({
  endpoints: (build) => ({
    getTrendingGames: build.query<TrendingGames, void>({
      query: () => ({
        url: '/gameSlides',
        params: {
          ordering: '-added',
          metacritic: '60,100',
          exclude_additions: true,
          page_size: 6,
        },
      }),
      transformResponse: (response: TrendingGamesDTO): TrendingGames => {
        const gameSlides = response.results.map(mapTrendingGames);
        return { results: gameSlides };
      },
    }),
    getReleasedGames: build.query<TrendingGames, void>({
      query: () => ({
        url: '/gameSlides',
        params: {
          ordering: '-rating',
          metacritic: '60,100',
          exclude_additions: true,
          page_size: 6,
        },
      }),
      transformResponse: (response: TrendingGamesDTO): TrendingGames => {
        const gameSlides = response.results.map(mapTrendingGames);
        return { results: gameSlides };
      },
    }),
  }),
});

export const { useGetTrendingGamesQuery, useGetReleasedGamesQuery } = gameSlidesApi;
