import style from "./MessageCardStyle.module.css";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { formatDistance } from "date-fns";
const MessageCard = ({
  children,
  date,
  onDelete,
}: {
  children: ReactNode;
  date: Date;
  onDelete: () => void;
}) => {
  return (
    <li className={style.secretMessageCard}>
      <p className={style.secretMessage}>{children}</p>
      <span className={style.messageDate}>
        {formatDistance(date, new Date(), { addSuffix: true })}
      </span>
      <IoClose size={"2rem"} className={style.closeBtn} onClick={onDelete} />
    </li>
  );
};

export default MessageCard;
