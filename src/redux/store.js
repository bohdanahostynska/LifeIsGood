import { configureStore } from "@reduxjs/toolkit";
import categoryListReducer from "./reducers/categoryListSlice";
import auth from "./reducers/authSlice";
export const store = configureStore({
  reducer: {
    categoryList: categoryListReducer,
    auth,
  },
  devTools: true,
});
