import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
];

const ListingProduct = ({setIsOpen}) => {
  const dispatch = useDispatch();

  const handleBuy = (item) => {
    dispatch(addToCart(item))
    setIsOpen(true)
  };

  return (
    <div className="product-listing">
      {products.map((item) => {
        return (
          <div className="product-item" key={item.id}>
            <span>{item.id}</span>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => handleBuy(item)}>Buy</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListingProduct;
