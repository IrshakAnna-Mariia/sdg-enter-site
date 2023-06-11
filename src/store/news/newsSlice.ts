import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { News } from './news.types';
import { apiSlice } from '../api/apiSlice';

const initialState: { news: News[] } = {
  news: [],
};

export const triggersSlice = createSlice({
  name: 'triggers',
  initialState,
  reducers: {
    setNewsOptions(state, action: PayloadAction<News[]>) {
      state.news = action.payload;
    },
  },
});

export const { setNewsOptions } = triggersSlice.actions;

export const triggersApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<News[], { params?: {} }>({
      query: ({ params }) => ({
        url: `/news/`,
        params,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setNewsOptions(data));
        } catch (error) {
          console.error(error);
        }
      },
      providesTags: (result) => (result ? ['News', ...result.map(({ id }) => ({ type: 'News', id }))] : ['News']),
    }),

    getNewsItemById: build.query<News, { id: string }>({
      query: ({ id }) => `/news/${id}`,
    }),

    createNewsItem: build.mutation({
      query: ({ body }) => ({
        url: `/news`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['News'],
    }),

    updateNewsItem: build.mutation({
      query: ({ id, body }) => ({
        url: `/news/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'News', id: arg.id }],
    }),

    deleteNewsItem: build.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/news/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['News'],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useLazyGetNewsItemByIdQuery,
  useCreateNewsItemMutation,
  useDeleteNewsItemMutation,
  useUpdateNewsItemMutation,
} = triggersApiSlice;

export default triggersSlice.reducer;
