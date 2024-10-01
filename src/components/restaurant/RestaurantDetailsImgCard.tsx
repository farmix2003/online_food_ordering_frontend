import { Grid2 } from "@mui/material";

type ImgProps = {
  src: string;
};

const RestaurantDetailsImgCard = ({ src }: ImgProps) => {
  return (
    <div className="my-4">
      <Grid2 container spacing={2}>
        <Grid2>
          <img className="w-screen md:h-[40vh] " src={src} alt="img" />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default RestaurantDetailsImgCard;
