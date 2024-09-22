import React from "react";
import NavbarLeftItem from "./NavbarLeftItem";
import NavbarRightItem from "./NavbarRightItem";
import { i18n } from "i18next";

interface Langs {
  code: string;
  name: string;
}

interface I18n {
  i18n: i18n;
  languages: Langs[];
}

const Navbar: React.FC<I18n> = ({ i18n, languages }) => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="px-5 py-[.8rem] z-40 lg:px-20 flex items-center justify-between bg-gray-500">
      <NavbarRightItem />
      <NavbarLeftItem
        i18n={i18n}
        languages={languages}
        handleLanuageChange={handleLanguageChange}
      />
    </div>
  );
};

export default Navbar;
