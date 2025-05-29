import useAuth from "./useAuth";
import { refreshAccessToken } from "../services/apiClients";

const useRefreshToken = () => {
  const { dispatch } = useAuth();
  const refresh = async () => {
    try {
      const response = await refreshAccessToken();
      const data = response.data;
      dispatch({ type: "LOGIN", payload: { accessToken: data.accessToken } });
      return data.accessToken;
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };
  return refresh;
};

export default useRefreshToken;
