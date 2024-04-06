import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import userGenre from "./hooks/useGenre";

function App() {
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="">
          <Navbar />
        </div>
        <div className="grid grid-cols-12 ">
          <div className="hidden sm:hidden md:col-span-2 md:block">
            <GenreList />
          </div>
          <div className=" md:col-span-10 col-span-12">
            <GameGrid />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
