import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import style from "./UserHome.module.css";
import Cookies from "js-cookie";
import { IoCopy } from "react-icons/io5";

const UserHome = () => {
  const userCookies = JSON.parse(Cookies.get("SMUser")!);
  const link = `http://localhost:${import.meta.env.VITE_PORT}/send/${
    userCookies.id
  }`;
  return (
    <section className={style.userHomeSection}>
      <h1 className={style.userHeading}>Welcome {userCookies.user} !</h1>
      <div className={style.userLink}>
        <h3>Your link has been generated :</h3>
        <input readOnly value={link} />
        <p className={style.userLinkText}>
          share this link with your friends to receive secret messages !
        </p>
        <div className={style.userLinkShareOptions}>
          <FaSquareFacebook  color="#1877F2" />
          <FaSquareXTwitter color="#1DA1F2" />
          <FaSquareInstagram color="#E1306C" />
          <FaSquareWhatsapp color="#25D366" />
          <IoCopy color="#0B0B0B" />
        </div>
      </div>
    </section>
  );
};

export default UserHome;
