import placeHolder from "../../assets/images/Placeholder.svg";
import style from "./InstructionBoxStyle.module.css";
const InstructionBox = ({ floatLeft }: { floatLeft: boolean }) => {
  return (
    <article className={style.instruction}>
      {floatLeft && <img src={placeHolder} alt="" />}
      <div className={style.instructionText}>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio
          amet neque aut mollitia praesentium et explicabo eveniet ipsum,
          laborum beatae itaque, facere ducimus, placeat facilis error a dolorum
          natus.
        </p>
      </div>
      {!floatLeft && <img src={placeHolder} alt="" />}
    </article>
  );
};

export default InstructionBox;
