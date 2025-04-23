import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api/authRequest";

// Tạo request login Thunk
export const loginThunk = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const res = await loginUser(email, password);
    return res;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false, // Lưu trữ trạng thái đăng nhập người dùng. (True / false)
    user: null, // Luu trữ trạng thái thông tin user
    error: null, // Lưu trữ lỗi khi người dùng đăng nhập từ server trả về.
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // Call thành công
      console.log("state fulfilled: ", JSON.parse(JSON.stringify(state)));
      console.log("action fulfilledk: ", action);
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      // Call thất bại
      console.log("state rejected: ", JSON.parse(JSON.stringify(state)));
      console.log("action rejectedk: ", action);
    });
  },
});

// Export các hành động người dùng -> UI sử dụng
export const { logout } = authSlice.actions;

// Export Reducer -> Thêm vào store
export default authSlice.reducer;
