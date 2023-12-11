import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//date
const calStartDate = new Date();
const calEndDate = new Date(calStartDate);
calEndDate.setDate(calStartDate.getDate() + 1);

interface TypesState {
  selectedOptionType: string;
  selectedOptionLocation: string;
  selectedTravelers: number;
  startDate: Date;
  endDate: Date;
  showOffer: boolean;
  showTypeOffer: boolean;
  showLocationOffer: boolean;
}

const initialState: TypesState = {
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
    selectType: (state, action: PayloadAction<string>) => {
      state.selectedOptionType = action.payload;
    },
    selectLocation: (state, action: PayloadAction<string>) => {
      state.selectedOptionLocation = action.payload;
    },
    selectTravelers: (state, action: PayloadAction<number>) => {
      state.selectedTravelers = action.payload;
    },
    selectStartDate: (state, { payload }) => {
      state.startDate = payload;
    },
    selectEndDate: (state, { payload }) => {
      state.endDate = payload;
    },
    showAllOffer: (state) => {
      state.showOffer = true;
      state.selectedOptionType = "";
      state.selectedOptionLocation = "";
    },
    hideAllOffer: (state) => {
      state.showOffer = false;
    },
    showType: (state) => {
      state.showTypeOffer = true;
    },
    hideType: (state) => {
      state.showTypeOffer = false;
    },
    showLocation: (state) => {
      state.showLocationOffer = true;
    },
    hideLocation: (state) => {
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
