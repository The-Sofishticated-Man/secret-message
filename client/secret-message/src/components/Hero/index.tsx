import style from "./heroStyle.module.css";
import heroImg from "../../assets/images/h0koxgstftg6y20vjcncvsciutg8.gif";
import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
const Hero = () => {
  const [isAnimated, setAnimated] = useState(true);
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.hero__text}>
          <h1>Receive Secret Messages!</h1>
          <h2>
            Send and receive secret one-time messages to prank your friends
          </h2>
        </div>
        <img src={heroImg} className={style.hero__img}></img>
      </div>
      <div className={style.devider} onClick={() => setAnimated(false)}>
        <a href="#next" className={style.readMore}>
          <h3>Learn How it Works</h3>
          <BsCaretDownFill className={isAnimated ? style.readMoreCaret : ""} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
