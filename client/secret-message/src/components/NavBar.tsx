import "./NavBar";
import LanguageSelector from "./LanguageSelector";
const NavBar = () => {
  return (
    <nav>
      <LanguageSelector />
      <button className="nav__button--outline">Log in</button>
      <button className="nav__button--fill">Sign up</button>
    </nav>
  );
};

export default NavBar;
