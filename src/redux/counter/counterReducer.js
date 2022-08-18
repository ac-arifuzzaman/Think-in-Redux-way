import { DECREMENT, INCREMENET } from "./actionTypes";

const initialState = {
  value: 200,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENET:
      return {
        ...state,
        value: state.value + 5,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 2,
      };

    default:
      return state;
  }
};

export default counterReducer;
