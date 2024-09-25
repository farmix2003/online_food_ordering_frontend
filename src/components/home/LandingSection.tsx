import "./Home.css";

type LandingSectionProps = {
  t: (value: string) => string;
};

const LandingSection = ({ t }: LandingSectionProps) => {
  return (
    <section className="banner h-[90vh] relative flex flex-col items-center justify-around md:justify-center">
      <div className="z-10  w-[70%] md:w-[34%] flex flex-col gap-4 items-center justify-center">
        <h1 className="z-10 text-6xl md:text-6xl font-bold">Eat Ease</h1>
        <p className="z-10 leading-10 text-white md:leading-8 text-4xl md:text-xl">
          {t("homeMsg")}
        </p>
      </div>
      <div className="cover absolute"></div>
      <div className="fade"></div>
    </section>
  );
};

export default LandingSection;
