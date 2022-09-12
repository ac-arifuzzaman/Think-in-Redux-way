const store = require("./app/store");
const { counterActions } = require("./fetures/counter/counterSlice");

// initial state
console.log(`initial state: ${JSON.stringify(store.getState())}`);
// subscrieb to state change
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());
