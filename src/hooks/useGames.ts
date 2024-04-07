import apiClinet from "@/services/api-clinet";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Genres } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  released: Date;
  genres: Genres[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = (
  selectedGenre: Genres | null,
  selectedPlatforms: Platform | null,
  searchText: string,
  selectedSort: string
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchGames = async () => {
    setIsLoading(true);
    try {
      const res = await apiClinet.get<FetchGamesResponse>("/games", {
        params: {
          genres: selectedGenre?.id,
          platforms: selectedPlatforms?.id,
          ordering: selectedSort,
          search: searchText,
        },
      });
      setGames(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setError((error as AxiosError).message);
      console.log((error as AxiosError).message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [selectedGenre, selectedPlatforms, selectedSort, searchText]);

  return { games, error, isLoading };
};

export default useGame;
