import style from "./MessageCardStyle.module.css";
import { IoClose } from "react-icons/io5";
import { formatDistance } from "date-fns";
import DOMPurify from "dompurify";
const MessageCard = ({
  children,
  date,
  onDelete,
  zIndex,
}: {
  children: string;
  date: Date;
  onDelete: () => void;
  zIndex?: number;
}) => {
  console.log("rendering Message", children);
  console.log("sanitized message", DOMPurify.sanitize(children));
  return (
    <li className={style.secretMessageCard} style={{ zIndex }}>
      <p className={style.secretMessage}>{DOMPurify.sanitize(children)}</p>
      <span className={style.messageDate}>
        {formatDistance(date, new Date(), { addSuffix: true })}
      </span>
      <IoClose size={"2rem"} className={style.closeBtn} onClick={onDelete} />
    </li>
  );
};

export default MessageCard;
