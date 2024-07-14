import useAuth from "./useAuth";

export default function useLogout() {
  const { dispatch } = useAuth();

  const logOut = () => {
    dispatch({ type: "LOGOUT", payload: null });
    localStorage.removeItem("SMUser");
  };
  return logOut;
}
