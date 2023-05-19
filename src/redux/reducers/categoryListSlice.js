import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryList: [],
  isOpenBasket: false,
  isVisibleItem: false,
  quantity: 0,
  basketTotalAmount: 0,
  updatedItems: [],
  isOpenOrderMoreBasket: false,
};
const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {
    createCategoryList: (state, action) => ({
      ...state,
      categoryList: [...state.categoryList, action.payload],
    }),
    clearCategoryList: (state) => ({
      ...state,
      categoryList: [],
    }),
    handleOpenBasket: (state) => ({
      ...state,
      isOpenBasket: !state.isOpenBasket,
    }),
    handleOrderMoreBasket: (state) => ({
      ...state,
      isOpenOrderMoreBasket: !state.isOpenOrderMoreBasket,
    }),
    handleItemBasket: (state) => ({
      ...state,
      isVisibleItem: !state.isVisibleItem,
    }),
  },
});

export const {
  createCategoryList,
  handleOpenBasket,
  handleOrderMoreBasket,
  handleSearchClick,
  handleItemBasket,
} = categoryListSlice.actions;

export default categoryListSlice.reducer;
