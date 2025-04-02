import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  aa: counterReducer,
  bb: cartReducer,
});