// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const tabsAPI = createApi({
//   reducerPath: "tabsAPI",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://json.ffwagency.md/" }),
//   endpoints: (builder) => ({
//     getTabs: builder.query({
//       query: () => "tabs",
//     })
//   })
// });

// export const { useGetTabsQuery } = tabsAPI;
// export { tabsAPI };

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchTodo 

// const asd = createSlice({ name: "asd" })

// export default asd.reducer;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://json.ffwagency.md' }),
  endpoints: (builder) => ({
    getTabs: builder.query({
      query: () => "tabs",
    })
  })
});

export const { useGetTabsQuery } = api;
