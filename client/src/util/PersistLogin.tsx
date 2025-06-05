import { useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import LoadingSection from "../components/LoadingSection";
const PersistLogin = () => {
  const { refresh, isLoading } = useRefreshToken();
  const {
    authState: { isAuthenticated },
  } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("PersistLogin: User is not authenticated, refreshing.");
      refresh();
    }
  }, [isAuthenticated, refresh]);

  return isLoading ? <LoadingSection /> : <Outlet />;
};

export default PersistLogin;
