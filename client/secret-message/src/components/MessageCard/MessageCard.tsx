import style from "./MessageCardStyle.module.css";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
const MessageCard = ({
  children,
  onDelete,
}: {
  children: ReactNode;
  onDelete: () => void;
}) => {
  return (
    <li className={style.secretMessageCard}>
      <p className={style.secretMessage}>{children}</p>
      <IoClose size={"2rem"} className={style.closeBtn} onClick={onDelete} />
    </li>
  );
};

export default MessageCard;
