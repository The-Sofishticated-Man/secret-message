import InstructionBox from "../InstructionBox";
import style from "./HowToUse.module.css";
import Button from "../Button";
import { Link } from "react-router-dom";
const HowToUse = () => {
  return (
    <section id="next" className={style.instructions}>
      <InstructionBox floatLeft={true} title="Title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum
        repellat officiis architecto cupiditate rerum. Ducimus consectetur quae
        cumque doloribus qui, nulla odio aut veniam, repellat sed tempore
        explicabo in?
      </InstructionBox>
      <hr />
      <InstructionBox floatLeft={false} title="Title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum
        repellat officiis architecto cupiditate rerum. Ducimus consectetur quae
        cumque doloribus qui, nulla odio aut veniam, repellat sed tempore
        explicabo in?
      </InstructionBox>
      <hr />
      <InstructionBox floatLeft={true} title="Title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum
        repellat officiis architecto cupiditate rerum. Ducimus consectetur quae
        cumque doloribus qui, nulla odio aut veniam, repellat sed tempore
        explicabo in?
      </InstructionBox>
      <hr />
      <Link to={"/user/register"}>
        <Button btnType="btnPrimary" Size="1.5rem">
          Get Started Now!
        </Button>
      </Link>
    </section>
  );
};

export default HowToUse;
