import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/Login";
import HomePage from "./pages/home";
import LayoutPage from "./pages/layout";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
