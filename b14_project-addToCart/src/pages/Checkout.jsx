import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCart } from "../redux/cartSlice";

const Checkout = ({ isOpen }) => {
  const dispatch = useDispatch();

  const productStore = useSelector((state) => state.cartBuys);

  // Show object chua mang object
  const data = Object.values(productStore);

  if (isOpen == false) return null;
  return (
    <>
      {data.length === 0 ? (
        "Cart is Empty!"
      ) : (
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {data.map((product) => {
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
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => dispatch(decrementCart({ id: product.id }))}
                  >
                    --
                  </button>

                  <p>x{product.quantity}</p>
                  <button onClick={() => alert("2")}>++</button>
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

// Neu viet su kien truc tiep UI ma khong co arrow fn => gui len arrow fn doi so

// () => {} => gui arrow fn co doi so truyen vao
