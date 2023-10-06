import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toursApi = createApi({
  reducerPath: "toursApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:4000/api/v1/" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getTours: build.query({
      query: () => `/tours`,
    }),
    // getCategory: build.query({
    //   query: (category) => `/products?type=${category}`,
    // }),
    // getLocations: build.query({
    //   query: () => `/locations`,
    // }),
    // getLocation: build.query({
    //   query: (id) => `/locations/${id}`,
    // }),
    // addOrder: build.mutation({
    //   query: (body) => ({
    //     url: `orders`,
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Posts"],
    // }),
  }),
});

export const {
  useGetToursQuery,
  // useGetCategoryQuery,
  // useGetLocationsQuery,
  // useGetLocationQuery,
  // useAddOrderMutation,
} = toursApi;
