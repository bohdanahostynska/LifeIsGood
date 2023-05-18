import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryList: [],
  isOpenBasket: false,
  showItem: false,
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
  },
});

export const {
  createCategoryList,
  handleOpenBasket,
  handleOrderMoreBasket,
  handleSearchClick,
  clearBasket,
  removeItem,
  toggled,
} = categoryListSlice.actions;

export default categoryListSlice.reducer;
