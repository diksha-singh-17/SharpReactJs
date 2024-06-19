import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, token: null, theme: "light" };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    token(state, action) {
      state.token = action.payload;
    },
    toggleTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
