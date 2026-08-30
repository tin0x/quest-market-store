import type {
  GameById,
  GameByIdArgs,
  GameList,
  GameListWithPaginationArgs,
  GamesListArgs,
} from '@entities/game/types.ts';
import { mapGame } from '@entities/game/mappers/mapGame.ts';
import { GameListSchema } from '@entities/game/schemas/GameSchema.ts';
import igdbApi from '@shared/api/game/igdbApi.ts';
import { GameByIdResponseSchema } from '@entities/game/schemas/GameByIdSchema.ts';
import mapGameById from '@entities/game/mappers/mapGameById.ts';

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
    getGameById: build.query<GameById, GameByIdArgs>({
      query: ({ gameId }) => ({
        url: `/gameById`,
        params: {
          id: gameId,
        },
      }),
      transformResponse: (response: unknown) => {
        const dto = GameByIdResponseSchema.parse(response);
        const [currentGame] = dto;
        return mapGameById(currentGame);
      },
    }),
    getGameListWithPagination: build.query<GameList, GameListWithPaginationArgs>({
      query: ({ limit, offset, searchParams }) => ({
        url: `/gameWithPagination?${searchParams}`,
        params: {
          limit,
          offset,
        },
      }),
      transformResponse: (response: unknown, _, arg): GameList => {
        const dto = GameListSchema.parse(response);
        const gameList = dto.map(mapGame);
        return {
          results: gameList,
          hasMore: gameList.length === arg.limit,
        };
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { offset, limit, ...filters } = queryArgs;
        return `${endpointName}-${JSON.stringify(filters)}`;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.offset !== previousArg?.offset || JSON.stringify(currentArg) !== JSON.stringify(previousArg);
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.offset === 0) return newItems;

        currentCache.results.push(...newItems.results);
        currentCache.hasMore = newItems.hasMore;
      },
    }),
  }),
});

export const { useGetGameListQuery, useGetGameByIdQuery, useGetGameListWithPaginationQuery } = gameApi;
