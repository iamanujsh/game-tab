import { Card, CardContent } from "@/components/ui/card";

import { Game } from "@/hooks/useGames";
import PlatfomIconList from "./PlatfomIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // console.log(game.parent_platforms[0].platform.name);
  return (
    <div>
      <Card className="m-2 bg-[#202020] text-white font-bold overflow-hidden rounded-xl">
        <img src={game.background_image} />
        <CardContent className="pt-3">
          <PlatfomIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <p>{game.name} </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameCard;
