import { createApi } from '@reduxjs/toolkit/query/react';

import { clearUser, setToken, setUser } from 'store/user/userSlice';
import { baseQueryWithReauth } from 'utils/services';

import { LoginProps, UserProps } from '../user/user.types';

export const tagTypes = ['Profile', 'News'];

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: tagTypes,
  endpoints: (builder) => ({
    postNewUser: builder.mutation<unknown, { body: UserProps }>({
      query: ({ body }) => ({
        url: `/register/`,
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation<{ access: string; refresh: string }, { body: LoginProps }>({
      query: ({ body }) => ({
        url: `/login/`,
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data && data.access) {
          dispatch(setToken(data));
        }
      },
    }),

    logoutUser: builder.mutation<{ access: string; refresh: string }, void>({
      query: () => ({
        url: `/logout/`,
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data && data.access) {
          dispatch(clearUser());
        }
      },
    }),

    getMyProfile: builder.query<UserProps[], void>({
      query: () => `/my-profile`,
      providesTags: ['Profile'],
      transformResponse: (response: { data: UserProps[] }) => response.data,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data && data.length) {
          dispatch(setUser({ ...data[0] }));
        }
      },
    }),
    updateMyProfile: builder.mutation({
      query: ({ staff }: { staff: unknown }) => {
        return {
          url: `/my-profile`,
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: staff,
        };
      },
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  usePostNewUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useUpdateMyProfileMutation,
  useLazyGetMyProfileQuery,
} = apiSlice;
