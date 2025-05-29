import useAxiosPrivate from "../hooks/useAxiosPrivate";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:";
const backendPort = import.meta.env.VITE_BACKEND_PORT || "";
export const baseURL = backendUrl + backendPort;

export type secretMessagesType = {
  message: string;
  _id: string;
  date: Date;
};
export interface messagesGetResponse {
  secretMessages: secretMessagesType[];
}

const privateApiClient = useAxiosPrivate();

export function logoutuser() {
  return privateApiClient.get("/logout");
}
export function deleteMessage(key: string) {
  return privateApiClient.delete(`/messages/${key}`);
}
export function getSecretMessages() {
  return privateApiClient.get<messagesGetResponse>("/messages");
}
