import { logoutuser } from "../services/privateApiClients";
import useAuth from "./useAuth";
export default function useLogout() {
  const { dispatch } = useAuth();

  const logOut = () => {
    logoutuser()
      .then(() => {
        console.log("User logged out successfully");
        dispatch({ type: "LOGOUT" });
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };
  return logOut;
}
