import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "25aa1b355fa649709333660591274fa2",
  },
});
