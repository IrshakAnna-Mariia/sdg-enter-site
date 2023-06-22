import { createApi } from '@reduxjs/toolkit/query/react';

import { clearUser, setUser } from 'store/user/userSlice';
import { baseQueryWithReauth } from 'utils/services';

import { LoginProps, UserBody, UserProps } from '../user/user.types';

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
    loginUser: builder.mutation<{ access: string; refresh: string; user: UserBody }, { body: LoginProps }>({
      query: ({ body }) => ({
        url: `/login/`,
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data && data.access) {
          dispatch(setUser(data));
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
} = apiSlice;
