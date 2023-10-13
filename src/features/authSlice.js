import { createSlice } from "@reduxjs/toolkit";
import { toursApi } from "../services/toursApi";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  currentUser: null,
  token: null,
};

const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
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
        state.currentUser = payload.data.data;
      }
    );
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
