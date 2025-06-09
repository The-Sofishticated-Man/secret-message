import InstructionBox from "../InstructionBox";
import style from "./HowToUse.module.css";
import Button from "../Button";
import BetterLink from "../BetterLink/BetterLink";
import signupvid from "../../assets/videos/signupvidlol.webm";
import copylinkvidlol from "../../assets/videos/copylinkvidlol.webm";
import messagesvidlol from "../../assets/videos/messagesvidlol.webm";
const HowToUse = () => {
  return (
    <section id="next" className={style.instructions}>
      <div className={style.container}>
        <InstructionBox title="Create an Account" vidsrc={signupvid}>
          Start by creating a free account by clicking the "Get Started Now!"
          button below. This will allow you to save your progress and access all
          features of the app.
        </InstructionBox>
        <hr />
        <InstructionBox title="Share Your Link" vidsrc={copylinkvidlol}>
          After creating your account, you can generate and share your unique
          link with others. Simply copy the link provided in your dashboard and
          put it in your bio or something.
        </InstructionBox>

        <hr />
        <InstructionBox title="Receive Messages" vidsrc={messagesvidlol}>
          Once you've shared your link, you can start receiving messages from
          anyone who clicks on it. All messages will be stored securely in your
          account, and you can access them anytime from your dashboard.
        </InstructionBox>
        <hr />
        <BetterLink to={"/register"} >
          <Button className={style.getStarted} >
            Get Started Now!
          </Button>
        </BetterLink>
      </div>
    </section>
  );
};

export default HowToUse;
