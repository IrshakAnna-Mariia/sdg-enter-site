// import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: async (headers, api) => {
    // TODO: add logic for login user
    // try {
    //   if (session) {
    //     // Set the token in the store to trigger pre-existing functionality
    //     if ('dispatch' in api) {
    //       const api2 = api as BaseQueryApi;
    //       if ((api2.getState() as RootState).user.accessToken !== accessToken) {
    //         api2.dispatch(setToken({ accessToken, idToken }));
    //       }
    //     }

    //     headers.set('Authorization', 'Bearer ' + accessToken);
    //     headers.set('idToken', idToken);
    //   }
    // } catch (e) {
    //   if (e !== 'The user is not authenticated') console.error('Unable to fetch current session', e);
    // }

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
