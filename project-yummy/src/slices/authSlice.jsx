import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api/authRequest";

// Tạo request login Thunk - khai bao va duoc goi toi call api
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
  
  // sau khi call api xong tra ve ket qua
  extraReducers: (builder) => {

    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // Call thành công
      // console.log("state fulfilled: ", JSON.parse(JSON.stringify(state)));
      // console.log("action fulfilledk: ", action);

      state.isAuth = true;
      state.user = action.payload;
      state.error = null;

      // Luu lai xu ly th nguoi dung dang nhap vao roi k can danh nhap nua
      localStorage.setItem("user", JSON.stringify(action.payload));

    });

    builder.addCase(loginThunk.rejected, (state, action) => {
      // Call thất bại
      // console.log("state rejected: ", JSON.parse(JSON.stringify(state)));
      // console.log("action rejectedk: ", action);

      state.isAuth = false;
      state.user = null;
      state.error = action.message;

    });
  },
});

// Export các hành động người dùng -> UI sử dụng
export const { logout , setUserFromLocalStorage } = authSlice.actions;

// Export Reducer -> Thêm vào store
export default authSlice.reducer;
