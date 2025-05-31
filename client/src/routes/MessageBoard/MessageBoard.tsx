import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import MessageCard from "../../components/MessageCard/MessageCard";
import useMessages from "../../hooks/useMessages";
import style from "./MessageBoard.module.css";
const MessageBoard = () => {
  const { messages, error, deleteMessage, isLoading } = useMessages();
  console.log(`MessageBoard: messages`, messages);
  return (
    <section className={style.messageBoardSection}>
      <h1 className={style.messageBoardHeading}>
        Your messages will appear here
      </h1>
      <ul className={style.messageBoard}>
        {isLoading ? (
          <CardSkeleton count={7} />
        ) : messages.length ? (
          messages
            .map((message, index) => (
              <MessageCard
                onDelete={() => deleteMessage(message._id)}
                key={message._id}
                date={message.date}
                zIndex={index}
              >
                {message.message}
              </MessageCard>
            ))
            .reverse()
        ) : (
          <>
            <h3>
              You have no messages yet, but we'll update you when u receive some
              😁
            </h3>
          </>
        )}
      </ul>
      <p className="text-danger">{error}</p>
    </section>
  );
};

export default MessageBoard;
