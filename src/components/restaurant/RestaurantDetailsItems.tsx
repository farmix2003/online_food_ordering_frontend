import { CalendarMonth, LocationOn } from "@mui/icons-material";
import LocationAndTime from "./LocationAndTime";
import Description from "./Description";

const RestaurantDetailsItems = () => {
  return (
    <div className="pt-3 pb-5">
      <h1 className="text-4xl font-semibold">Liman Pizza</h1>
      <Description />

      <LocationAndTime
        icon={<LocationOn />}
        text="Gemikona, Lefke"
        classes="flex gap-1 t-2"
      />
      <LocationAndTime
        icon={<CalendarMonth />}
        text="Open from 10:00 AM to 22:00 PM"
        classes="flex t-2"
      />
    </div>
  );
};

export default RestaurantDetailsItems;
