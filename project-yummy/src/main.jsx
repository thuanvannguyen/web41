import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/main.css";
import { Provider } from "react-redux";

// Slider
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import yummyStore from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={yummyStore}>
    <App />
  </Provider>
);
