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
    setUserFromLocalStorage: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // Call thành công
      state.isAuth = true;
      state.user = action.payload;
      state.error = null;

      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      // Call thất bại
      state.isAuth = false;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

// Export các hành động người dùng -> UI sử dụng
export const { logout, setUserFromLocalStorage } = authSlice.actions;

// Export Reducer -> Thêm vào store
export default authSlice.reducer;