import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUsername, SendSecretMessage } from "../services/apiClients";

export default function useSendSecretMessage() {
  const [username, setuserName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { userId } = useParams();
  console.log("userId param: ", userId);
  useEffect(() => {
    getUsername(userId as string)
      .then((response) => {
        console.log(response);
        setuserName(response.data.username);
      })
      .catch((error) => {
        console.error(error);
        if (error.response?.status === 404) {
          location.href = "/404";
        } else {
          location.href = "/error";
        }
      });
  }, [userId]);

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
  return { username, message, setMessage, success, error, submitMessage };
}
