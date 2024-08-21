import { useMutation, useQuery, useQueryClient } from "react-query";

import { addPlcae, getPlace, getWeather } from "./fetching";


//using react-query with key of palce to get a place
export const useGetPlace = ({ id }: { id: string }) => {
  return useQuery(["place"], () => getPlace({ id }))
};

//using react-query with key of palce to add a place
export const useAddPlace = () => {
  const queryClient = useQueryClient();
  return useMutation(["place"], addPlcae, {
    onSuccess: () => {
      queryClient.invalidateQueries(["place"]);
    }
  })
};

//using react-query with key of palce to get a weather by x, y and huppend when do refaech
export const useGetWeather = ({x, y}:{x:number, y:number}) => {
  return useQuery(["weather"],  ()=>getWeather({x, y}))
};
