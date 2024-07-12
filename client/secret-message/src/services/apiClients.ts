import axios from "axios";
const apiClient = axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_PORT}/`,
});

export function registerUser(userData: object) {
  return apiClient.post("/user/register/", userData);
}
export function loginUser(userData: object) {
  return apiClient.post("/user/login", userData);
}
