import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import { Genres } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenres] = useState<Genres | null>(null);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <div className="grid">
        <div className="">
          <Navbar
            onSelectedGenre={setSelectedGenres}
            handleSetSearch={setSearch}
          />
        </div>
        <div className="grid grid-cols-12 ">
          <div className="hidden sm:hidden md:col-span-2 md:block">
            <GenreList onSelectedGenre={setSelectedGenres} />
          </div>
          <div className="md:col-span-1 md:block sm:hidden hidden lg:hidden"></div>
          <div className="md:col-span-9 col-span-12 lg:col-span-10">
            <GameGrid searchText={search} selectedGenre={selectedGenre} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
