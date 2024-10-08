import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { TopMeals } from "../../constants/TopMeals";
import CarouselItems from "./CarouselItems";

interface CarouselProps {
  t: (value: string) => string;
}

const Carousel: React.FC<CarouselProps> = ({ t }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-[100%] p-10 lg:py-10 lg:px-20">
      <p className="text-2xl font-semibold text-gray-300 py-3 pb-10">
        {t("topMeals")}
      </p>
      <Slider {...settings}>
        {TopMeals.map((item) => (
          <CarouselItems key={item.id} name={item.name} image={item.image} />
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
