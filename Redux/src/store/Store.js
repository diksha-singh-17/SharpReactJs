import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// const cartReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { count: state.count + 5, showCounter: state.showCounter };
//   }
//   if (action.type === "increBy3") {
//     return {
//       count: state.count + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { count: state.count - 5, showCounter: state.showCounter };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       count: state.count,
//     };
//   }
//   return state;
// };
// configureStore-- for multiple reducers function
// createStore-- for single reducer function
const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;

export default store;
