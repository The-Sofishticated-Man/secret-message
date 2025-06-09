import style from "./Footer.module.css";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <h4>
        Made with{" "}
        <span className={style.heartIcon}>
          <FaHeart
            style={{ position: "relative", top: "0px", margin: "0 6px 0 3px" }}
            color="var(--color-primary)"
          />
        </span>
        By
        <br className={style.break} />
        <a
          href="https://github.com/The-Sofishticated-Man"
          target="_blank"
          className={style.sophishticated}
        >
          <strong>The Sofishticated Man</strong>
        </a>
      </h4>
    </footer>
  );
};

export default Footer;
