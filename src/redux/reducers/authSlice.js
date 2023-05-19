import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
  fetchedLoginData: null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: "authAPI",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
  },
});

export const { setLoading } = authSlice.actions;

export default authSlice.reducer;
