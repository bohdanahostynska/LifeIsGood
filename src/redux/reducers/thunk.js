import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchedLoginData = createAsyncThunk(
  "data/ data ",
  async (arg, thunkAPI) => {
    try {
      const response = await fetch();
      const json = await response.json();
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
