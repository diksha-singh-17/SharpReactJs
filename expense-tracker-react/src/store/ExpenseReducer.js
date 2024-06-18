import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ amount: "123", category: "jamun", desc: "food" }];
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense(state, action) {
      state.unshift(action.payload);
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
