import React from "react";
import "./Home.css";
import LandingSection from "./LandingSection";
import Carousel from "./Carousel";
import Restaurants from "../restaurant/Restaurants";

interface I18nSettings {
  t: (value: string) => string;
}

const Home: React.FC<I18nSettings> = ({ t }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <LandingSection t={t} />
      <Carousel t={t} />
      <Restaurants t={t} />
    </div>
  );
};

export default Home;
