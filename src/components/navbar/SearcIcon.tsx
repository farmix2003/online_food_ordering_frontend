import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const SearcIcon: React.FC = () => {
  return (
    <IconButton>
      <Search sx={{ fontSize: "1.6rem" }} />
    </IconButton>
  );
};

export default SearcIcon;
