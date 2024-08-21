import axios from "axios";

import { Place } from "./types";


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