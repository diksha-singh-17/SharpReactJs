import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import ItemsReducer from "./ItemsSlice";

const appStore = configureStore({
  reducer: {
    auth: AuthReducer,
    item: ItemsReducer,
  },
});

export default appStore;
