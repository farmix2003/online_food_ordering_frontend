import { CalendarMonth, LocationOn } from "@mui/icons-material";
import { Grid2 } from "@mui/material";

const RestaurantDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-3 mt-10">
          Home{">"}Lefke{">"}Liman Pizza
        </h3>
        <div className="">
          <Grid2 container spacing={2}>
            <Grid2>
              <img
                className="w-screen h-[40vh] "
                src="https://avatars.mds.yandex.net/i?id=5f8152e6b4ef93e120567447d84e02ce2f7f40fb98a5cadf-4866923-images-thumbs&n=13"
                alt="img"
              />
            </Grid2>
            <Grid2>
              <img
                className="w-screen h-[40vh] object-fill"
                src="https://avatars.mds.yandex.net/i?id=0dd4476e6d06d2b28ada1e943a8e9510-5214861-images-thumbs&n=13"
                alt="img"
              />
            </Grid2>
          </Grid2>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Liman Pizza</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            veritatis eius ex eaque quas! Soluta in dolor necessitatibus officia
            exercitationem quisquam, non voluptas molestias porro corrupti,
            repellendus laborum culpa sed.
          </p>
          <div className="flex gap-1 t-2">
            <LocationOn />
            Gemikona, Lefke
          </div>
          <div className="flex gap-1">
            <CalendarMonth />
            {/* <span className="mx-2">|</span> */}
            <span>Open from 10:00 AM to 22:00 PM</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
