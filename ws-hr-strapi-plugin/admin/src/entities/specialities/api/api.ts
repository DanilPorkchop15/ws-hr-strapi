import { baseApi } from '../../../shared/api';
import { Speciality } from '../interfaces';
import { ApiRoutes } from '../../../shared/model';

export const specialityApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecialities: build.query<{data: Speciality[]}, void>({
      query: () => ({
        url: ApiRoutes.getSpecialities(),
      }),
    }),
  }),
});
