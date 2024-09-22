import { logo } from "../../assets";

const NavbarRightItem = () => {
  //   const navigate = useNavigate();
  return (
    <div>
      <img
        src={logo}
        alt="img"
        className="cursor-pointer"
        onClick={() => console.log("/home")}
      />
    </div>
  );
};

export default NavbarRightItem;
