import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const MyStore = configureStore({
  reducer: cartReducer,
});

export default MyStore;