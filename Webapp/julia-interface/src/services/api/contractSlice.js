import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contractSlice = createApi({
  reducerPath: "contractSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://juliabackend.vercel.app/contracts",
  }),
  endpoints: (builder) => ({
    getAllContracts: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/page/${data.page}`,
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
        url: `/filter/filterType/?page=${data.page}&${data.searchType}=${data.searchValue}`,
        method: "GET",
      }),
    }),
    getContractsByMultipleCriterias: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/filter/multipleFilters?${data.queryString}`,
        method: "GET",
      }),
    }),
    getContractsInMonth: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/filter/calender?month=${data.month}&year=${data.year}`,
        method: "GET",
      }),
    }),
    createContract: builder.mutation({
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
    getContractPayments: builder.query({
      query: (data) => ({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        url: `/${data.id}/payments`,
        method: "GET",
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
  useGetContractsInMonthQuery,
  useCreateContractMutation,
  useGetContractPaymentsQuery,
} = contractSlice;
