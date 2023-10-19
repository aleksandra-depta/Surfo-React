import { createSlice } from "@reduxjs/toolkit";
import { toursApi } from "../services/toursApi";

const initialState = {
  tours: [],
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    controlBookmark: (state, { payload }) => {
      const existingBookmark = state.bookmarks.find(
        (item) => item._id === payload
      );
      if (existingBookmark) {
        const updated = state.bookmarks.filter((item) => item._id !== payload);
        state.bookmarks = updated;
      } else {
        const itemToAdd = state.tours.find((item) => item._id === payload);
        state.bookmarks = [...state.bookmarks, itemToAdd];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      toursApi.endpoints.getTours.matchFulfilled,
      (state, { payload }) => {
        state.tours = payload.data.data;
      }
    );
  },
});

export const { controlBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
