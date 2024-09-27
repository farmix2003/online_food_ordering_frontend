import { CalendarMonth, LocationOn } from "@mui/icons-material";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
        <h3 className="text-gray-500 py-3 mt-10">
          Home {">"} Lefke {">"} Liman Pizza
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
            <span>Open from 10:00 AM to 22:00 PM</span>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Categories
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleCategoryChange}
                  name="food_category"
                  value={selectedCategory}
                >
                  {displayedCategories.map((category) => (
                    <FormControlLabel
                      value={category}
                      control={<Radio />}
                      label={category}
                      key={category}
                    />
                  ))}
                </RadioGroup>

                {/* Toggle Button for "Show all" / "Show less" */}
                <div className="m-0">
                  <button
                    onClick={toggleCategoryList}
                    className="text-blue-500 hover:underline"
                  >
                    {showAllCategories ? "Show less" : "Show all"}
                  </button>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">menu</div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
