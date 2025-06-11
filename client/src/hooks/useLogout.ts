import { useNavigate } from "react-router-dom";
import { logoutuser } from "../services/privateApiClients";
import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";
import log from "../util/loggingUtils";

export default function useLogout() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const privateApiClient = useAxiosPrivate();
  const logoutMutation = useMutation({
    mutationFn: () => logoutuser(privateApiClient),
    onSuccess: () => {
      dispatch({ type: "LOGOUT" });
      log.debug("Logout successful");
      log.debug("Redirecting to home page...");
      navigate("/", { replace: true });
    },
    onError: (error: any) => {
      console.error("Logout error:", error);
    },
  });

  return { isLoading: logoutMutation.isPending, logOut: logoutMutation.mutate };
}
