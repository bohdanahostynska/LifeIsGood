import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryList: [],
  isOpenBasket: false,
  quantity: 0,
  basketTotalAmount: 0,
  updatedItems: [],
  isOpenOrderMoreBasket: false,
  active: true,
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
    handleOpenBasket: (state, { payload }) => ({
      ...state,
      isOpenBasket: payload || !state.isOpenBasket,
    }),
    handleOrderMoreBasket: (state) => ({
      ...state,
      isOpenOrderMoreBasket: !state.isOpenOrderMoreBasket,
    }),
    handleItemBasket: (state, action) => {
      let index = state.categoryList.indexOf(action.payload);
      state.quantity -= action.payload;
      state.categoryList.splice(index, 1);
      state.categoryList = [...state.categoryList];
      const removeItem = state.categoryList.filter(
        (item) => item.id !== action.payload
      );
      state.categoryList = removeItem;
    },
    toggleSwitch: (state) => {
      state.active = !state.active;
    },
  },
});

export const {
  createCategoryList,
  clearCategoryList,
  handleOpenBasket,
  handleOrderMoreBasket,
  handleSearchClick,
  handleItemBasket,
  removeItem,
  toggleSwitch,
  toggleBasket,
} = categoryListSlice.actions;

export default categoryListSlice.reducer;
