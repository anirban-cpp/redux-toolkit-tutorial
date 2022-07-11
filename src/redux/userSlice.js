import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersRequest: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    },
    getUsersFailure: (state, action) => {
      state.users = [];
      state.loading = true;
      state.error = action.payload;
    },
  },
});

export const { getUsersRequest, getUsersSuccess, getUsersFailure } =
  userSlice.actions;

export default userSlice.reducer;
