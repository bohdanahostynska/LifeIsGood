import { configureStore } from "@reduxjs/toolkit";
import categoryListReducer from "./categoryListSlice";
import auth from "./authSlice";
export const store = configureStore({
  reducer: {
    categoryList: categoryListReducer,
    auth,
  },
  devTools: true,
});
