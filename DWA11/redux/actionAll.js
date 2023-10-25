import { increment, decrement, reset } from "./actions"

// Creating action functions 
const actionAll = {
  createIncrementAction: (value) => increment(value),
  createDecrementAction: (value) => decrement(value),
  createResetAction: (value) => reset(value),
};

export default actionAll;
