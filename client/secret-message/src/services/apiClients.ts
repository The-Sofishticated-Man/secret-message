import axios from "axios";
interface axiosPostResponse {
  message: string;
  user: string;
  jwtToken: string;
}
const apiClient = axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_PORT}/`,
});

export function registerUser(userData: object) {
  return apiClient.post<axiosPostResponse>("/user/register/", userData);
}
export function loginUser(userData: object) {
  return apiClient.post<axiosPostResponse>("/user/login", userData);
}
