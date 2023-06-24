import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import Cookies from 'js-cookie';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  mode: 'cors',
  credentials: 'same-origin',
  prepareHeaders: async (headers, api) => {
    const access = Cookies.get('access');

    if (access) {
      headers.set('Autorization', 'Bearer ' + access);
    }

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  return baseQuery(args, api, extraOptions);
};
