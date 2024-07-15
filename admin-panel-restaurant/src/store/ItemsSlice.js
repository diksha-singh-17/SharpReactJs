import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "items",
  initialState: { categoryLength: 0, recipeLength: 0, ordersLength: 0 },
  reducers: {
    setCategoryLength: (state, action) => {
      state.categoryLength = action.payload;
    },
    setRecipeLength: (state, action) => {
      state.recipeLength = action.payload;
    },
    setOrdersLength: (state, action) => {
      state.ordersLength = action.payload;
    },
  },
});

export const {
  setCategoryLength,
  setRecipeLength,
  setOrdersLength,
  categoryLength,
  recipeLength,
  ordersLength,
} = ItemsSlice.actions;
export default ItemsSlice.reducer;
