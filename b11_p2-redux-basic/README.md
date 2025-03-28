// Code cu trong 1 file

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

// Khoi tao gia tri ban dau
const initialState = {
  count: 0,
};

// Dinh nghia action type & action creator
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const incrementFn = () => {
  return { type: INCREMENT };
};

const decrementFn = () => {
  return { type: DECREMENT };
};

// Dinh nghia store & reducer
const counterReducer = (state = initialState, action) => {
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

const myStore = createStore(counterReducer);

// Hien thi ra giao dien
const App = () => {
  const couter = useSelector((state) => state);
  console.log(couter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementFn());
  };
  const handleDecrement = () => {
    dispatch(decrementFn());
  };

  return (
    <>
      <h1>{couter.count}</h1>
      <button onClick={handleIncrement}>Count++</button>
      <button onClick={handleDecrement}>Count--</button>
    </>
  );
};

// Khai bao store voi provider de tat ca component con co the dung no => Duoc dat o thanh phan cao nhat
createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <App />
  </Provider>
);




// Tach file: them import va export
// Flow Setup: 
// 0. Tao UI
// 1. action (type, action creator (function))
// 2. reducer => store
// 3. Khai bao provider
// 4. Vao UI => su dung useDispatch() va useSelector() thao tac Store