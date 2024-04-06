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
  requestConfig?: AxiosRequestConfig
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const fetchGames = async () => {
    try {
      const res = await apiClinet.get<FetchGamesResponse>("/games", {
        params: { genres: selectedGenre?.id, platforms: selectedPlatforms?.id },
      });
      setGames(res.data.results);
    } catch (error) {
      setError((error as AxiosError).message);
      console.log((error as AxiosError).message);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [selectedGenre, selectedPlatforms]);

  return { games, error };
};

export default useGame;
