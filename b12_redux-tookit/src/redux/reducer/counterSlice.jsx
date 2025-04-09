import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count", // Ten reducer slice
  initialState: {
    // Gia tri khoi tao cua slice
    count: 100,
  },
  reducers: {
    //INCREMENT Tu hieu actions
    INCREMENT(state, action) {
      // console.log("Gia tri state ban dau",state.count);
      // console.log("hanh dong gui len", action);

      return { count: state.count + action.payload };
    },
    DECREMENT(state, action) {
      // console.log(state.count);
      // console.log(action);
      return { count: state.count - action.payload };
    },
  },
});

// Export actions dung trong UI
// createSlice trong thu vien luon luon tra { actions, reducer }
export const { INCREMENT, DECREMENT } = countSlice.actions;

// Export reducer cua countSlice dung trong store
export default countSlice.reducer;
