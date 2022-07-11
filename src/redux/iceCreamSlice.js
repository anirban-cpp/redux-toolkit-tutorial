import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecreams: 20,
};

const IcecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    buyIcecream: (state) => {
      state.numOfIcecreams -= 2;
    },
    restockIcecreams: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
});

export const { buyIcecream, restockIcecreams } = IcecreamSlice.actions;

export default IcecreamSlice.reducer;
