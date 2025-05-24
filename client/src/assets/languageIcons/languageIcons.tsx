import Arabic from "./arabic.svg";
import English from "./english.svg";
import French from "./french.svg";

const languageIcons = {
  Arabic,
  English,
  French,
};
export default function languageToImg(language: string) {
  return (
    <>
      <img
        src={languageIcons[language as keyof typeof languageIcons]}
        alt={language}
      />
    </>
  );
}
