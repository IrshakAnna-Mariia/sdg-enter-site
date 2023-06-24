import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { News } from './news.types';
import { apiSlice } from '../api/apiSlice';

const initialState: { allNews: News[] } = {
  allNews: [],
};

export const newsSlice = createSlice({
  name: '/search/news',
  initialState,
  reducers: {
    setNewsOptions(state, action: PayloadAction<News[]>) {
      state.allNews = action.payload;
    },
  },
});

export const { setNewsOptions } = newsSlice.actions;

export const newsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<News[], { params?: { [key: string]: string } }>({
      query: ({ params }) => ({
        url: `/search/news/`,
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
        url: `/search/news/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['News'],
    }),

    updateNewsItem: build.mutation({
      query: ({ id, body }) => ({
        url: `newsUpdate/${id}/`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'News', id: arg.id }],
    }),

    deleteNewsItem: build.mutation<{ message: string }, { id: number }>({
      query: ({ id }) => ({
        url: `/newsDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['News'],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useLazyGetNewsQuery,
  useLazyGetNewsItemByIdQuery,
  useCreateNewsItemMutation,
  useDeleteNewsItemMutation,
  useUpdateNewsItemMutation,
} = newsApiSlice;

export default newsSlice.reducer;
