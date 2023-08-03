import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contractSlice = createApi({
  reducerPath: "contractSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://juliabackend.vercel.app/contracts",
  }),
  endpoints: (builder) => ({
    getAllContracts: builder.query({
      query: (token) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: `/`,
        method: "GET",
      }),
    }),
    getContractByID: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/${data.id}`,
        method: "GET",
      }),
    }),
    getContractsTableHeaderFilters: builder.query({
      query: (token) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: `/filter/tableHeaders`,
        method: "GET",
      }),
    }),
    getContractsByCriteria: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/filter/filterType/?${data.filterType}=${data.filterTypeValue}`,
        method: "GET",
      }),
    }),
    getContractsByMultipleCriterias: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/filter/tableHeaders`,
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllContractsQuery,
  useGetContractByIDQuery,
  useGetContractsTableHeaderFiltersQuery,
  useGetContractsByCriteriaQuery,
  useGetContractsByMultipleCriteriasQuery,
} = contractSlice;
