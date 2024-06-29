import placeHolder from "../../assets/images/Placeholder.svg";
import style from "./InstructionBoxStyle.module.css";
const InstructionBox = ({
  floatLeft,
  title,
  children,
}: {
  floatLeft: boolean;
  title: string;
  children: string;
}) => {
  return (
    <article className={style.instruction}>
      {floatLeft && <img src={placeHolder} alt="" />}
      <div className={style.instructionText}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      {!floatLeft && <img src={placeHolder} alt="" />}
    </article>
  );
};

export default InstructionBox;
