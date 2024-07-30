import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ReactNode } from "react";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { authState } = useAuth();
  console.log("Current authentication state is: ", authState);
  if (!authState.user) {
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default RequireAuth;
