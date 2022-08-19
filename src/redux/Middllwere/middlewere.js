import rootReducer from "../rootReducer";

const myLoger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upomingState = [action].reduce(rootReducer, store.getState());
  console.log(`upomingState: ${JSON.stringify(upomingState)}`);
  // pass action after work done
  return next(action);
};

export default myLoger;