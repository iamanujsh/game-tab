import logo from "../assets/movietab.png";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="flex p-3 items-center justify-between">
      <img width={70} height={70} src={logo} alt="logo" />
      <p className="font-semibold text-xl">Navbar</p>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
