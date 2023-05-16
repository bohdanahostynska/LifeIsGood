import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryList: [],
};
const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
});

export default categoryListSlice.reducer;
