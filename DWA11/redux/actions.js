/* eslint-disable object-shorthand */
// Declaring types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const increment = (value) => ({
    value: value,
    type: INCREMENT,
});

const decrement = (value) => ({
    value: value,
    type: DECREMENT,
});

const reset = (value) => ({
    value: value,
    type: RESET,
});

export { INCREMENT, DECREMENT, RESET, increment, decrement, reset };
