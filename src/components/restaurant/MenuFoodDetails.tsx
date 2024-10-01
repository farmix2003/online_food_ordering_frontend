import MenuFoodItemDetails from "./MenuFoodItemDetails";
import MenuFoodItemsImgCard from "./MenuFoodItemsImgCard";

const MenuFoodDetails = () => {
  return (
    <div className=" md:flex items-center gap-x-4 md:gap-x-10 md:w-[90%]">
      <MenuFoodItemsImgCard />
      <MenuFoodItemDetails />
    </div>
  );
};

export default MenuFoodDetails;
