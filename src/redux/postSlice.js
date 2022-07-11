import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// write async logic using createAsyncThunk function from redux toolkit library

// createAsyncThunk dispatches lifecycle methods of a promise as actions meaning fetchPosts.pending, fetchPosts.fulfilled and fetchPosts.rejected

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return axios
    .get("http://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data.slice(0, 10));
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = [];
    });
  },
});

export default postSlice.reducer;
