import style from "./NavBar.module.css";
import LanguageSelector from "../LanguageSelector";
import Button from "../Button";
const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <LanguageSelector />
      <Button btnType="btnPrimary">Register</Button>
      <Button btnType="btnSecondary">Login</Button>
    </nav>
  );
};

export default NavBar;
