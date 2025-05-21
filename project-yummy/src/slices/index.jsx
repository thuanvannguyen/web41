import { combineSlices } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import listUserReducer from "./userSlice";

const rootReducer = combineSlices({
  user: authReducer,
  listUser: listUserReducer
});

export default rootReducer;

// File Index -> Gộp toàn bộ các slice trong dự án về 1 slice chính -> rootReducer
