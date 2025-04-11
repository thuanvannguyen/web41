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
  },
});

// Export action trong cartSlice => dung trong UI
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
