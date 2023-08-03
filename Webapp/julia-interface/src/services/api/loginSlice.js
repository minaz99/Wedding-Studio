import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginSlice = createApi({
  reducerPath: "loginSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://juliabackend.vercel.app/user",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: `/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginSlice;
