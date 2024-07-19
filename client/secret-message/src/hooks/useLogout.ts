import useAuth from "./useAuth";
import Cookies from "js-cookie";
export default function useLogout() {
  const { dispatch } = useAuth();

  const logOut = () => {
    dispatch({ type: "LOGOUT", payload: null });
    Cookies.remove("SMUser");
    location.href = "/";
  };
  return logOut;
}
