import { combineReducers } from "@reduxjs/toolkit";
import countSlice from "./counterSlice"

export const rootReducer = combineReducers({
  web41Count: countSlice,
});
