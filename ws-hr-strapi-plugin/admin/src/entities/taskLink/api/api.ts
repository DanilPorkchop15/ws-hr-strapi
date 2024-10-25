import { baseApi } from '../../../shared/api';
import { TaskLink } from '../interfaces';
import { ApiRoutes } from '../../../shared/model';

export const taskLinkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTaskLink: build.mutation<{ data: TaskLink }, number>({
      query: (task) => ({
        url: ApiRoutes.getTaskLinks(),
        method: 'POST',
        body: { data: { task }},
      }),
    })
  }),
});
