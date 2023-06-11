import { createApi } from '@reduxjs/toolkit/query/react';

import { setUser } from 'store/user/userSlice';
import { baseQueryWithReauth } from 'utils/services';

import { UserProps } from '../user/user.types';

export const tagTypes = ['Profile', 'News'];

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: tagTypes,
  endpoints: (builder) => ({
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

export const { useUpdateMyProfileMutation, useLazyGetMyProfileQuery } = apiSlice;
