import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./services/api/loginSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contractSlice } from "./services/api/contractSlice";
import { componentSlice } from "./services/api/componentSlice";
import { packageSlice } from "./services/api/packageSlice";
import { photographersSlice } from "./services/api/photographersSlice";
export const store = configureStore({
  reducer: {
    [loginSlice.reducerPath]: loginSlice.reducer,
    [contractSlice.reducerPath]: contractSlice.reducer,
    [componentSlice.reducerPath]: componentSlice.reducer,
    [packageSlice.reducerPath]: packageSlice.reducer,
    [photographersSlice.reducerPath]: photographersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginSlice.middleware,
      contractSlice.middleware,
      componentSlice.middleware,
      packageSlice.middleware,
      photographersSlice.middleware
    ),
});

setupListeners(store.dispatch);
