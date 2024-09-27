import { Divider } from "@mui/material";
import { useState } from "react";
import CategoryAndMenu from "./CategoryAndMenu";
import DetailsCard from "./DetailsCard";

const categories = [
  "Meat",
  "Doner",
  "Desert",
  "Salat",
  "Pizza",
  "Burger",
  "Kombo",
  "Soup",
  "Drinks",
  "Other",
];

const RestaurantDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAllCategories, setShowAllCategories] = useState<boolean>(false);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const toggleCategoryList = () => {
    setShowAllCategories((prev) => !prev);
  };

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 4);
  return (
    <div className="px-5 lg:px-20">
      <section>
        <DetailsCard />
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <CategoryAndMenu
          toggleCategoryList={toggleCategoryList}
          selectedCategory={selectedCategory}
          showAllCategories={showAllCategories}
          displayedCategories={displayedCategories}
          handleCategoryChange={handleCategoryChange}
        />
        <div className="space-y-5 lg:w-[80%] lg:pl-10">menu</div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
