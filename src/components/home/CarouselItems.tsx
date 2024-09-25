type CarouselItemProps = {
  image: string;
  name: string;
};

const CarouselItems = ({ image, name }: CarouselItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={image}
        alt="slider-image"
        className="w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full object-cover object-center"
      />
      <span className="py-5 font-semibold text-xl text-gray-400">{name}</span>
    </div>
  );
};

export default CarouselItems;
