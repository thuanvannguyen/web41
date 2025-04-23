import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

const yummyStore = configureStore({
  reducer: rootReducer
})

export default yummyStore