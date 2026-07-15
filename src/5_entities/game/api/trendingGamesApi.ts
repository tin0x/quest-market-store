import { rawgApi } from '@shared/api/rawgApi.ts';
import type { TrendingGames, TrendingGamesDTO } from '@entities/game/types.ts';
import { mapTrendingGames } from '@entities/game/mappers/mapTrendingGame.ts';

export const trendingGamesApi = rawgApi.injectEndpoints({
  endpoints: (build) => ({
    getTrendingGames: build.query<TrendingGames, void>({
      query: () => ({
        url: '/trendingGames',
        params: {
          ordering: '-added',
          page_size: 6,
        },
      }),
      transformResponse: (response: TrendingGamesDTO): TrendingGames => {
        const trendingGames = response.results.map(mapTrendingGames);
        return { results: trendingGames };
      },
    }),
  }),
});

export const { useGetTrendingGamesQuery } = trendingGamesApi;
