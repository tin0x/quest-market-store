import { configureStore } from '@reduxjs/toolkit';
import { rawgApi } from '@shared/api/game/rawgApi.ts';
import { newsApi } from '@shared/api/news/newsApi.ts';
import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import toastReducer from '@shared/lib/slices/toast/toastSlice.ts';

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    [rawgApi.reducerPath]: rawgApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rawgApi.middleware, newsApi.middleware, supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
