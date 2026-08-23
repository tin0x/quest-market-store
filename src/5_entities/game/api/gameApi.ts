import type { GameList, GamesListArgs } from '@entities/game/types.ts';
import { mapGame } from '@entities/game/mappers/mapGame.ts';
import { GameListSchema } from '@entities/game/schemas/GameSchema.ts';
import igdbApi from '@shared/api/game/igdbApi.ts';

export const gameApi = igdbApi.injectEndpoints({
  endpoints: (build) => ({
    getGameList: build.query<GameList, GamesListArgs>({
      query: ({ ordering, limit }) => ({
        url: '/game',
        params: {
          ordering,
          limit,
        },
      }),
      transformResponse: (response: unknown): GameList => {
        const dto = GameListSchema.parse(response);
        const gameList = dto.map(mapGame);
        return { results: gameList };
      },
    }),
  }),
});

export const { useGetGameListQuery } = gameApi;
