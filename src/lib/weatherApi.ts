import { config } from "@/constant/config";
import axios, { AxiosError } from "axios";

export const getWeather = async (city: string) => {
    const url = `${config.weatherApi.domain}/data/2.5/weather`;
    const result = await axios.get(url, {
      params: {
        q: city,
        appid: config.weatherApi.key,
      },
    });
    return result.data;
};
