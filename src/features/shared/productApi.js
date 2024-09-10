/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productUrl } from "../../constant/constant";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: productUrl,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => ({
        url: "/",
        method: "GET",
      }),
      invalidatesTags: ["Product"],
    }),

    getTopProducts: builder.query({
      query: () => ({
        url: "/top_products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (query) => ({
        url: `/${query}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    addProducts: builder.mutation({
      query: (query) => ({
        url: "/",
        method: "POST",
        body: query.body,
        headers: {
          Authorization: query.token,
        },
        invalidatesTags: ["Product"],
      }),
    }),
    updateProduct: builder.mutation({
      query: (query) => ({
        url: `/${query.id}`,
        body: query.body,
        method: "PATCH",
        headers: {
          Authorization: query.token,
        },
      }),
      invalidatesTags: ["Product"],
    }),
    reviewAdd: builder.mutation({
      query: (query) => ({
        url: `/reviews/${query.id}`,
        body: query.body,
        method: "PATCH",
        headers: {
          Authorization: query.token,
        },
      }),
      invalidatesTags: ["Product"],
    }),

    searchProducts: builder.query({
      query: (query) => ({
        url: "/",
        method: "GET",
        params: {
          search: query?.search,
          page: query?.page,
        },
      }),
      providesTags: ["Product"],
    }),
    removeProduct: builder.mutation({
      query: (query) => ({
        url: `/${query.id}`,
        params: {
          imagePath: query.imagePath,
        },
        method: "DELETE",
        headers: {
          Authorization: query.token,
        },
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetTopProductsQuery,
  useAddProductsMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
  useReviewAddMutation,
  useSearchProductsQuery,
} = productApi;
