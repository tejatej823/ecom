import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  books: [],
  error: null,
  loading: false,
};

export const fetchBookData = createAsyncThunk(
  "book/fetchBookData",
  async () => {
    try {
      const response = await fetch("http://localhost:8000/books/");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const formData = action.payload;
      state.push(formData);
    },
  extraReducers:(builder)=>{
    builder.addCase(fetchBookData.pending,(state)=>{
      state.loading=true;
    })
    .addCase(fetchBookData.fulfilled,(state,action)=>{
      state.loading=false;
      state.books=action.payload;
      console.log(state.books);
    })
    .addCase(fetchBookData.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message;
    })
  }
  },
});
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
