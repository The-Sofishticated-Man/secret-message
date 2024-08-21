import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ReactNode } from "react";
import useLogout from "../hooks/useLogout";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { authState } = useAuth();
  const logout = useLogout();

  console.log("Current authentication state is: ", authState);
  if (!authState.user) {
    logout();
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default RequireAuth;
