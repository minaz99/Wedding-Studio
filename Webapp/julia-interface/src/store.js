import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, loginUser } from "./services/api/loginSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contractSlice } from "./services/api/contractSlice";
export const store = configureStore({
  reducer: {
    [loginSlice.reducerPath]: loginSlice.reducer,
    [contractSlice.reducerPath]: contractSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginSlice.middleware,
      contractSlice.middleware
    ),
});

setupListeners(store.dispatch);
