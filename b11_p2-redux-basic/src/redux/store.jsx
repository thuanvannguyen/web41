import { createStore } from "redux";
import { counterReducer } from "./reducers";

export const myStore = createStore(counterReducer);
