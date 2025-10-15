import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authuser, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex justify-center bg-white items-center text-2xl text-purple-600">
        Loading...
      </div>
    );
  }

  return authuser ? children ? children : <Outlet/> : <Navigate to="/login" />;
};

export default ProtectedRoute;
