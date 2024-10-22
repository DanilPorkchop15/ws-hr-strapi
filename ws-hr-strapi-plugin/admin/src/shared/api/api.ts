import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../config';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery:  fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: () => ({}),
});
