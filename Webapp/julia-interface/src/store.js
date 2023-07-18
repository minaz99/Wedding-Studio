import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, loginUser } from "./services/api/loginSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [loginSlice.reducerPath]: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginSlice.middleware),
});

setupListeners(store.dispatch);
