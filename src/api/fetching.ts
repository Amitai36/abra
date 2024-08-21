import axios from "axios";

import { FilteringType, Place, Weather } from "./types";

//get a place by id
export const getPlace = async ({ filter }: { filter:FilteringType }) => {
    const place = await axios.get<Place[]>(
        `http://localhost:3000/api/place/${filter}`,
    );
    return place.data;
};

//add a place 
export const addPlcae = async (args: Place) => {
    const newPlace = await axios.post<Place>(
        `http://localhost:3000/api/place/`, {
        args
    }
    );
    return newPlace.data;
};


//get weather by api token
export const getWeather = async ({ x, y }: { x: number, y: number }) => {
    const weather = await axios.get<Weather>(
        `http://localhost:3000/api/weather/${x}/${y}`);
    return weather.data;
};