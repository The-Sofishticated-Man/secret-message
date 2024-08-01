import { useState, useEffect } from "react";
import {
  DeleteMessage,
  getSecretMessages,
  secretMessagesType,
} from "../services/apiClients";

export default function useMessages() {
  const [messages, setMessages] = useState<secretMessagesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const deleteMessage = (id: string) => {
    setMessages(messages.filter((message) => message._id !== id));
    DeleteMessage(id)
      .then(() => {
        console.log("deleted message: ", id);
      })
      .catch((error) => {
        setError("could not delete message: " + error);
        console.error(error);
      });
  };
  useEffect(() => {
    getSecretMessages()
      .then((response) => {
        console.log("got messages: ", response.data);
        setMessages(response.data.secretMessages);
      })
      .catch((error) => {
        setError("could not fetch messages: " + error);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { messages, error, deleteMessage, isLoading };
}
