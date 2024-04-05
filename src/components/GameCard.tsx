import { Card, CardContent } from "@/components/ui/card";

import { Game } from "@/hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card className="m-2 bg-[#202020] text-white font-bold overflow-hidden rounded-xl">
        <img src={game.background_image} />
        <CardContent className="pt-3">
          <p>{game.name} </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameCard;
