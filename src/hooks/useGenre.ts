import apiClinet from "@/services/api-clinet";
import { AxiosError } from "axios";

import { useEffect, useState } from "react";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  game_count: number;
}

interface FetchGenreResponse {
  count: number;
  results: Genres[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const fetchGenre = async () => {
    try {
      const res = await apiClinet.get<FetchGenreResponse>("/genres");
      // console.log(res.data.results);
      setGenres(res.data.results);
    } catch (error) {
      setError((error as AxiosError).message);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return { genres, error };
};

export default useGenre;
