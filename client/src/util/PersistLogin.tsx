import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import LoadingSection from "../components/LoadingSection";

const PersistLogin = () => {
  const { refresh, isLoading } = useRefreshToken();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      refresh().finally(() => setChecked(true));
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, refresh]);

  if (!checked || isLoading) return <LoadingSection />;
  return <Outlet />;
};

export default PersistLogin;
