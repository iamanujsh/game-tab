import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlatfomIconList from "./PlatfomIconList";
import { useState } from "react";
import { Platform } from "@/hooks/useGames";

interface Props {
  game: Game | null;
}

interface Image {
  image: string;
}

interface ScreenShot {
  id: number;
  image: string;
}

interface Game {
  name: string;
  ratings_count: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  short_screenshots: ScreenShot[];
}

const GameDetail = ({ game }: Props) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <>
      <div>
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div className="rounded-3xl overflow-hidden">
            <img
              className=" rounded-3xl"
              src={
                selectedImage === null
                  ? game?.background_image
                  : selectedImage.image
              }
              alt="poster"
            />
          </div>
          <div className="md:pt-10 mx-10 pt-10 lg:pt-0 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">{game?.name}</h1>
            <p className="mt-5  text-gray-400">
              {game?.ratings_count}+ Ratings
            </p>
            <PlatfomIconList
              platforms={
                game?.parent_platforms
                  ? game?.parent_platforms?.map((p) => p.platform)
                  : []
              }
            />
          </div>
        </div>
        {/* Carousel */}
        <div className="  flex justify-center mt-10">
          <div className=" w-fit md">
            <Carousel
              opts={{
                align: "start",
              }}
              className="flex md:max-w-sm lg:max-w-2xl max-w-sm"
            >
              <CarouselContent>
                {game?.short_screenshots.map(
                  (screenshot: Image, index: number) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-2/3 sm:basis-2/3 lg:basis-1/3"
                    >
                      <div className="flex aspect-square items-center justify-center p-6">
                        <img
                          onClick={() => setSelectedImage(screenshot)}
                          src={screenshot.image}
                          alt=""
                        />
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetail;
