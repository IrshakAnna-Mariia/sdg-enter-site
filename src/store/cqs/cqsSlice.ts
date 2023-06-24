import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import { CQSBody } from './cqs.types';

const initialState: { cqs: CQSBody[] } = {
  cqs: [],
};

export const cqsSlice = createSlice({
  name: 'questionAndSuggestion',
  initialState,
  reducers: {
    setCQSOptions(state, action: PayloadAction<CQSBody[]>) {
      state.cqs = action.payload;
    },
  },
});

export const { setCQSOptions } = cqsSlice.actions;

export const cqsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCQS: build.query<CQSBody[], { params?: { [key: string]: string } }>({
      query: ({ params }) => ({
        url: `/search/questions`,
        params,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCQSOptions(data));
        } catch (error) {
          console.error(error);
        }
      },
      providesTags: (result) => (result ? ['CQS', ...result.map(({ id }) => ({ type: 'CQS', id }))] : ['CQS']),
    }),

    createCQSItem: build.mutation({
      query: (body) => ({
        url: `/search/questions/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['CQS'],
    }),

    updateCQSItem: build.mutation({
      query: ({ id, body }) => ({
        url: `/qaUpdate/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'CQS', id: arg.id }],
    }),
    deleteCQSItem: build.mutation({
      query: ({ id }) => ({
        url: `/search/questions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'CQS', id: arg.id }],
    }),
  }),
});

export const { useLazyGetCQSQuery, useCreateCQSItemMutation, useUpdateCQSItemMutation, useDeleteCQSItemMutation } =
  cqsApiSlice;

export default cqsSlice.reducer;
