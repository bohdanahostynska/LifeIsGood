import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryList: [],
  isOpenBasket: false,
};
const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {
    createCategoryList: (state, action) => ({
      ...state,
      categoryList: [...state.categoryList, action.payload],
    }),
    handleOpenBasket: (state) => ({
      ...state,
      isOpenBasket: !state.isOpenBasket,
    }),
    handleOrderMoreBasket: (state) => ({
      ...state,
      isOpenOrderMoreBasket: !state.isOpenOrderMoreBasket,
    }),
  },
});

export const { createCategoryList, handleOpenBasket, handleOrderMoreBasket } =
  categoryListSlice.actions;

export default categoryListSlice.reducer;
