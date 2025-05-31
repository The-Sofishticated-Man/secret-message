import { useState, useEffect } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import {
  secretMessagesType,
  getSecretMessages,
  deleteMessage,
} from "../services/privateApiClients";

export default function useMessages() {
  const axiosPrivate = useAxiosPrivate();
  const [messages, setMessages] = useState<secretMessagesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleDeleteMessage = (id: string) => {
    setMessages(messages.filter((message) => message._id !== id));
    deleteMessage(id, axiosPrivate)
      .then(() => {
        console.log("deleted message: ", id);
      })
      .catch((error: any) => {
        setError("could not delete message: " + error);
        console.error(error);
      });
  };

  useEffect(() => {
    getSecretMessages(axiosPrivate)
      .then((response) => {
        setMessages(response.data.secretMessages);
      })
      .catch((error) => {
        setError("could not fetch messages: " + error);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [axiosPrivate]);

  return { messages, error, deleteMessage: handleDeleteMessage, isLoading };
}
