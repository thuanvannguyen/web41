import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute