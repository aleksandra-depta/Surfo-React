import { createSlice } from "@reduxjs/toolkit";
import { toursApi } from "../services/toursApi";
import type { CurrentUser } from "../models/user";
import Cookies from "universal-cookie";

const cookies = new Cookies();

interface TypesState {
  currentUser: CurrentUser | null;
  token: any | null;
}

const initialState: TypesState = {
  currentUser: null,
  token: null,
};

const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      toursApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.currentUser = payload.data.user;
        cookies.set("jwt", state.token, {
          path: "/",
        });
      }
    );
    builder.addMatcher(
      toursApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.currentUser = payload.data.user;
        cookies.set("jwt", state.token, {
          path: "/",
        });
      }
    );

    builder.addMatcher(
      toursApi.endpoints.auth.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload.data;
      }
    );
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
