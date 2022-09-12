const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../fetures/counter/counterSlice");

// configureStore 
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

module.exports = store;
