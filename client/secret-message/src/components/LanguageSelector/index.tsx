import { useEffect, useRef, useState } from "react";
import languageToImg from "../../assets/languageIcons/languageIcons";
import style from "./languageSelector.module.css";
import { PiCaretDownBold } from "react-icons/pi";

const LanguageSelector = () => {
  const [isActive, setActive] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const languages = ["English", "Arabic", "French"];

  const languageButton = useRef<HTMLButtonElement>(null);
  const languageOptions = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (  
        !languageOptions.current?.contains(e.target as Node) &&
        !languageButton.current?.contains(e.target as Node)
      ) {
        //triggers only if the clicked element is neither the language options nor the language selector button
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }),
    [];
  return (
    <div>
      <button
        className={style.languageSwitchBtn}
        onClick={() => setActive(!isActive)}
        ref={languageButton}
      >
        {languageToImg(currentLanguage)}
        <PiCaretDownBold className={style.caret} />
      </button>
      {isActive && (
        <div ref={languageOptions} className={style.languageOptions}>
          {languages.map((lang) => {
            return (
              <div
                className={`${style.languageOption} ${
                  lang === currentLanguage && style.selectedLanguage
                }`}
                onClick={() => setCurrentLanguage(lang)}
                key={lang}
              >
                {languageToImg(lang)}
                <span className={style.languageOptionText}>{lang}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
