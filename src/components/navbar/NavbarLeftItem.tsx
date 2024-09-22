import Input from "../Input";
import React from "react";
import { i18n } from "i18next";
import CartIcon from "./CartIcon";
import SearcIcon from "./SearcIcon";
import UseAvatar from "./Avatar";
import LanguageSelector from "./LanguageSelector";

interface Langs {
  code: string;
  name: string;
}

interface NavbarItems {
  languages: Langs[];
  i18n: i18n;
  handleLanuageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const NavbarLeftItem: React.FC<NavbarItems> = ({
  languages,
  i18n,
  handleLanuageChange,
}) => {
  return (
    <div className="flex items-center space-x-2 lg:space-x-10">
      <Input
        type={"text"}
        classes={`bg-transparent w-[22rem] border-b-2 border-white outline-none hidden lg:block`}
        placeholder={"Search..."}
      />

      <SearcIcon />

      <UseAvatar />

      <CartIcon />

      <LanguageSelector
        languages={languages}
        i18n={i18n}
        onLanguageChange={handleLanuageChange}
      />
    </div>
  );
};

export default NavbarLeftItem;
