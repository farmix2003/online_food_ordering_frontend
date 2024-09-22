import React from "react";
import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const CartIcon: React.FC = () => {
  const cartItemCount = 3; // This can be dynamic based on state

  return (
    <IconButton>
      <Badge color="secondary" badgeContent={cartItemCount}>
        <ShoppingCart sx={{ fontSize: "1.6rem" }} color="action" />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
