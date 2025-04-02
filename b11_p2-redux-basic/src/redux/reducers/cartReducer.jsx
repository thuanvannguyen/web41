const initialSate = {
  cart: 0,
};

export const cartReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "BUY":
      return {
        ...state,
        cart: 10,
      };
    default:
      return state;
  }
};
