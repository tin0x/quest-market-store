import type { GameList, GameListWithPaginationArgs, GamesListArgs } from '@entities/game/types.ts';
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
    getGameListWithPagination: build.query<GameList, GameListWithPaginationArgs>({
      query: ({ limit, offset }) => ({
        url: '/gameWithPagination',
        params: {
          limit,
          offset,
        },
      }),
      transformResponse: (response: unknown): GameList => {
        const dto = GameListSchema.parse(response);
        const gameList = dto.map(mapGame);
        return { results: gameList };
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.offset === 0) return newItems;

        currentCache.results.push(...newItems.results);
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.offset !== previousArg?.offset;
      },
    }),
  }),
});

export const { useGetGameListQuery, useGetGameListWithPaginationQuery } = gameApi;
