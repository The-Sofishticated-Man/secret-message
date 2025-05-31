import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();

  console.log("RequireAuth: isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    console.log(
      "RequireAuth: User is not authenticated, redirecting to login."
    );
    return <Navigate to="/login" />;
  } else {
    console.log("RequireAuth: User is authenticated, rendering outlet.");
    return <Outlet />;
  }
};

export default RequireAuth;
