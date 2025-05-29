import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const RequireAuth = () => {
  const { authState: { isAuthenticated } } = useAuth();
  const logout = useLogout();

  console.log("Current authentication state is: ", isAuthenticated);
  if (!isAuthenticated) {
    logout();
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default RequireAuth;
