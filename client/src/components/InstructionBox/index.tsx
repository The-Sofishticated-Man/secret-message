import placeHolder from "../../assets/images/Placeholder.svg";
import style from "./InstructionBoxStyle.module.css";
const InstructionBox = ({
  title,
  children,
  vidsrc = placeHolder,
}: {
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
    <article className={style.instruction}>
      <div className={style.instructionText}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      {vid}
    </article>
  );
};
export default InstructionBox;
