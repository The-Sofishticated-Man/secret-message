import style from "./NavBar.module.css";
import Button from "../Button";
import BetterLink from "../BetterLink/BetterLink";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuth from "../../hooks/useAuth";

const NavBar = ({ homePage }: { homePage?: boolean }) => {
  const { pathname } = useLocation();
  const { authState } = useAuth();
  const logout = useLogout();
  const isInLoginPage = pathname === "/login";
  const isInRegisterPage = pathname === "/register";
  const isInMessagesPage = pathname === "/messages";
  const isInHomePage = pathname === "/home";
  // TODO: complete restyle
  return (
    <nav
      // different style for homePage navbar
      className={`${style.navBar} ${
        homePage ? style.navBarHome : style.navBarRegular
      }
        ${authState.user ? style.LoggedIn : style.LoggedOut}`}
    >
      {/* // Render this when the user is logged out */}
      {!authState.user ? (
        <>
          {/* Render the 'Register' button if the user is not in the register page */}
          {!isInRegisterPage && (
            <BetterLink to={"/register"}>
              <Button btnType="btnPrimary" className={style.registerButton}>
                Register
              </Button>
            </BetterLink>
          )}
          {/* Render the 'Log in' button if the user is not in the login page */}
          {!isInLoginPage && (
            <BetterLink to={"/login"}>
              <Button
                btnType={isInRegisterPage ? "btnPrimary" : "btnSecondary"}
              >
                Log in
              </Button>
            </BetterLink>
          )}
        </>
      ) : (
        // Render the navigation links for when the user is logged in
        <>
          <div className={style.navigationLinks}>
            {/* Render the 'Home' link with an underline if the user is in the home page */}
            <BetterLink
              to="/home"
              underline={isInHomePage}
              Color="var(--color-secondary)"
            >
              Home
            </BetterLink>
            {/* Render the 'Inbox' link with an underline if the user is in the messages page */}
            <BetterLink
              to="/messages"
              underline={isInMessagesPage}
              Color="var(--color-secondary)"
            >
              Inbox
            </BetterLink>
          </div>
          {/* Render the 'Log out' button if the user is logged in*/}
          <BetterLink to="/">
            <Button btnType="btnPrimary" OnClick={logout}>
              Log out
            </Button>
          </BetterLink>
        </>
      )}
    </nav>
  );
};

export default NavBar;
