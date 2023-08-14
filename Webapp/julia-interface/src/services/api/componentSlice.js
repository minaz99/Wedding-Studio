import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const componentSlice = createApi({
  reducerPath: "componentSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://juliabackend.vercel.app/components",
  }),
  endpoints: (builder) => ({
    getComponentByType: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/type/${data.type}`,
        method: "GET",
      }),
    }),
    getComponentByID: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/${data.id}`,
        method: "GET",
      }),
    }),
    editComponent: builder.mutation({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/${data.id}`,
        method: "PUT",
        body: data.body,
      }),
    }),
    deleteComponent: builder.mutation({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/${data.id}`,
        method: "DELETE",
      }),
    }),
    createComponent: builder.mutation({
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

export const {
  useGetComponentByTypeQuery,
  useGetComponentByIDQuery,
  useEditComponentMutation,
  useDeleteComponentMutation,
  useCreateComponentMutation,
} = componentSlice;
