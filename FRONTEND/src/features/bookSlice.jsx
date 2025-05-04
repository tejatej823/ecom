import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
  books: [],
  error: null,
  loading: false,
};

export const fetchBookData = createAsyncThunk(
  "book/fetchBookData",
  async () => {
    try {
      const response = await axios.get("http://localhost:8000/books/");
      console.log(response.data);
      return response.data;

    } catch (error) {
      throw error;
    }
  }
);
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookData.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        console.log(state.books);
      })
      .addCase(fetchBookData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default bookSlice.reducer;
