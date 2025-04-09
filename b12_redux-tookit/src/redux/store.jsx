import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

const myStore = configureStore({
  reducer: rootReducer,
});

export default myStore;
