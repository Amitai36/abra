import { useMutation, useQuery, useQueryClient } from "react-query";

import {addPlcae, getPlace} from "./fetching";

export const useGetPlace = ({ id }: { id: string }) => {
  return useQuery(["place"], ()=>getPlace({id}))
};

export const useAddPlace = () => {
  const queryClient = useQueryClient();
  return useMutation(["place"], addPlcae, {
    onSuccess: () => {
      queryClient.invalidateQueries(["place"]);
    }
  })
};