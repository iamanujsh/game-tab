import apiClinet from "@/services/api-clinet";
import { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Genres } from "./useGenre";
import { platform } from "os";

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
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = (
  selectedGenre: Genres | null,
  selectedPlatforms: Platform | null,
  selectedSort: string | "",
  requestConfig?: AxiosRequestConfig
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
  }, [selectedGenre, selectedPlatforms, selectedSort]);

  return { games, error, isLoading };
};

export default useGame;
