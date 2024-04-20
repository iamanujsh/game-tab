import useGenre, { Genres } from "@/hooks/useGenre";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const [selectedGenreId, setSelectedGenreId] = useState<number>();
  const { genres, isLoading } = useGenre();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-bold px-7 py-3 text-4xl">Genres</h1>
      {isLoading && (
        <div className="flex  justify-center h-52 items-center ">
          <LoadingSpinner />
        </div>
      )}
      {isLoading == false &&
        genres.map((genre) => (
          <div
            key={genre.id}
            className="flex gap-3 px-7 py-2 items-center font-semibold "
          >
            <img
              className="rounded-lg bg-contain w-8 h-8"
              src={genre.image_background}
              alt={genre.slug}
            />
            <p
              onClick={() => {
                onSelectedGenre(genre);
                setSelectedGenreId(genre.id);
                navigate("/");
              }}
              className={`${
                selectedGenreId === genre.id && "font-bold  text-[20px]"
              } cursor-pointer`}
            >
              {genre.name}
            </p>
          </div>
        ))}
    </>
  );
};

export default GenreList;
