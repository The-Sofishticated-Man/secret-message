import style from "./btnStyles.module.css";
const Button = ({
  btnType,
  children,
  Size,
}: {
  btnType?: string;
  children: string;
  Size?: string;
}) => {
  return (
    <button
      style={{ fontSize: Size }}
      className={`${style.btn} ${btnType && style[btnType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
