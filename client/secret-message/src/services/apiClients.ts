import axios from "axios";
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
  return apiClient.post<axiosPostResponse>("/users/register/", userData);
}
export function loginUser(userData: object) {
  return apiClient.post<axiosPostResponse>("/users/login", userData);
}
export function getUsername(userId: string) {
  return apiClient.get<usernameGetResponse>("/users/" + userId);
}
export function SendSecretMessage(message: string, userId: string) {
  return apiClient.post("/send/" + userId, { secretMessage: message });
}
