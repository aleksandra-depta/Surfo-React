import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Tours } from "../models/tours";
import type { CurrentUser, CurrentUsers } from "../models/user";
import type { Reviews } from "../models/reviews";
import type { Comments } from "../models/comments";
import type { Bookings } from "../models/bookings";

import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("jwt");

export const toursApi = createApi({
  reducerPath: "toursApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://surfo-api.onrender.com/api/v1/",
  }),
  tagTypes: ["Posts", "Post", "User"],
  endpoints: (build) => ({
    getTours: build.query<Tours, void>({
      query: () => `tours`,
      transformResponse: (response: { data: Tours }, meta, arg) =>
        response.data,
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
    auth: build.query<CurrentUsers, void>({
      query: (token) => ({
        url: `users/me`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),

      transformResponse: (response: { data: CurrentUsers }, meta, arg) =>
        response.data,

      providesTags: ["User"],
    }),
    //update User
    updateUser: build.mutation<
      CurrentUser,
      { name: string } | { email: string }
    >({
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
    updatePassword: build.mutation<
      CurrentUser,
      { passwordCurrent: string; password: string; passwordConfirm: string }
    >({
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
    //review
    getReviews: build.query<Reviews, string>({
      query: (id) => `/tours/${id}/reviews`,

      transformResponse: (response: { data: Reviews }, meta, arg) =>
        response.data,
    }),
    //comments
    getComments: build.query<Comments, string>({
      query: (id) => `/tours/${id}/comments`,

      transformResponse: (response: { data: Comments }, meta, arg) =>
        response.data,

      providesTags: ["Post"],
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
      invalidatesTags: ["Post"],
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
      invalidatesTags: ["Post"],
    }),
    //booking
    getBookingsOnUser: build.query<Bookings, any | null>({
      query: (id) => ({
        url: `/users/${id}/booking`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),

      transformResponse: (response: { data: Bookings }, meta, arg) =>
        response.data,

      providesTags: ["Post"],
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
      invalidatesTags: ["Post"],
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
  //Reviews
  useGetReviewsQuery,
  // Comments
  useGetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  // Bookings
  useGetBookingsOnUserQuery,
  useAddBookingMutation,
} = toursApi;
