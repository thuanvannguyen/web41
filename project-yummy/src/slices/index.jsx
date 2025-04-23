import { combineSlices } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const rootReducer = combineSlices({
  user: authReducer,
});

export default rootReducer;

// File Index -> Gộp toàn bộ các slice trong dự án về 1 slice chính -> rootReducer
