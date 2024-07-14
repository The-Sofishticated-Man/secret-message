import style from "./NavBar.module.css";
import LanguageSelector from "../LanguageSelector";
import Button from "../Button";
import BetterLink from "../BetterLink/BetterLink";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const NavBar = ({ loggedIn }: { loggedIn: boolean }) => {
  const { pathname } = useLocation();
  const logout = useLogout();
  const isInLoginPage = pathname === "/user/login";
  const isInRegisterPage = pathname === "/user/register";

  return (
    <nav className={style.navBar}>
      <LanguageSelector />
      {!loggedIn ? (
        <>
          {!isInRegisterPage && (
            <BetterLink to={"/user/register"}>
              <Button btnType="btnPrimary">Register</Button>
            </BetterLink>
          )}
          {!isInLoginPage && (
            <BetterLink to={"/user/login"}>
              <Button
                btnType={isInRegisterPage ? "btnPrimary" : "btnSecondary"}
              >
                Log in
              </Button>
            </BetterLink>
          )}
        </>
      ) : (
        <Button btnType="btnPrimary" OnClick={logout}>
          Log out
        </Button>
      )}
    </nav>
  );
};

export default NavBar;
