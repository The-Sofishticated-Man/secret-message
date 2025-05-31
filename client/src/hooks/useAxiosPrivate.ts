import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import { privateApiClient } from "../services/privateApiClients";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const {
    authState: { accessToken },
  } = useAuth();
  useEffect(() => {
    const requestInterceptor = privateApiClient.interceptors.request.use(
      (config) => {
        console.log("Axios request interceptor triggered");
        console.log(
          accessToken ? "Access token is present" : "No access token found"
        );
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseInterceptor = privateApiClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          console.log(
            "Axios response interceptor triggered: 403 error, refreshing token"
          );
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          console.log("got new access token",newAccessToken);
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return privateApiClient(prevRequest);
        }
      }
    );
    return () => {
      privateApiClient.interceptors.request.eject(requestInterceptor),
        privateApiClient.interceptors.response.eject(responseInterceptor);
    };
  });
  return privateApiClient;
};

export default useAxiosPrivate;
