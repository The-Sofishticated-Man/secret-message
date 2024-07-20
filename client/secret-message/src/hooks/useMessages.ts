import { useState, useEffect } from "react";
import { getSecretMessages } from "../services/apiClients";

export default function useMessages() {
  const [messages, setMessages] = useState<string[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getSecretMessages()
      .then((response) => {
        console.log("got messages: ", response.data);
        setMessages(response.data);
      })
      .catch((error) => {
        setError("could not fetch messages: " + error);
        console.error(error);
      });
  }, []);
  return { messages, error };
}
