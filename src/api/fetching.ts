import axios from "axios";

import { Place, Weather } from "./types";

export const getPlace = async ({ id }: { id: string }) => {
    const place = await axios.get<Place>(
        `http://localhost:3000/api/place/${id}`,
    );
    return place.data;
};

export const addPlcae = async (args: Place) => {
    const newPlace = await axios.post<Place>(
        `http://localhost:3000/api/place/`, {
        args
    }
    );
    return newPlace.data;
};
export const getWeather = async () => {
    const weather = await axios.get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=10&lon=32&appid=${process.env.OPEN_WEATHE_MAP_TOCKEN}`);
    return weather.data;
};