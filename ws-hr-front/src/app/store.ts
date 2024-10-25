import { configureStore } from "@reduxjs/toolkit";

import { taskLinkApi } from "entities/taskLink";

import { baseApi } from "shared/api";

export const store = configureStore({
  reducer: {
    [taskLinkApi.reducerPath]: taskLinkApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
