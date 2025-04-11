import React, { useState } from "react";
import ListingProduct from "./pages/ListingProduct";
import Header from "./component/Header";
import Checkout from "./pages/Checkout";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCheckout = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header toggleCheckout={toggleCheckout} />
      <ListingProduct setIsOpen={setIsOpen}  />
      <Checkout isOpen={isOpen}/>
    </>
  );
};

export default App;
