import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://json.ffwagency.md/' }),
  endpoints: (builder) => ({

    getTabs: builder.query({
      query: () => `tabs`,
    }),

    getFont_A: builder.query({
      query: () => "fonts_a",
    }),

    getFont_B: builder.query({
      query: () => "fonts_b",
    })
  }),
})
export const tabsApi = api;
