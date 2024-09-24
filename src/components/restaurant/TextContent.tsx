import { FavoriteBorderRounded, FavoriteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const TextContent = () => {
  const isFavourite = false;
  return (
    <div className="p-4 textPart lg:flex w-full justify-between">
      <div className="space-y-1">
        <p className="font-semibold text-lg">Liman Pizza</p>
        <p className="text-gray-500 text-sm font-semibold">
          Our aim is to make customer happy
        </p>
      </div>
      <div>
        <IconButton>
          {isFavourite ? (
            <FavoriteOutlined sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderRounded />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default TextContent;
