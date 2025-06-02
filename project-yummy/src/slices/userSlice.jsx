import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Call User => GET
export const getUser = createAsyncThunk("user/getUser", async () => {
  const response = await fetch("http://localhost:3001/users");
  return response.json();
});

// Add User => POST
export const addUser = createAsyncThunk("user/addUser", async (data) => {
  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  // console.log(response.json());
  return response.json();
});

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET USER: getUser();
    builder.addCase(getUser.fulfilled, (state, action) => {
      // console.log("Gia tri (State) ban dau", JSON.parse(JSON.stringify(state)));
      // console.log("gia tri sau khi call thanh cong", action);
      state.users = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.messanger;
    });

    // POST USER: add();
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default userSlice.reducer;
