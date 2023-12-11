import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toursApi } from "../services/toursApi";
import { Tour } from "../models/tour";

interface TypesState {
  tours: Tour[];
  bookmarks: Tour[];
}

const initialState: TypesState = {
  tours: [],
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    controlBookmark: (state, action: PayloadAction<string>) => {
      const existingBookmark = state.bookmarks.find(
        (item) => item._id === action.payload
      );
      if (existingBookmark) {
        const updated = state.bookmarks.filter(
          (item) => item._id !== action.payload
        );
        state.bookmarks = updated;
      } else {
        const itemToAdd = state.tours.find(
          (item) => item._id === action.payload
        );
        if (itemToAdd) {
          state.bookmarks = [...state.bookmarks, itemToAdd];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      toursApi.endpoints.getTours.matchFulfilled,
      (state, { payload }) => {
        state.tours = payload.data;
      }
    );
  },
});

export const { controlBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
