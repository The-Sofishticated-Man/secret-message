import { useEffect, useState } from "react";
import MessageCard from "../../components/MessageCard/MessageCard";
import style from "./MessageBoard.module.css";
const MessageBoard = () => {
  const [messages, setmessages] = useState([]);
  return (
    <section className={style.messageBoardSection}>
      <h1 className={style.messageBoardHeading}>
        Your messages will appear here
      </h1>
      <ul className={style.messageBoard}>
        {messages.map((message) => (
          <MessageCard
            key={message.key}
            Date={message.date}
            onDelete={() => {}}
          >
            {message.message}
          </MessageCard>
        ))}
      </ul>
    </section>
  );
};

export default MessageBoard;
