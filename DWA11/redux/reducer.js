/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
import { INCREMENT, DECREMENT, RESET } from "./actions";

const initialState = {
  count: 0,
};

// Creating a reducer which takes the state and the "order" from actions on how to mutate the state
// eslint-disable-next-line default-param-last
export function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + parseInt(action.value) };
    case DECREMENT:
      return { ...state, count: state.count - parseInt(action.value) };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
