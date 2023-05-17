import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryList: [],
  isOpenBasket: false,
  isLoading: false,
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
    handleSearchClick: (state) => ({
      ...state,
      isLoading: !state.isLoading,
    }),
  },
});

export const {
  createCategoryList,
  handleOpenBasket,
  handleOrderMoreBasket,
  handleSearchClick,
} = categoryListSlice.actions;

export default categoryListSlice.reducer;
