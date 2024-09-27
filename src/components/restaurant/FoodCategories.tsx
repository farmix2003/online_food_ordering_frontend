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
        {displayedCategories.map((category) => (
          <FormControlLabel
            value={category}
            control={<Radio />}
            label={category}
            key={category}
          />
        ))}
      </RadioGroup>

      <ToggleFilter
        showAllCategories={showAllCategories}
        toggleCategoryList={toggleCategoryList}
      />
    </FormControl>
  );
};

export default FoodCategories;
