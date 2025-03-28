import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { myStore } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <App />
  </Provider>
);