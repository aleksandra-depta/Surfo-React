import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("jwt");

export const toursApi = createApi({
  reducerPath: "toursApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:4000/api/v1/" }),
  tagTypes: ["Post", "User"],
  endpoints: (build) => ({
    getTours: build.query({
      query: () => `tours`,
    }),
    //auth
    login: build.mutation({
      query: (body) => ({
        url: `users/login`,
        method: "POST",
        body,
      }),
    }),
    signUp: build.mutation({
      query: (body) => ({
        url: `users/signup`,
        method: "POST",
        body,
      }),
    }),
    auth: build.query({
      query: (token) => ({
        url: `users/me`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    //update User
    updateUser: build.mutation({
      query: (body) => ({
        url: `users/updateMe`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "form-data",
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updatePassword: build.mutation({
      query: (body) => ({
        url: `users/updateMyPassword`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["User"],
    }),
    //comments
    getComments: build.query({
      query: (id) => `/tours/${id}/comments`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
    addComment: build.mutation({
      query: (body) => ({
        url: `comments`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    deleteComment: build.mutation({
      query: (id) => ({
        url: `comments/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    //booking
    getBookingsOnUser: build.query({
      query: (id) => `/users/${id}/booking`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
    addBooking: build.mutation({
      query: (body) => ({
        url: `booking`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetToursQuery,
  //Auth
  useLoginMutation,
  useSignUpMutation,
  useAuthQuery,
  //Update User
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  // Comments
  useGetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  // Bookings
  useGetBookingsOnUserQuery,
  useAddBookingMutation,
} = toursApi;
