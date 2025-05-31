import useAuth from "./useAuth";
import { refreshAccessToken } from "../services/apiClients";

const useRefreshToken = () => {
  const { dispatch } = useAuth();
  const refresh = async () => {
    try {
      console.log(`Refreshing access token...`);
      const response = await refreshAccessToken();
      const data = response.data;
      console.log("Refreshing token, new access token:", data.accessToken);
      dispatch({ type: "LOGIN", payload: { accessToken: data.accessToken } });
      return data.accessToken;
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };
  return refresh;
};

export default useRefreshToken;
