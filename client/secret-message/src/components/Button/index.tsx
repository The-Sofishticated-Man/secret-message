import style from "./btnStyles.module.css";
const Button = ({
  btnType,
  children,
  Size,
  Margin,
}: {
  btnType?: string;
  children: string;
  Size?: string;
  Margin?: string;
}) => {
  return (
    <button
      style={{ fontSize: Size, margin: Margin }}
      className={`${style.btn} ${btnType && style[btnType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
