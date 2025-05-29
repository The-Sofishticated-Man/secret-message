import axios from "axios";
interface authTokenResponse {
  accessToken: string;
}
interface usernameGetResponse {
  username: string;
}

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:";
const backendPort = import.meta.env.VITE_BACKEND_PORT || "";
const baseURL = backendUrl + backendPort;

export const apiClient = axios.create({
  baseURL,
});

export const privateApiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // This allows cookies to be sent with requests
});

export function registerUser(userData: object) {
  return apiClient.post<authTokenResponse>("/register", userData);
}
export function loginUser(userData: object) {
  return apiClient.post<authTokenResponse>("/login", userData);
}
export function getUsername(userId: string) {
  console.log("getting username for:", userId);
  return apiClient.get<usernameGetResponse>(`/users/${userId}`);
}
export function SendSecretMessage(message: string, userId: string) {
  return apiClient.post(`/send/${userId}`, { secretMessage: message });
}

// This function is used to refresh the access token
export function refreshAccessToken() {
  return apiClient.get<authTokenResponse>("/refresh", {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true, // This allows cookies to be sent with requests
  });
}
