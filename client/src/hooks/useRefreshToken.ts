import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { refreshAccessToken } from "../services/apiClients";

const useRefreshToken = () => {
  const { dispatch } = useAuth();
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await refreshAccessToken();
      const data = response.data;
      return data.accessToken;
    },
    onSuccess: (accessToken) => {
      dispatch({ type: "LOGIN", payload: { accessToken: accessToken } });
      console.log("Token refreshed successfully:", accessToken);
    },
    onError: (error) => {
      console.error("Error refreshing token:", error);
    },
  });

  return {refresh: mutation.mutate, isLoading: mutation.isPending};
};

export default useRefreshToken;
