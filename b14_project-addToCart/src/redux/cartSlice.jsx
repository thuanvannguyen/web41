import { createSlice } from "@reduxjs/toolkit";

// Khai bao cartSlice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartBuys: {},
    cartCount: 0, // goi tu trong nay ra
  },
  reducers: {
    addToCart(state, action) {
      // id san pham gui len
      const cartId = action.payload.id;

      if (!state.cartBuys[cartId]) {
        state.cartBuys[cartId] = { ...action.payload, quantity: 1 };
      } else {
        state.cartBuys[cartId].quantity += 1;
      }
    },
    incrementCart(state, action) {
      console.log("state increment", JSON.parse(JSON.stringify(state)));
      console.log("action increment", action);
    },
    decrementCart(state, action) {

      // lay id => Biet giam so luong cua san pham nao ?
      const cartId = action.payload.id; 

      if(state.cartBuys[cartId].quantity > 1) {
        state.cartBuys[cartId].quantity -= 1;
      }else {
        delete state.cartBuys[cartId];
      }

    },
  },
});

// Export action trong cartSlice => dung trong UI
export const { addToCart, incrementCart, decrementCart } = cartSlice.actions;
export default cartSlice.reducer;


// decrementCart => giam so luong quantity
// incrementCart => tang so luong qunatity