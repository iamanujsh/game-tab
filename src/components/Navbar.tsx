// import logo from "../assets/movietab.png";
import { Genres } from "@/hooks/useGenre";
import logo from "../assets/logo.png";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";
import SearchInput from "./SearchInput";

interface Props {
  handleSetSearch: (input: string) => void;
  onSelectedGenre: (genre: Genres) => void;
}

const Navbar = ({ handleSetSearch, onSelectedGenre }: Props) => {
  return (
    <div className="flex p-3 items-center gap-10 justify-between">
      <img width={50} height={50} src={logo} alt="logo" className="ml-6" />
      <SearchInput handleSetSearch={handleSetSearch} />
      <div className="flex items-center gap-5 ">
        <ModeToggle />
        <div className="sm:block md:hidden">
          <MobileNav onSelectedGenre={onSelectedGenre} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
