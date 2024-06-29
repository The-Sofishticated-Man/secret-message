import style from "./NavBar.module.css";
import LanguageSelector from "../LanguageSelector";
import Button from "../Button";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <LanguageSelector />
      <Link to={"/register"}>
        <Button btnType="btnPrimary">Register</Button>
      </Link>
      <Link to={"/login"}>
        <Button btnType="btnSecondary">Login</Button>
      </Link>
    </nav>
  );
};

export default NavBar;
