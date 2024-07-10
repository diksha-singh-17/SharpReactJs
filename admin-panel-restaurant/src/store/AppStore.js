import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../store/AuthReducer";

const appStore = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default appStore;
