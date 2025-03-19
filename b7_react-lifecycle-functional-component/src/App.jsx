import React, { useEffect, useState } from "react";
import Child from "./Child";

const App = () => {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Event: Su kien
  const handleCount = () => {
    setCount(count + 1);
  };

  const handleToggle = () => {
    setShow(!show);
  }


  // Quan ly lifecycal Component
  useEffect(() => {
    console.log("Component Mouting or Updating");

    return(() => {
      console.log("Unmouting ....")
    })
    
  }, []);

  console.log("re-render");
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={handleCount}>Count ++</button>
      <br/>
      <button onClick={handleToggle}>Show or Hidden</button>

      {show == true && <Child/>}
    </React.Fragment>
  );
};

export default App;

// sau dau "," useEffect => goi la dependencies => quan ly so lan goi toi  useEffect() bao nhieu lan
// Dependencies nhan vao 3 gia tri
// + [ ] => useEffect duoc goi 1 lan duy nhat sau khi component render, load lai trang => Mouting

// => Updating
// + Khong truyen gi vao => useEffect duoc goi sau lan component re-render
// + [a] => useEffect duoc goi khi GT "a" bi thay doi

// Unmouting => phan return truoc dependencies useEffect 


// Unmouting 



// C2
// setCount((a) => {
//   // console.log(a);
//   return a + 1;
// } )
// setCount((prev) => prev + 1)
