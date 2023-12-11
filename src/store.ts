import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { toursApi } from "./services/toursApi";
import searchTabReducer from "./features/searchTabSlice";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";
import navReducer from "./features/navSlice";
import bookmarkReducer from "./features/bookmarksSlice";

export const store = configureStore({
  reducer: {
    [toursApi.reducerPath]: toursApi.reducer,
    searchTab: searchTabReducer,
    cart: cartReducer,
    auth: authReducer,
    nav: navReducer,
    bookmark: bookmarkReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(toursApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
