import apiClinet from "@/services/api-clinet";
import { AxiosError } from "axios";

import { useEffect, useState } from "react";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genres[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fetchGenre = async () => {
    setIsLoading(true);
    try {
      const res = await apiClinet.get<FetchGenreResponse>("/genres");
      // console.log(res.data.results);
      setGenres(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setError((error as AxiosError).message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return { genres, error, isLoading };
};

export default useGenre;
