import { i18n } from "i18next";
import React from "react";

interface Language {
  code: string;
  name: string;
}

interface LanguageSelectorProps {
  languages: Language[];
  i18n: i18n;
  onLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  i18n,
  onLanguageChange,
}) => {
  return (
    <select
      className="bg-transparent mr-1 md:mr-5 dark:border-white border border-black outline-none rounded"
      onChange={onLanguageChange}
      value={i18n.language}
    >
      {languages.map((lang) => (
        <option
          key={lang.code}
          value={lang.code}
          className="text-black text-[10px] md:text-[17px]"
        >
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
