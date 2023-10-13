import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { toursApi } from "./services/toursApi";

import searchTabReducer from "./features/searchTabSlice";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    [toursApi.reducerPath]: toursApi.reducer,
    searchTab: searchTabReducer,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(toursApi.middleware),
});

setupListeners(store.dispatch);
