import { useDispatch, useSelector } from "react-redux";
import { decrementFn, incrementFn } from "./redux/actions";

// Hien thi ra giao dien
const App = () => {
  const couter = useSelector((abc) => abc.aa.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementFn());
  };
  const handleDecrement = () => {
    dispatch(decrementFn());
  };

  return (
    <>
      <h1>{couter}</h1>
      <button onClick={handleIncrement}>Count++</button>
      <button onClick={handleDecrement}>Count--</button>
    </>
  );
};

export default App