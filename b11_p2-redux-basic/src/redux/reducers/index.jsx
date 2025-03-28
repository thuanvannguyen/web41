import { DECREMENT, INCREMENT } from "../actions/types";

// Khoi tao gia tri ban dau
const initialState = {
  count: 0,
};

// Dinh nghia store & reducer
export const counterReducer = (state = initialState, action) => {
  // console.log("state: ", state);
  // console.log("action: ", action);

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};