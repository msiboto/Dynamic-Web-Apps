// Creates an function that returns an object that adds additional functionality
// eslint-disable-next-line import/prefer-default-export
export function createStore(reducer) {
        let state;
        const listeners = [];
  
       function getState() {
        return state;
    }
  
       function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    }
  
       function subscribe(listener) {
        listeners.push(listener);
    }
    // creating the initial state
    dispatch({});
    return { getState, dispatch, subscribe };
  }
  