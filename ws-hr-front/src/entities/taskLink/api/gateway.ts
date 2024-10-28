import { baseApi } from "shared/api";
import { ApiRoutes } from "shared/model";

import type { TaskLink } from "../interfaces";

export const taskLinkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTaskLink: build.query<{ data: TaskLink[] }, string>({
      query: (uuid) => ApiRoutes.getTaskLink(false, uuid),
    }),
  }),
});
