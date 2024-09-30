import MenuFoodItemDetails from "./MenuFoodItemDetails";
import MenuFoodItemsImgCard from "./MenuFoodItemsImgCard";

const MenuFoodDetails = () => {
  return (
    <div className="md:flex items-center gap-x-4">
      <MenuFoodItemsImgCard />
      <MenuFoodItemDetails />
    </div>
  );
};

export default MenuFoodDetails;
