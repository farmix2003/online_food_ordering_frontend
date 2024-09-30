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
  );
};

export default ExtrasList;
