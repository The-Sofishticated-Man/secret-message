import style from "./NavBar.module.css";
import Button from "../Button";
import logo from "../../assets/images/Logo.png";
import BetterLink from "../BetterLink/BetterLink";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuth from "../../hooks/useAuth";
import { HiHome } from "react-icons/hi2";
import { MdInbox } from "react-icons/md";
const NavBar = () => {
  const { pathname } = useLocation();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const { logOut, isLoading } = useLogout();
  const isInLoginPage = pathname === "/login";
  const isInRegisterPage = pathname === "/register";
  return (
    <div className={style.navBarContainer}>
      <nav className={style.navBar}>
        <div className={style.logoContainer}>
          <BetterLink to={isAuthenticated ? "/home" : "/"}>
            <img src={logo} alt="Logo" className={style.logo} />
          </BetterLink>
        </div>
        {isAuthenticated ? (
          <>
            <div className={style.userLinks}>
              <BetterLink to="/home" className={style.userLink}>
                <HiHome size={38} />
              </BetterLink>
              <BetterLink to="/messages" className={style.userLink}>
                <MdInbox size={42} />
              </BetterLink>
            </div>
            <Button loading={isLoading} Secondary onClick={logOut}>
              Logout
            </Button>
          </>
        ) : (
          !isInLoginPage &&
          !isInRegisterPage && (
            <div className={style.linksContainer}>
              <BetterLink to="/login">
                <Button>Login</Button>
              </BetterLink>
              <BetterLink to="/register">
                <Button Secondary>Signup</Button>
              </BetterLink>
            </div>
          )
        )}
      </nav>
    </div>
  );
};

export default NavBar;
