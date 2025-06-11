import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import log from "./loggingUtils";

const RequireAuth = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();

  log.debug("RequireAuth: isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    log.debug("RequireAuth: User is not authenticated, redirecting to login.");
    return <Navigate to="/login" />;
  } else {
    log.debug("RequireAuth: User is authenticated, rendering outlet.");
    return <Outlet />;
  }
};

export default RequireAuth;
