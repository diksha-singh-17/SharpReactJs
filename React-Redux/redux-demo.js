const redux = require("redux");

const countReducer = (state = { count: 0 }, action) => {
  if (action.type === "decrement") return { count: state.count - 2 };
  return { count: state.count + 2 };
};

const store = redux.createStore(countReducer);
console.log(store.getState());
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
