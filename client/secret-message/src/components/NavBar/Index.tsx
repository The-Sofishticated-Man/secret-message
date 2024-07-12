import style from "./NavBar.module.css";
import LanguageSelector from "../LanguageSelector";
import Button from "../Button";
import { Link } from "react-router-dom";
const NavBar = ({
  showLogin,
  showRegister,
  loggedIn,
}: {
  showLogin: boolean;
  showRegister: boolean;
  loggedIn: boolean;
}) => {
  return (
    <nav className={style.navBar}>
      <LanguageSelector />
      {!loggedIn ? (
        <>
          {showRegister && (
            <Link to={"/user/register"}>
              <Button btnType="btnPrimary">Register</Button>
            </Link>
          )}
          {showLogin && (
            <Link to={"/user/login"}>
              <Button btnType="btnSecondary">Log in</Button>
            </Link>
          )}
        </>
      ) : (
        <Button btnType="btnPrimary">Log out</Button>
      )}
    </nav>
  );
};

export default NavBar;
