import apiClinet from "@/services/api-clinet";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatformResponse {
  count: number;
  results: Platform[];
}

const usePlatform = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [errors, setErrors] = useState("");

  const fetchPlatform = async () => {
    try {
      const res = await apiClinet.get<FetchPlatformResponse>("/platforms");
      //   console.log(res.data.results);
      setPlatforms(res.data.results);
    } catch (error) {
      setErrors((error as AxiosError).message);
    }
  };

  useEffect(() => {
    fetchPlatform();
  }, []);

  return { platforms, errors };
};

export default usePlatform;
