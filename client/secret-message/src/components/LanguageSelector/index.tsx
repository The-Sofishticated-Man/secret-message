import { useState } from "react";
import languageIcons from "../../assets/languageIcons/languageIcons";
import style from "./LanguageSelector.module.css";
import { PiCaretDownBold } from "react-icons/pi";

const LanguageSelector = () => {
  const [isActive, setActive] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const languages = ["Arabic", "English", "French"];

  const languageToImg = (language: string) => {
    return (
      <>
        <img
          src={languageIcons[language as keyof typeof languageIcons]}
          alt={language}
        />
      </>
    );
  };
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
