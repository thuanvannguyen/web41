import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // console.log(count)
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>Count ++</button>
    </>
  );
};

export default App;
