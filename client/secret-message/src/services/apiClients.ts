import axios from "axios";
import Cookies from "js-cookie";
interface axiosPostResponse {
  message: string;
  user: string;
  jwtToken: string;
  id: string;
}
interface usernameGetResponse {
  username: string;
}
export type secretMessagesType = {
  message: string;
  _id: string;
  date: Date;
};
export interface messagesGetResponse {
  secretMessages: secretMessagesType[];
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
export function DeleteMessage(key: string) {
  const jwtCookie = Cookies.get("SMUser")!;
  const jwtToken = JSON.parse(jwtCookie as string).token;
  return apiClient.delete(`/messages/${key}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
}
export function getSecretMessages() {
  const jwtCookie = Cookies.get("SMUser")!;
  const jwtToken = JSON.parse(jwtCookie as string).token;
  return apiClient.get<messagesGetResponse>("/messages", {
    headers: {
      Authorization: "Bearer " + jwtToken,
    },
  });
}
