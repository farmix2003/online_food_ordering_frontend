import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ToggleFilter from "./ToggleFilter";
import React from "react";

interface ToggleFilterProps {
  selectedCategory: string;
  displayedCategories: string[];
  showAllCategories: boolean;
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleCategoryList: () => void;
}

const FoodCategories: React.FC<ToggleFilterProps> = ({
  selectedCategory,
  displayedCategories,
  showAllCategories,
  handleCategoryChange,
  toggleCategoryList,
}) => {
  return (
    <FormControl className="py-10 space-y-5" component={"fieldset"}>
      <RadioGroup
        onChange={handleCategoryChange}
        name="food_category"
        value={selectedCategory}
      >
        <div className="sm:flex w-full items-center justify-between flex-wrap md:flex-col md:justify-start md:items-start">
          {displayedCategories.map((category) => (
            <FormControlLabel
              value={category}
              control={<Radio />}
              label={category}
              key={category}
              className="w-[30%]"
            />
          ))}
        </div>
      </RadioGroup>

      {/* <div className="hidden md:inline"> */}
      <ToggleFilter
        showAllCategories={showAllCategories}
        toggleCategoryList={toggleCategoryList}
      />
      {/* </div> */}
    </FormControl>
  );
};

export default FoodCategories;
