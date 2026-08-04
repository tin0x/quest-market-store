import { createApi } from '@reduxjs/toolkit/query/react';
import { fakeBaseQuery } from '@reduxjs/toolkit/query';

export const supabaseApi = createApi({
  reducerPath: 'supabaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ['Cart', 'Product'],
});
