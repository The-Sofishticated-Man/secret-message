import style from "./UserLinks.module.css";
import BetterLink from "../BetterLink/BetterLink";
import { HiHome } from "react-icons/hi2";
import { MdInbox } from "react-icons/md";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import Button from "../Button";

const UserLinks = () => {
  const { pathname } = useLocation();
  const { logOut, isLoading } = useLogout();
  return (
    <div className={style.userLinks}>
      <BetterLink
        to="/home"
        className={
          style.userLink + (pathname === "/home" ? " " + style.activeLink : "")
        }
      >
        <HiHome size={38} />
      </BetterLink>
      <BetterLink
        to="/messages"
        className={
          style.userLink +
          (pathname === "/messages" ? " " + style.activeLink : "")
        }
      >
        <MdInbox size={42} />
      </BetterLink>
      <Button
        loading={isLoading}
        onClick={logOut}
        className={style.logoutButton}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserLinks;
