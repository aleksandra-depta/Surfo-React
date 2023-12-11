import { createSlice } from "@reduxjs/toolkit";

interface TypesState {
  mobileNav: boolean;
  mobileNavContent: boolean;
}

const initialState: TypesState = {
  mobileNav: window.innerWidth <= 760 ? true : false,
  mobileNavContent: false,
};

const navSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.mobileNavContent = true;
    },
    closeMobileMenu: (state) => {
      state.mobileNavContent = false;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = navSlice.actions;

export default navSlice.reducer;
