import style from "./SendMessage.module.css";
import Button from "../../components/Button";
import useSendSecretMessage from "../../hooks/useSendSecretMessage";
import { Navigate, useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const SendMessage = () => {
  const { isSuccess, submitMessage, error, isLoading, isError, reset } =
    useSendSecretMessage();
  const { username, recipientId } = useLoaderData();
  const [message, setMessage] = useState("");

  const {
    authState: { userID },
  } = useAuth();
  const userSendingMessageToHimself = recipientId == userID;

  console.log("Username from loader:", username);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMessage(message);
    setMessage("");
  };

  return (
    // If the user is trying to send a message to themselves, redirect to home
    userSendingMessageToHimself ? (
      <Navigate to="/home" replace />
    ) : (
      <section className={style.sendMessageSection}>
        <form className={style.sendMessageForm} onSubmit={handleSubmit}>
          <h1 className={style.sendMessageHeader}>
            Send a secret message to {username as string} !
          </h1>
          <div className={style.sendMessageBox}>
            <textarea
              name="secretMessage"
              className={style.sendMessageInput}
              maxLength={1000}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                reset();
              }}
            ></textarea>
            <p className={style.characterCounter}>{message.length}/1000</p>
          </div>
          <Button loading={isLoading} className={style.sendMessageBtn}>
            Send Message
          </Button>
        </form>
        {isError && (
          <p className="text-danger">{error && (error as Error).message}</p>
        )}
        {isSuccess && (
          <div className={style.successContainer}>
            <div className={style.successIndicator}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  stroke="#4BB543"
                  strokeWidth="4"
                  fill="#eaffea"
                />
                <path
                  d="M18 32L27 41L43 23"
                  stroke="#4BB543"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={style.successText}>Message sent!</span>
            </div>
          </div>
        )}
      </section>
    )
  );
};

export default SendMessage;
