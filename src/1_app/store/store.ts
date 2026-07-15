import { configureStore } from '@reduxjs/toolkit';
import { rawgApi } from '@shared/api/rawgApi.ts';
import { newsApi } from '@shared/api/newsApi.ts';

export const store = configureStore({
  reducer: {
    [rawgApi.reducerPath]: rawgApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rawgApi.middleware, newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
