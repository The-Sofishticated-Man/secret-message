import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import log from "./loggingUtils";

const RequireNotAuth = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();
  log.debug("RequireNotAuth isAuthenticated:", isAuthenticated);
  return <>{isAuthenticated ? <Navigate to="/home" /> : <Outlet />}</>;
};

export default RequireNotAuth;
