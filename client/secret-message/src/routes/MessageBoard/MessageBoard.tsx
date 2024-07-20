import { useEffect, useState } from "react";
import MessageCard from "../../components/MessageCard/MessageCard";
import style from "./MessageBoard.module.css";
import { getSecretMessages } from "../../services/apiClients";
const MessageBoard = () => {
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
  return (
    <section className={style.messageBoardSection}>
      <h1 className={style.messageBoardHeading}>
        Your messages will appear here
      </h1>
      <ul className={style.messageBoard}>
        {messages.map((message) => (
          <MessageCard onDelete={() => {}} key={message}>
            {message}
          </MessageCard>
        ))}
      </ul>
      <p className="text-danger">{error}</p>
    </section>
  );
};

export default MessageBoard;
