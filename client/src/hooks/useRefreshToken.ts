import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { refreshAccessToken } from "../services/apiClients";

const useRefreshToken = () => {
  const { dispatch } = useAuth();
  const query = useQuery({
    queryKey: ["refreshToken"],
    queryFn: async () => {
      const response = await refreshAccessToken();
      const data = response.data;
      dispatch({ type: "LOGIN", payload: { accessToken: data.accessToken } });
      console.log("Token refreshed successfully:", data.accessToken);
      return data.accessToken;
    },
    enabled: false,
    retry: false,
  });

  return { refresh: query.refetch, isLoading: query.isFetching };
};

export default useRefreshToken;
