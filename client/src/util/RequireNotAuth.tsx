import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireNotAuth = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();
  console.log("RequireNotAuth isAuthenticated:", isAuthenticated);
  return <>{isAuthenticated ? <Navigate to="/home" /> : <Outlet />}</>;
};

export default RequireNotAuth;
