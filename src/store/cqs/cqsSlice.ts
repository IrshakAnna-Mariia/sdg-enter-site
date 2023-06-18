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
    getCQS: build.query<CQSBody[], { params?: {} }>({
      query: ({ params }) => ({
        url: `/questionAndSuggestion/`,
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
      query: ({ body }) => ({
        url: `/addNewSuggestion`,
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
  }),
});

export const { useGetCQSQuery, useCreateCQSItemMutation, useUpdateCQSItemMutation } = cqsApiSlice;

export default cqsSlice.reducer;
