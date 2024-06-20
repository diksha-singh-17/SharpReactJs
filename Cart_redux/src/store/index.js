import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import sliceReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: sliceReducer,
  },
});

export default store;
