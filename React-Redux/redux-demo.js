const redux = require("redux");

const countReducer = (state = { count: 0 }, action) => {
  if (action.type === "decrement") return { count: state.count - 1 };
  return { count: state.count + 1 };
};

const store = redux.createStore(countReducer);
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
