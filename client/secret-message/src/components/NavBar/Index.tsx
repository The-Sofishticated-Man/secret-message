import style from "./NavBar.module.css";
import LanguageSelector from "../LanguageSelector";
import Button from "../Button";
import BetterLink from "../BetterLink/BetterLink";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { pathname } = useLocation();
  const { authState } = useAuth();
  const logout = useLogout();
  const isInLoginPage = pathname === "/user/login";
  const isInRegisterPage = pathname === "/user/register";
  const isInMessagesPage = pathname === "/messages";
  const isInHomePage = pathname === "/home";
  return (
    <nav className={style.navBar}>
      <LanguageSelector />
      {!authState.user ? (
        <>
          {!isInRegisterPage && (
            <BetterLink to={"/users/register"}>
              <Button btnType="btnPrimary">Register</Button>
            </BetterLink>
          )}
          {!isInLoginPage && (
            <BetterLink to={"/users/login"}>
              <Button
                btnType={isInRegisterPage ? "btnPrimary" : "btnSecondary"}
              >
                Log in
              </Button>
            </BetterLink>
          )}
        </>
      ) : (
        <>
          <div className={style.navigationLinks}>
            <BetterLink to="/home" underline={isInHomePage} >Home</BetterLink>
            <BetterLink to="/messages" underline={isInMessagesPage}>Inbox</BetterLink>
          </div>
          <Button btnType="btnPrimary" OnClick={logout}>
            Log out
          </Button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
