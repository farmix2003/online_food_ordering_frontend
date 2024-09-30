import MenuCard from "./MenuCard";

const menu = [1, 2, 3, 4, 5];
const Menu = () => {
  return (
    <div>
      {menu.map(() => (
        <MenuCard />
      ))}
    </div>
  );
};

export default Menu;
