import style from "./MessageCardStyle.module.css";
import { IoClose } from "react-icons/io5";
import { formatDistance } from "date-fns";
import DOMPurify from "dompurify";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import log from "../../util/loggingUtils";

const MessageCard = ({
  children,
  date,
  onDelete,
  zIndex,
}: {
  children?: string | ReactNode;
  date?: Date | ReactNode;
  onDelete?: () => void;
  zIndex?: number;
}) => {
  log.debug("rendering Message", children);

  const sanitizedMessage =
    typeof children === "string" && DOMPurify.sanitize(children);

  log.debug("sanitized message", sanitizedMessage);

  const formattedDistance =
    date && formatDistance(date as Date, new Date(), { addSuffix: true });

  return (
    <li className={style.secretMessageCard} style={{ zIndex }}>
      <p className={style.secretMessage}>
        {sanitizedMessage || <Skeleton count={2} />}
      </p>
      <span className={style.messageDate}>
        {formattedDistance || <Skeleton width={"10rem"} />}
      </span>
      {formattedDistance ? (
        <IoClose size={"2rem"} className={style.closeBtn} onClick={onDelete} />
      ) : (
        <Skeleton
          circle
          width={"2rem"}
          height={"2rem"}
          style={{ position: "absolute", right: "1rem" }}
        />
      )}
    </li>
  );
};

export default MessageCard;
