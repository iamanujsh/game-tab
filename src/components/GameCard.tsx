import { Card, CardContent } from "@/components/ui/card";

import { Game } from "@/hooks/useGames";
import PlatfomIconList from "./PlatfomIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./getCroppedImageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card className="m-2 bg-[#202020] text-white font-bold overflow-hidden rounded-xl shadow-lg drop-shadow-2xl">
        <img src={getCroppedImageUrl(game.background_image)} />
        <CardContent className="pt-3">
          <PlatfomIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <div className="flex justify-between ">
            <p>{game.name} </p>
            <CriticScore critic={game.metacritic} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameCard;
