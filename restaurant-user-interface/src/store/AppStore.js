import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../store/AuthReducer";
import CartReducer from "./CartReducer";

const appStore = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: CartReducer,
  },
});

export default appStore;
