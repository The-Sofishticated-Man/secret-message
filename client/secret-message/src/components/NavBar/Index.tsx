import style from "./NavBar.module.css";
import LanguageSelector from "../LanguageSelector";
const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <LanguageSelector />
      <button className="nav__button--outline">Log in</button>
      <button className="nav__button--fill">Sign up</button>
    </nav>
  );
};

export default NavBar;
