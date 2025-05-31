import axios from "axios";

export type secretMessagesType = {
  message: string;
  _id: string;
  date: Date;
};
export interface messagesGetResponse {
  secretMessages: secretMessagesType[];
}

export const privateApiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // This allows cookies to be sent with requests
});

export function logoutuser(api = privateApiClient) {
  return api.get("/logout");
}
export function deleteMessage(key: string, api = privateApiClient) {
  return api.delete(`/messages/${key}`);
}
export function getSecretMessages(api = privateApiClient) {
  return api.get<messagesGetResponse>("/messages");
}
