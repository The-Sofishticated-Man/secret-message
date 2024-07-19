import LoadingSpinner from "../icons/LoadingSpinner";
import style from "./btnStyles.module.css";
import "ldrs/ring";
const Button = ({
  btnType,
  children,
  Size,
  Margin,
  loading,
  OnClick,
  className,
}: {
  btnType?: string;
  children?: string;
  Size?: string;
  Margin?: string;
  loading?: boolean;
  className?: string;
  OnClick?: () => void;
}) => {
  return (
    <button
      style={{ fontSize: Size, margin: Margin, textDecoration: "none" }}
      className={`${style.btn} ${btnType && style[btnType]} ${className}`}
      onClick={OnClick}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;
