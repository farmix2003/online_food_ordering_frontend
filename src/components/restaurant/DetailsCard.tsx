import RestaurantDetailsHeader from "./RestaurantDetailsHeader";
import RestaurantDetailsImgCard from "./RestaurantDetailsImgCard";
import RestaurantDetailsItems from "./RestaurantDetailsItems";

const DetailsCard = () => {
  return (
    <>
      <RestaurantDetailsHeader />
      <RestaurantDetailsImgCard src="https://avatars.mds.yandex.net/i?id=5f8152e6b4ef93e120567447d84e02ce2f7f40fb98a5cadf-4866923-images-thumbs&n=13" />
      <RestaurantDetailsImgCard src="https://avatars.mds.yandex.net/i?id=0dd4476e6d06d2b28ada1e943a8e9510-5214861-images-thumbs&n=13" />
      <RestaurantDetailsItems />
    </>
  );
};

export default DetailsCard;
