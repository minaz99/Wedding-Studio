import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const packageSlice = createApi({
  reducerPath: "packageSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://juliabackend.vercel.app/packages",
  }),
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/`,
        method: "GET",
      }),
    }),
    getPackageByID: builder.query({
        query: (data) => ({
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
          url: `/${data.id}`,
          method: "GET",
        }),
      }),
    createPackage: builder.mutation({
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
    editPackage: builder.mutation({
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
    deletePackage: builder.mutation({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useGetPackageByIDQuery,
  useCreatePackageMutation,
  useEditPackageMutation,
  useDeletePackageMutation,
} = packageSlice;
