// import logo from "../assets/movietab.png";
import logo from "../assets/logo.png";
import { ModeToggle } from "./ModeToggle";
import SearchInput from "./SearchInput";

interface Props {
  handleSetSearch: (input: string) => void;
}

const Navbar = ({ handleSetSearch }: Props) => {
  return (
    <div className="flex p-3 items-center gap-10 justify-between">
      <img width={50} height={50} src={logo} alt="logo" className="ml-6" />
      <SearchInput handleSetSearch={handleSetSearch} />
      <ModeToggle />
    </div>
  );
};

export default Navbar;
