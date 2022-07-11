import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state) => {
      state.numOfCakes -= 1;
    },
    restockCakes: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { buyCake, restockCakes, buyCakeFree } = cakeSlice.actions;

export default cakeSlice.reducer;
