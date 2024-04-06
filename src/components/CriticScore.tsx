import { Badge } from "@/components/ui/badge";

const CriticScore = ({ critic }: { critic: number }) => {
  let bg = "green";

  if (critic > 75) {
    bg = "border-green-500";
  } else if (critic > 60) {
    bg = "border-yellow-500";
  } else {
    bg = "border-red-500";
  }
  return (
    <Badge
      className={`${bg} text-gray-200 w-10 h-6 text-base flex justify-center items-center`}
      variant="outline"
    >
      {critic}
    </Badge>
  );
};

export default CriticScore;
