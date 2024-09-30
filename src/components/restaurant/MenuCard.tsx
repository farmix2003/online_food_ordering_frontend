import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const extras = {
  items: [
    { name: "French Fries", price: 200 },
    { name: "Coke", price: 150 },
    { name: "Soda", price: 100 },
    { name: "Chips", price: 150 },
    { name: "Fried Onions", price: 50 },
    { name: "Fried wings", price: 60 },
    { name: "Fried wings", price: 60 },
  ],
};

const MenuCard = () => {
  return (
    <div className="mb-5">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="md:flex items-center gap-x-4">
            <div className="md:flex items-center md:gap-4 lg:gap-5">
              <img
                src="https://yastatic.net/naydex/yandex-search/l18Fy2y14/c1b0da3B/_6w97FeQ7NEASgz1nmKVutumQ-K7opGCNPiVj43Mo6cji_gHKOAgjray2KsCuZ-Jv168LooHU8ACh1bndXjMIIotbZiTVLjg9a8IlGsiFYqLh5Y2irNUInEpMapNXYYihkuIcfs3YtyFAA4JxZtY_ZsfiOpfV4YF0xbjopDseHQsTqn8lwDp4"
                alt="image"
                className="w-[7rem] h-[7rem] object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Chicken Burger</h3>
              <p className="text-sm">200 TL</p>
              <p className="text-gray-500 text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className="text-xl mb-2">Extras:</h2>
          <ul className="flex w-[100%] gap-2 items-center justify-between flex-wrap">
            {extras.items.map((item) => (
              <div className="flex gap-x-1 w-[30%] text-sm">
                <input type="checkbox" />
                <div className="flex gap-[2px]">
                  <p>{item.name}-</p>
                  <p>{item.price} TL</p>
                </div>
              </div>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;
