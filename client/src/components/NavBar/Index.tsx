import style from "./NavBar.module.css";
import Button from "../Button";
import logo from "../../assets/images/Logo.png";
import BetterLink from "../BetterLink/BetterLink";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuth from "../../hooks/useAuth";
import { HiHome } from "react-icons/hi2";
import { MdInbox } from "react-icons/md";
const NavBar = ({ homePage }: { homePage?: boolean }) => {
  const { pathname } = useLocation();
  const { authState } = useAuth();
  const logout = useLogout();
  const isInLoginPage = pathname === "/login";
  const isInRegisterPage = pathname === "/register";
  const isInMessagesPage = pathname === "/messages";
  const isInHomePage = pathname === "/home";
  console.log(authState);
  // TODO: complete restyle
  return (
    <div className={style.navBarContainer}>
      <nav className={style.navBar}>
        <div className={style.logoContainer}>
          <BetterLink to={authState.user ? "/home" : "/"}>
            <img src={logo} alt="Logo" className={style.logo} />
          </BetterLink>
        </div>
        {!authState.user ? (
          <div className={style.linksContainer}>
            <BetterLink to="/login">
              <Button>Login</Button>
            </BetterLink>
            <BetterLink to="/register">
              <Button Secondary>Signup</Button>
            </BetterLink>
          </div>
        ) : (
          <>
            <div className={style.userLinks}>
              <BetterLink to="/home" className={style.userLink}>
                <HiHome size={38} />
              </BetterLink>
              <BetterLink to="/messages" className={style.userLink}>
                <MdInbox size={42}  />
              </BetterLink>
            </div>
            <BetterLink to="/logout">
              <Button Secondary onClick={logout}>
                Logout
              </Button>
            </BetterLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
