import { logoutuser } from "../services/privateApiClients";
import useAuth from "./useAuth";
export default function useLogout() {
  const { dispatch } = useAuth();

  const logOut = () => {
    logoutuser()
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };
  return logOut;
}
