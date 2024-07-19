import { useEffect, useState } from "react";
import style from "./SendMessage.module.css";
import { getUsername } from "../../services/apiClients";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";

const SendMessage = () => {
  const [username, setuserName] = useState("");
  const [message, setMessage] = useState("");
  const { userId } = useParams();
  console.log("userId param: ", userId);
  useEffect(() => {
    getUsername(userId as string)
      .then((response) => {
        setuserName(response.data.username);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);
   const sendSecretMessage= (message:string)=>{
      console.log(message);
   } 
  return (
    <section className={style.sendMessageSection}>
      <form className={style.sendMessageForm}>
        <h1 className={style.sendMessageHeader}>
          Send a secret message to {username} !
        </h1>
        <div className={style.sendMessageBox}>
          <textarea
            name="secretMessage"
            className={style.sendMessageInput}
            maxLength={1000}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <p className={style.characterCounter}>{message.length}/1000</p>
        </div>
      </form>
      <Button
        OnClick={() => sendSecretMessage(message)}
        btnType="btnPrimary"
        className={style.sendMessageBtn}
      >
        Send Message
      </Button>
    </section>
  );
};

export default SendMessage;
