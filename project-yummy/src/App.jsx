import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/Login";
import NotFound from "./pages/auth/NotFound";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Dashboad from "./pages/dashboard";
import HomePage from "./pages/home";
import LayoutPage from "./pages/layout";
import DashboardLayout from "./pages/layout/Dashboard";
import User from "./pages/dashboard/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboad />} />
          <Route path="user" element={<User/>} />
          <Route path="*" element={<p>404 NotFound</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
