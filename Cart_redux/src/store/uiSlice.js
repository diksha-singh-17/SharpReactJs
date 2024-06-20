import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartVisible: false,
  },
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const { toggleCart } = uiSlice.actions;
export default uiSlice.reducer;
