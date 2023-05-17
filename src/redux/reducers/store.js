import { configureStore } from "@reduxjs/toolkit";
import categoryListReducer from "./categoryListSlice";

export const store = configureStore({
  reducer: {
    categoryList: categoryListReducer,
  },
  devTools: true,
});
