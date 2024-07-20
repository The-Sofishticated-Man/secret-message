import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsername, SendSecretMessage } from "../services/apiClients";

export default function useSendSecretMessage() {
  const [message, setMessage] = useState("");
  const [username, setuserName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { userId } = useParams();

  console.log("userId param: ", userId);
  useEffect(() => {
    getUsername(userId as string)
      .then((response) => {
        setuserName(response.data.username);
      })
      .catch((error) => {
        console.error(error.message);
        if (error.response?.status === 404) {
          location.href = "/404";
        } else {
          location.href = "/error";
        }
      });
  }, []);

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
  return { message, username, setMessage, success, error, submitMessage };
}
