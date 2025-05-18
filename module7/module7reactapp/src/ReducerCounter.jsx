import { useReducer } from "react";

// Define reducer before using it
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function ReducerCounter() {
  // useReducer takes the reducer function and an initial state value (0)
  const [counter, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
    </div>
  );
}

export default ReducerCounter;