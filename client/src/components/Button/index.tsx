import LoadingSpinner from "../icons/LoadingSpinner";
import style from "./btnStyles.module.css";
import "ldrs/ring";
const Button = ({
  Secondary,
  children,
  Size,
  Margin,
  loading,
  onClick,
  className,
}: {
  Secondary?:boolean,
  children?: string;
  Size?: string;
  Margin?: string;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      style={{ fontSize: Size, margin: Margin, textDecoration: "none" }}
      className={`${style.btn} ${Secondary ? style.Secondary : style.Primary} ${className}`}
      onClick={onClick}
    >
      {loading ? <LoadingSpinner Color={Secondary ? "var(--color-secondary)" : "white"} /> : children}
    </button>
  );
};

export default Button;
