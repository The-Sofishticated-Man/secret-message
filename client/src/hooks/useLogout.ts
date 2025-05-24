import useAuth from "./useAuth";
import Cookies from "js-cookie";
export default function useLogout() {
  const { dispatch } = useAuth();

  const logOut = () => {
    Cookies.remove("SMUser");
    dispatch({ type: "LOGOUT", payload: null });
  };
  return logOut;
}
