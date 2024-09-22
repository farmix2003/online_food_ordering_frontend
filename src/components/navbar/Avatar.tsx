import React from "react";
import { Avatar } from "@mui/material";
import { cyan } from "@mui/material/colors";

const UseAvatar: React.FC = () => {
  const userInitial = "F"; // You can make this dynamic if you have user data

  return (
    <Avatar sx={{ bgcolor: "white", color: cyan[900] }}>{userInitial}</Avatar>
  );
};

export default UseAvatar;
