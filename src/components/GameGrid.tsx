import useGame from "@/hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-1 ">
      {error && <p>{error}</p>}
      {games.map((game) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
