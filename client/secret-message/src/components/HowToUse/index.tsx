import InstructionBox from "../InstructionBox";
import style from "./HowToUse.module.css";
import Button from "../Button";
const HowToUse = () => {
  return (
    <section id="next" className={style.instructions}>
      <InstructionBox floatLeft={true} />
      <hr />
      <InstructionBox floatLeft={false} />
      <hr />
      <InstructionBox floatLeft={true} />
      <Button btnType="btnPrimary">Get Started</Button>
    </section>
  );
};

export default HowToUse;
