import GameGrid from "./components/GameGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="">
          <Navbar />
        </div>
        <div className="grid grid-cols-12 ">
          <div className="hidden sm:hidden md:col-span-2 md:block">Aside</div>
          <div className=" md:col-span-10 col-span-12">
            <GameGrid />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
