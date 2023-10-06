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
  },
});

export const {
  selectType,
  selectLocation,
  selectTravelers,
  selectStartDate,
  selectEndDate,
} = searchTabSlice.actions;

export default searchTabSlice.reducer;
