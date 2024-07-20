import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ReactNode } from "react";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { authState } = useAuth();
  console.log("RequireAuth launched");

  console.log("Current authentication state is: ", authState);
  if (!authState.user) {
    console.log("navigate triggered");
    return <Navigate to="/users/login" />;
  } else {
    console.log("children rendered: ", children);
    return <>{children}</>;
  }
};

export default RequireAuth;
