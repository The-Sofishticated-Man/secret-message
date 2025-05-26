import style from "./Footer.module.css";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  // TODO: restyle footer (make it a bit smaller, add some padding, etc.)
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
        <a
          href="https://github.com/The-Sophishticated-Man"
          target="_blank"
          className={style.sophishticated}
        >
          <strong>The Sophishticated Man</strong>
        </a>
      </h4>
    </footer>
  );
};

export default Footer;
