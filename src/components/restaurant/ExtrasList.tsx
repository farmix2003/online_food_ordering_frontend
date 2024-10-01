import { Button } from "@mui/material";

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
const ExtrasList = () => {
  return (
    <div className="flex flex-col gap-2">
      <ul className="flex w-[100%] gap-2 items-center justify-between flex-wrap">
        {extras.items.map((item) => (
          <div className="flex gap-x-1 w-[100%] md:w-[30%] text-sm">
            <input type="checkbox" />
            <div className="flex gap-[2px]">
              <p>{item.name}-</p>
              <p>{item.price} TL</p>
            </div>
          </div>
        ))}
      </ul>
      <Button
        variant="contained"
        disabled={false}
        type="submit"
        className="w-[60%] md:w-[20%]"
      >
        {false ? "Add to Cart" : "Out of Stock"}
      </Button>
    </div>
  );
};

export default ExtrasList;
