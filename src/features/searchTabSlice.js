import { createSlice } from "@reduxjs/toolkit";

//date
const calStartDate = new Date();
const calEndDate = new Date(calStartDate);
calEndDate.setDate(calStartDate.getDate() + 1);

const initialState = {
  selectedOptionType: "",
  selectedOptionLocation: "",
  selectedTravelers: 1,
  startDate: calStartDate,
  endDate: calEndDate,
  showOffer: true,
  showTypeOffer: false,
  showLocationOffer: false,
};

const searchTabSlice = createSlice({
  name: "searchTab",
  initialState,
  reducers: {
    selectType: (state, { payload }) => {
      state.selectedOptionType = payload;
    },
    selectLocation: (state, { payload }) => {
      state.selectedOptionLocation = payload;
    },
    selectTravelers: (state, { payload }) => {
      state.selectedTravelers = payload;
    },
    selectStartDate: (state, { payload }) => {
      state.startDate = payload;
    },
    selectEndDate: (state, { payload }) => {
      state.endDate = payload;
    },
    showAllOffer: (state, action) => {
      state.showOffer = true;
      state.selectedOptionType = "";
      state.selectedOptionLocation = "";
    },
    hideAllOffer: (state, action) => {
      state.showOffer = false;
    },
    showType: (state, action) => {
      state.showTypeOffer = true;
    },
    hideType: (state, action) => {
      state.showTypeOffer = false;
    },
    showLocation: (state, action) => {
      state.showLocationOffer = true;
    },
    hideLocation: (state, action) => {
      state.showLocationOffer = false;
    },
  },
});

export const {
  selectType,
  selectLocation,
  selectTravelers,
  selectStartDate,
  selectEndDate,
  showAllOffer,
  hideAllOffer,
  showType,
  hideType,
  showLocation,
  hideLocation,
} = searchTabSlice.actions;

export default searchTabSlice.reducer;
