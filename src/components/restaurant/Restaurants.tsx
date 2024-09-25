import RestaurantCard from "./RestaurantCard";

type RestaurantProps = {
  t: (value: string) => string;
};

const restaurant = [5, 4, 5, 6, 8, 4, 3, 9];
const Restaurants = ({ t }: RestaurantProps) => {
  return (
    <section className="px-5 lg:px-20 pt-5 pb-10">
      <h1 className="text-2xl font-semibold text-gray-400 pb-8">
        {t("restaurantsMsg")}
      </h1>
      <div className="flex flex-wrap gap-5">
        {restaurant.map(() => (
          <RestaurantCard />
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
