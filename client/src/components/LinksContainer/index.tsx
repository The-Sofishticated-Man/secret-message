import style from "./LinksContainer.module.css";
import BetterLink from "../BetterLink/BetterLink";
import Button from "../Button";

const LinksContainer = () => {
  return (
    <div className={style.linksContainer}>
      <BetterLink to="/login">
        <Button>Login</Button>
      </BetterLink>
      <BetterLink to="/register">
        <Button Secondary>Signup</Button>
      </BetterLink>
    </div>
  );
};

export default LinksContainer;
