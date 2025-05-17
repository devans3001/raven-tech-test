import { useQuery } from "@tanstack/react-query";
import { getCoin } from "./actions";




export function useGetCoins(id) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["coins",id],
    queryFn: ()=>getCoin(id),
    enabled: !!id,
  });

  return { isPending:isLoading, error, data };
}
