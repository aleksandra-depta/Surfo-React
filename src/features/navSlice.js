import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileNav: window.innerWidth <= 760 ? true : false,
  mobileNavContent: false,
};

const navSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openMobileMenu: (state, action) => {
      state.mobileNavContent = true;
    },
    closeMobileMenu: (state, action) => {
      state.mobileNavContent = false;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = navSlice.actions;

export default navSlice.reducer;
