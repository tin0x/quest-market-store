import igdbApi from '@shared/api/game/igdbApi.ts';
import { SearchGameListSchema } from '@features/search-by-name/schemas/SearchGameSchema.ts';
import mapSearchGame from '@features/search-by-name/mappers/mapSearchGame.ts';
import type { SearchGameArgs, SearchGameList } from '@features/search-by-name/types.ts';

const gameApi = igdbApi.injectEndpoints({
  endpoints: (builder) => ({
    searchGameByName: builder.query<SearchGameList, SearchGameArgs>({
      query: ({ str }) => ({
        url: '/searchGame',
        params: {
          search: str,
        },
      }),
      transformResponse: (response: unknown) => {
        const dto = SearchGameListSchema.parse(response);
        return dto.map(mapSearchGame);
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useSearchGameByNameQuery } = gameApi;
