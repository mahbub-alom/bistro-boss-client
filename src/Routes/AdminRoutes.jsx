import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
    const { user, loading } = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
