import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from '@shared/api/news/newsApi.ts';
import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import toastReducer from '@shared/lib/slices/toast/toastSlice.ts';
import igdbApi from '@shared/api/game/igdbApi.ts';

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    [igdbApi.reducerPath]: igdbApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(igdbApi.middleware, newsApi.middleware, supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
