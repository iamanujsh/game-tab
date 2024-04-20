import { GiHamburgerMenu } from "react-icons/gi";

import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useGenre, { Genres } from "@/hooks/useGenre";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

import { useNavigate } from "react-router-dom";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
}

const MobileNav = ({ onSelectedGenre }: Props) => {
  const [selectedGenreId, setSelectedGenreId] = useState<number>();
  const { genres, isLoading } = useGenre();
  const navigate = useNavigate();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" size="icon">
            <GiHamburgerMenu className="md:hidden sm:block text-[20px] " />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-fit">
          <ScrollArea className="h-full ">
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
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
