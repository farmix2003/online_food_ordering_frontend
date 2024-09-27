import React from "react";

interface ToggleFilterProps {
  toggleCategoryList: () => void;
  showAllCategories: boolean;
}

const ToggleFilter: React.FC<ToggleFilterProps> = ({
  toggleCategoryList,
  showAllCategories,
}) => {
  return (
    <div className="pt-[-30px] ml-1">
      <button
        onClick={toggleCategoryList}
        className="text-blue-500 hover:underline"
      >
        {showAllCategories ? "Show less" : "Show all"}
      </button>
    </div>
  );
};

export default ToggleFilter;
