import { useState } from "react";
import { useParams } from "react-router-dom";
import { SendSecretMessage } from "../services/apiClients";

export default function useSendSecretMessage() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { userId } = useParams();
  const sendSecretMessage = (message: string) => {
    SendSecretMessage(message, userId!)
      .then((response) => {
        console.log("Secret message response: ", response);
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const submitMessage = () => sendSecretMessage(message);
  return { message, setMessage, success, error, submitMessage };
}
