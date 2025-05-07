import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";

import 'bootstrap-icons/font/bootstrap-icons.css';


// Font Family
import "@fontsource/roboto";
import "@fontsource/unbounded";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Redux Store
import yummyStore from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={yummyStore}>
    <App />
  </Provider>
);
