import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photographersSlice = createApi({
  reducerPath: "contractSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://juliabackend.vercel.app/photographers",
  }),
  endpoints: (builder) => ({
    addPhotographer: builder.mutation({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/`,
        method: "POST",
        body: data.body,
      }),
    }),
  }),
});

export const { useAddPhotographerMutation } = photographersSlice;
