import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./redux/reducer/counterSlice";

const App = () => {
  // Lay state tu store
  // const count = useSelector((state) => console.log(state));
  const count = useSelector((state) => state.web41Count.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(INCREMENT(20))
  }

  const handleDecrement = () => {
    dispatch(DECREMENT(40))
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Count ++</button>
      <button onClick={handleDecrement}>Count --</button>
    </>
  );
};

export default App;
