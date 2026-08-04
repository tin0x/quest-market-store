import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const igdbApi = createApi({
  reducerPath: 'igdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/igdb' }),
  endpoints: () => ({}),
});

export default igdbApi;
