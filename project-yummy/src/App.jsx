import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/Login";
import HomePage from "./pages/home";
import LayoutPage from "./pages/layout";
import Dashboad from "./pages/dashboard";
import NotFound from "./pages/auth/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { setUserFromLocalStorage } from "./slices/authSlice";
import LayoutDashboard from "./pages/layout/Dashboard";

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuth);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      dispatch(setUserFromLocalStorage(parsedUser));
    }
  }, []);
  return isAuthenticated || !!localStorage.getItem("user");
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          /> */}
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <LayoutDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboad />} />
          <Route path="test" element={<p>Test</p>} />
          <Route path="*" element={<p>404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// const Admin = () => {
//   return (
//     <Routes>
//       <Route index element={<Dashboad />} />
//       <Route path="test" element={<p>Test</p>} />
//       <Route path="*" element={<p>404</p>} />
//     </Routes>
//   );
// };

export default App;
