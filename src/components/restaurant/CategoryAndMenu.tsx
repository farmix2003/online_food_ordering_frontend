import { Typography } from "@mui/material";

import FoodCategories from "./FoodCategories";
import React from "react";

interface Props {
  selectedCategory: string;
  handleCategoryChange: (category: React.ChangeEvent<HTMLInputElement>) => void;
  toggleCategoryList: () => void;
  showAllCategories: boolean;
  displayedCategories: string[];
}

const CategoryAndMenu: React.FC<Props> = ({
  selectedCategory,
  handleCategoryChange,
  toggleCategoryList,
  showAllCategories,
  displayedCategories,
}) => {
  return (
    <div className="space-y-10 lg:w-[20%] filter">
      <div className="box space-y-5 lg:sticky top-28">
        <div>
          <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
            Categories
          </Typography>
          <FoodCategories
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
            toggleCategoryList={toggleCategoryList}
            showAllCategories={showAllCategories}
            displayedCategories={displayedCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryAndMenu;
