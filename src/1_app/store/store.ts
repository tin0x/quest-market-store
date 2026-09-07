import { configureStore } from '@reduxjs/toolkit';
import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import toastReducer from '@shared/lib/slices/toast/toastSlice.ts';
import igdbApi from '@shared/api/game/igdbApi.ts';

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    [igdbApi.reducerPath]: igdbApi.reducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(igdbApi.middleware, supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
