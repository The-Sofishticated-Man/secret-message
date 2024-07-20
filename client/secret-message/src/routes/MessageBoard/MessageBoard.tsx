import MessageCard from "../../components/MessageCard/MessageCard";
import useMessages from "../../hooks/useMessages";
import style from "./MessageBoard.module.css";
const MessageBoard = () => {
  const { messages, error } = useMessages();
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
