import style from "./MessageCardStyle.module.css";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
const MessageCard = ({
  children,
  Date,
  onDelete,
}: {
  children: ReactNode;
  Date: string;
  onDelete: () => void;
}) => {
  return (
    <li className={style.secretMessageCard}>
      <p className={style.secretMessage}>{children}</p>
      <span className={style.messageDate}>{Date}</span>
      <IoClose size={"2rem"} className={style.closeBtn} onClick={onDelete} />
    </li>
  );
};

export default MessageCard;
