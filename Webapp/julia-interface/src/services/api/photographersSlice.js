import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photographersSlice = createApi({
  reducerPath: "photographersSlice",
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
    getPhotographersByTypeAndDate: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/?date=${data.date}&type=${data.type}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddPhotographerMutation,
  useGetPhotographersByTypeAndDateQuery,
} = photographersSlice;
