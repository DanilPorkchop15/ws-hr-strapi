import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../shared/api';
import { specialityApi } from "../entities/specialities";

export const store = configureStore({
  reducer: {
    [specialityApi.reducerPath]: specialityApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
