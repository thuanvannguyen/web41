import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/Login";
import HomePage from "./pages/home";
import LayoutPage from "./pages/layout";
import Dashboad from "./pages/dashboard";
import NotFound from "./pages/auth/NotFound";
import ProtectedRoute from "./pages/auth/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />


          <Route path="/login" element={<LoginPage />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboad />
            </ProtectedRoute>
            } />


          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
