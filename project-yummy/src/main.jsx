import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import yummyStore from "./store.js";

// Slider
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Font-Family
import "@fontsource/roboto";
import "@fontsource/unbounded";

// Icon
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById("root")).render(
  <Provider store={yummyStore}>
    <App />
  </Provider>
);
