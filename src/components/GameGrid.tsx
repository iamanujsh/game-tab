import useGame, { Game, Platform } from "@/hooks/useGames";
import GameCard from "./GameCard";
import { Genres } from "@/hooks/useGenre";
import PlatformSelector from "./PlatformSelector";
import { useState } from "react";
import SortSelector from "./SortSelector";
import LoadingSkeleton from "./LoadingSkeleton";

interface Props {
  selectedGenre: Genres | null;
  searchText: string;
  handleSelectedGame: (game: Game) => void;
}

const GameGrid = ({ selectedGenre, searchText, handleSelectedGame }: Props) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform | null>(
    null
  );
  const [selectedSort, setSelectedSort] = useState<string>("");

  const { games, error, isLoading } = useGame(
    selectedGenre,
    selectedPlatforms,
    searchText,
    selectedSort
  );

  return (
    <>
      <h1 className="font-bold text-5xl py-8">
        {selectedGenre ? selectedGenre?.name : "All Games"}
      </h1>
      {/* Sorting */}
      <div className="flex items-center ">
        <PlatformSelector onSelectedPlatform={setSelectedPlatforms} />
        <SortSelector onSetSelectedSort={setSelectedSort} />
      </div>
      {/* Game Card */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-1 ">
        {error && <p>{error}</p>}
        {isLoading && <LoadingSkeleton />}
        {isLoading === false &&
          games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              handleSelectedGame={handleSelectedGame}
            />
          ))}
      </div>
    </>
  );
};

export default GameGrid;
