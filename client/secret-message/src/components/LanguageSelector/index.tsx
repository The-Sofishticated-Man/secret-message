import { useState } from "react";
import languageToImg from "../../assets/languageIcons/languageIcons";
import style from "./languageSelector.module.css";
import { PiCaretDownBold } from "react-icons/pi";

const LanguageSelector = () => {
  const [isActive, setActive] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const languages = ["English", "Arabic", "French"];
  return (
    <div>
      <button
        className={style.languageSwitchBtn}
        onClick={() => setActive(!isActive)}
      >
        {languageToImg(currentLanguage)}
        <PiCaretDownBold className={style.caret} />
      </button>
      {isActive && (
        <div className={style.languageOptions}>
          {languages.map((lang) => {
            return (
              <div
                className={`${style.languageOption} ${
                  lang === currentLanguage && style.selectedLanguage
                }`}
                onClick={() => setCurrentLanguage(lang)}
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
