import placeHolder from "../../assets/images/Placeholder.svg";
import style from "./InstructionBoxStyle.module.css";
const InstructionBox = ({
  floatLeft,
  title,
  children,
  vidsrc = placeHolder,
}: {
  floatLeft: boolean;
  title: string;
  children: string;
  vidsrc?: string;
}) => {
  const vid = (

    <div className={style.instructionVideoContainer}>
      <video autoPlay loop muted className={style.instructionVideo}>
        <source src={vidsrc} type="video/webm" />
      </video>
    </div>
  );
  return (
    // TODO: make this component responsive
    <article className={style.instruction}>
      {floatLeft && vid}
      <div className={style.instructionText}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      {!floatLeft && vid}
    </article>
  );
};
export default InstructionBox;
