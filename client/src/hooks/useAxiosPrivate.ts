import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import { baseURL } from "../services/privateApiClients";
import axios from "axios";

const useAxiosPrivate = () => {
  const privateApiClient = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true, // This allows cookies to be sent with requests
  });
  const refresh = useRefreshToken();
  const {
    authState: { accessToken },
  } = useAuth();
  useEffect(() => {
    const requestInterceptor = privateApiClient.interceptors.request.use(
      (config) => {
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
          prevRequest.sent = true;
          const newAccessToken = await refresh();
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
