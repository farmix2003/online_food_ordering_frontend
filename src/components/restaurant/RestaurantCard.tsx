import { Card } from "@mui/material";
import ImageCard from "./ImageCard";
import TextContent from "./TextContent";

const RestaurantCard = () => {
  const isOpen = false;
  return (
    <Card className=" w-[17.5rem]">
      <ImageCard isOpen={isOpen} />
      <TextContent />
    </Card>
  );
};

export default RestaurantCard;
