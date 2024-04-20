import { Game } from "@/hooks/useGames";
import PlatfomIconList from "./PlatfomIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./getCroppedImageUrl";

import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
  handleSelectedGame: (game: Game) => void;
}

const GameCard = ({ game, handleSelectedGame }: Props) => {
  const handleImageClick = () => {
    handleSelectedGame(game);
  };

  return (
    <div className="">
      <Card className="m-2  bg-[#202020] text-white font-bold overflow-hidden rounded-xl shadow-lg drop-shadow-2xl">
        <Link to={`/game/${game.id}`}>
          <img
            className=" hover:cursor-pointer"
            onClick={handleImageClick}
            src={getCroppedImageUrl(game.background_image)}
          />
        </Link>
        <CardContent className="pt-3">
          <PlatfomIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <div className="flex justify-between ">
            <Link to={`/game/${game.id}`}>
              <p onClick={handleImageClick} className="hover:cursor-pointer">
                {game.name}
              </p>
            </Link>
            <CriticScore critic={game.metacritic} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameCard;
