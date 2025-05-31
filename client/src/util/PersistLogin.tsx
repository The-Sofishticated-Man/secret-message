import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import LoadingSection from "../components/LoadingSection";
const PersistLogin = () => {
  const [isLoading, setLoading] = useState(true);
  const refresh = useRefreshToken();
  const {
    authState: { isAuthenticated },
  } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("PersistLogin: User is not authenticated, refreshing.");
      refresh()
        .then(() => {
          console.log("PersistLogin: Token refreshed successfully.");
        })
        .catch((error) => {
          console.error("PersistLogin: Error refreshing token:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, refresh]);

  return isLoading ? <LoadingSection /> : <Outlet />;
};

export default PersistLogin;
