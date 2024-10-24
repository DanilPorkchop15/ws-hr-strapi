import { baseApi } from '../../../shared/api';
import { TaskLink } from '../interfaces';
import { ApiRoutes } from '../../../shared/model';
import { v4 as uuidv4 } from 'uuid';

export const taskLinkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTaskLink: build.mutation<{ data: TaskLink }, number>({
      query: (task) => ({
        url: ApiRoutes.getTaskLinks(),
        method: 'POST',
        body: { data: { task, uuid: uuidv4() }},
      }),
    })
  }),
});
