import axios from "axios";
import Cookies from "js-cookie";
interface axiosPostResponse {
  message: string;
  user: string;
  jwtToken: string;
}
interface usernameGetResponse {
  username: string;
}

const apiClient = axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_PORT}/`,
});

export function registerUser(userData: object) {
  return apiClient.post<axiosPostResponse>("/users/register", userData);
}
export function loginUser(userData: object) {
  return apiClient.post<axiosPostResponse>("/users/login", userData);
}
export function getUsername(userId: string) {
  return apiClient.get<usernameGetResponse>(`/users/${userId}`);
}
export function SendSecretMessage(message: string, userId: string) {
  return apiClient.post(`/send/${userId}`, { secretMessage: message });
}
export function getSecretMessages() {
  const jwtCookie = Cookies.get("SMUser")!;
  const parsedCookie = JSON.parse(jwtCookie);
  const jwtToken = JSON.parse(jwtCookie as string).token;
  console.log("cookie: ", jwtCookie);
  console.log("parsedCookie: ", parsedCookie);
  console.log("jwtToken: ", jwtToken);
  return apiClient.get<string[]>("/messages", {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  });
}
