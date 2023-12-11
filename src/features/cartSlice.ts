import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { toursApi } from "../services/toursApi";
import { Tour } from "../models/tour";

interface TypesState {
  tours: Tour[];
  cart: Tour[];
  totalPrice: number;
}

const initialState: TypesState = {
  tours: [],
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const itemToAdd = state.tours.find(
        (item: Tour) => item._id === action.payload
      );
      if (itemToAdd) {
        itemToAdd.amount = 1;
        itemToAdd.totalPrice = itemToAdd.amount * itemToAdd.price;
        state.cart = [...state.cart, itemToAdd];
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const updatedCart = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = updatedCart;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increase: (state, action: PayloadAction<string>) => {
      const product = state.cart.find((item) => item._id === action.payload);
      if (product) {
        product.amount += 1;
        product.priceTotal = product.price * product.amount;
      }
    },
    decrease: (state, action: PayloadAction<string>) => {
      const product = state.cart.find((item) => item._id === action.payload);
      if (product) {
        product.amount -= 1;
      }
    },
    calcTotals: (state) => {
      const calcTotals = state.cart
        .map((item) => item.totalPrice * item.amount)
        .reduce((acc, cur) => acc + cur, 0);
      state.totalPrice = calcTotals;
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

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increase,
  decrease,
  calcTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
