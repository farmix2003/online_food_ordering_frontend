import { liman } from "../../assets";
import { Chip } from "@mui/material";

type ImageCardProps = {
  isOpen: boolean;
};

const ImageCard = ({ isOpen }: ImageCardProps) => {
  return (
    <div
      className={`${isOpen ? "cursor-pointer" : "cursor-not-allowed"} relative`}
    >
      <img src={liman} alt="liman" className=" w-full" />

      <Chip
        size="small"
        className="absolute top-2 left-2"
        color={isOpen ? "success" : "error"}
        label={isOpen ? "Open" : "Closed"}
      />
    </div>
  );
};

export default ImageCard;
