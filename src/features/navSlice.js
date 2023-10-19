import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navHome: true,
};

const navSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    navHomeActive: (state, action) => {
      state.navHome = true;
    },
    navHomeInactive: (state, action) => {
      state.navHome = false;
    },
  },
});

export const { navHomeActive, navHomeInactive } = navSlice.actions;

export default navSlice.reducer;
