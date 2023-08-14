import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, loginUser } from "./services/api/loginSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contractSlice } from "./services/api/contractSlice";
import { componentSlice } from "./services/api/componentSlice";
import { packageSlice } from "./services/api/packageSlice";
export const store = configureStore({
  reducer: {
    [loginSlice.reducerPath]: loginSlice.reducer,
    [contractSlice.reducerPath]: contractSlice.reducer,
    [componentSlice.reducerPath]: componentSlice.reducer,
    [packageSlice.reducerPath]: packageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginSlice.middleware,
      contractSlice.middleware,
      componentSlice.middleware,
      packageSlice.middleware
    ),
});

setupListeners(store.dispatch);
