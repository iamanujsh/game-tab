import useGame, { Platform } from "@/hooks/useGames";
import GameCard from "./GameCard";
import { Genres } from "@/hooks/useGenre";
import PlatformSelector from "./PlatformSelector";
import { useState } from "react";

interface Props {
  selectedGenre: Genres | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform | null>(
    null
  );

  console.log(selectedPlatforms);

  const { games, error } = useGame(selectedGenre, selectedPlatforms);
  // console.log(games);

  return (
    <>
      <h1 className="font-bold text-5xl py-8">
        {selectedGenre ? selectedGenre?.name : "All Games"}
      </h1>
      <PlatformSelector onSelectedPlatform={setSelectedPlatforms} />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-1 ">
        {error && <p>{error}</p>}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
