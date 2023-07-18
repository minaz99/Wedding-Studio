import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginSlice = createApi({
  reducerPath: "loginSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (title) => ({
        url: `/add`,
        method: "POST",
        body: title,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginSlice;
