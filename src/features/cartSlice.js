import { createSlice } from "@reduxjs/toolkit";
import { toursApi } from "../services/toursApi";

const initialState = {
  tours: [],
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemToAdd = state.tours.find((item) => item._id === payload);
      itemToAdd.amount = 1;
      itemToAdd.totalPrice = itemToAdd.amount * itemToAdd.price;
      state.cart = [...state.cart, itemToAdd];
    },
    removeFromCart: (state, { payload }) => {
      const updatedCart = state.cart.filter((item) => item._id !== payload);
      state.cart = updatedCart;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
    increase: (state, { payload }) => {
      const product = state.cart.find((item) => item._id === payload);
      product.amount += 1;
      product.priceTotal = product.price * product.amount;
    },
    decrease: (state, { payload }) => {
      const product = state.cart.find((item) => item._id === payload);
      product.amount -= 1;
    },
    calcTotals: (state, { payload }) => {
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
        state.tours = payload.data.data;
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
