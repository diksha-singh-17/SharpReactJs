import { createSlice } from "@reduxjs/toolkit";

// const initialState = [{ amount: "123", category: "jamun", desc: "food" }];
const initialState = { movie: null, isPremium: null };
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense(state, action) {
      // state.unshift(action.payload);
      state.movie = action.payload;
    },
    addPremium(state, action) {
      state.isPremium = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
