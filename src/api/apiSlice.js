import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_APP_API_URL,
  }),
  tagTypes: ['api'],
  endpoints: (builder) => ({
    getAvailableIntervals: builder.query({
      query: () => '/getAvailableIntervals',
      transformResponse: (response) => response.data,
    }),
  }),
})

export const { useGetAvailableIntervalsQuery } = apiSlice
