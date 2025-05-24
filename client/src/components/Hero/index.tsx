import style from "./heroStyle.module.css";
import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
const Hero = () => {
  const [isAnimated, setAnimated] = useState(true);
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.hero__text}>
          <h1>
            Receive <span className={style.heroKeyWord}>Anonymous</span>{" "}
            Messages from Strangers!
          </h1>
          <h2>
            Find out what your friends and family think about you without
            revealing their identity 🤫
          </h2>
        </div>
      </div>
      <a
        href="#next"
        onClick={() => setAnimated(false)}
        className={style.readMore}
      >
        <h3>Learn How it Works</h3>
        <BsCaretDownFill className={isAnimated ? style.readMoreCaret : ""} />
      </a>
    </section>
  );
};

export default Hero;
