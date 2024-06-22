import style from "./btnStyles.module.css";
const Button = ({
  btnType,
  children,
}: {
  btnType?: string;
  children: string;
}) => {
  return (
    <button className={`${style.btn} ${btnType && style[btnType]}`}>
      {children}
    </button>
  );
};

export default Button;
