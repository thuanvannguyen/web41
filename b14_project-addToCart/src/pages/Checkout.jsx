import React from "react";
import { useSelector } from "react-redux";

const Checkout = ({ isOpen }) => {
  const productStore = useSelector((state) => state.cartBuys);

  // Show object chua mang object
  const data = Object.values(productStore);
  // console.log(data);

  if (isOpen == false) return null;
  return (
    <>
      {data.length === 0 ? (
        "Cart is Empty!"
      ) : (
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {data.map((product) => {
            console.log(product);
            return (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "20px 30px",
                  width: "100%",
                }}
              >
                <h3>Checkout page</h3>
                <span>{product.id}</span>
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
                <div style={{display: "flex", gap: "10px"}}>
                  <button>--</button>
                  <p>x{product.quantity}</p>
                  <button>++</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Checkout;
