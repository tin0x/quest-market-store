import { configureStore } from '@reduxjs/toolkit';
import { rawgApi } from '@shared/api/rawgApi.ts';
import { newsApi } from '@shared/api/newsApi.ts';
import { supabaseApi } from '@shared/api/supabaseApi.ts';

export const store = configureStore({
  reducer: {
    [rawgApi.reducerPath]: rawgApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rawgApi.middleware, newsApi.middleware, supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
