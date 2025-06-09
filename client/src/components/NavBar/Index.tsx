import style from "./NavBar.module.css";
import logo from "../../assets/images/Logo.png";
import BetterLink from "../BetterLink/BetterLink";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserLinks from "../UserLinks";
import LinksContainer from "../LinksContainer";
import HamburgerMenu from "../HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import useLogout from "../../hooks/useLogout";

const NavBar = () => {
  const { pathname } = useLocation();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const notInLoginNorRegisterPage =
    pathname !== "/login" && pathname !== "/register";
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { logOut } = useLogout();

  // Links for HamburgerMenu
  const guestLinks = [
    { to: "/login", label: "Login" },
    { to: "/register", label: "Signup" },
  ];
  const userLinks = [
    { to: "/home", label: "Home" },
    { to: "/messages", label: "Messages" },
    { label: "Logout", onClick: logOut }, // You can add onClick for logout if needed
  ];

  return (
    <div className={style.navBarContainer}>
      <nav className={style.navBar}>
        <div className={style.logoContainer}>
          <BetterLink to={isAuthenticated ? "/home" : "/"}>
            <img src={logo} alt="Logo" className={style.logo} />
          </BetterLink>
        </div>
        <div className={style.desktopLinks}>
          {isAuthenticated ? (
            <UserLinks />
          ) : (
            notInLoginNorRegisterPage && <LinksContainer />
          )}
        </div>
        <div className={style.mobileLinks}>
          {notInLoginNorRegisterPage && (
          <button
            className={style.hamburgerButton}
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            {hamburgerOpen ? (
              <IoMdClose size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        )}
        </div>
      </nav>
      {hamburgerOpen &&  (
        <HamburgerMenu
          setOpen={setHamburgerOpen}
          links={isAuthenticated ? userLinks : guestLinks}
        />
      )}
    </div>
  );
};

export default NavBar;
