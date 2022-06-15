import { configureStore } from "@reduxjs/toolkit";
import productsReducers from "./reducers/productsReducers";
import settingsReducers from "./reducers/settingsReducers";

export const store = configureStore({
  reducer: {
    settings: settingsReducers,
    products: productsReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
