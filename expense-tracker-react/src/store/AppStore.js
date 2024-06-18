import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../store/AuthReducer";
import ExpenseReducer from "../store/ExpenseReducer";

const appStore = configureStore({
  reducer: {
    auth: AuthReducer,
    expense: ExpenseReducer,
  },
});

export default appStore;
