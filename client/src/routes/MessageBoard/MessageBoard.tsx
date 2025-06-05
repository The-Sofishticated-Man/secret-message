import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import MessageCard from "../../components/MessageCard/MessageCard";
import { useMessages } from "../../hooks/useMessages";
import style from "./MessageBoard.module.css";

const MessageBoard = () => {
  const { messages, isPending, isError, error, refetch, deleteMessage } =
    useMessages();
  return (
    <section className={style.messageBoardSection}>
      <h1 className={style.messageBoardHeading}>
        Your messages will appear here
      </h1>
      <button onClick={() => refetch()} className={style.refreshButton}>
        Refresh
      </button>
      <ul className={style.messageBoard}>
        {isPending ? (
          <CardSkeleton count={7} />
        ) : messages.length ? (
          messages
            .map((message: any, index: number) => (
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
      <p className="text-danger">{isError ? (error as Error).message : ""}</p>
    </section>
  );
};

export default MessageBoard;
