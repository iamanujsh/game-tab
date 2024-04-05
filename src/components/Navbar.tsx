import logo from "../assets/movietab.png";

const Navbar = () => {
  return (
    <div className="flex p-3 items-center">
      <img width={70} height={70} src={logo} alt="logo" />
      <p className="font-semibold text-xl">Navbar</p>
    </div>
  );
};

export default Navbar;
