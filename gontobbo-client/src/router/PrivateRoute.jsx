import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth"; // adjust path if needed
import Spinner from "../pages/shared/Spinner"; // optional loading state

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Spinner />;

  if (!user) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
