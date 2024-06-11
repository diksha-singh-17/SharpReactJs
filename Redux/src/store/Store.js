import { createStore } from "redux";

const cartReducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") {
    return { count: state.count + 5 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 5 };
  }
  return state;
};
const store = createStore(cartReducer);

export default store;
