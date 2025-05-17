import { useQuery } from "@tanstack/react-query";
import { getCoin, getCoinBySymbol } from "./actions";




export function useGetCoins() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["coins"],
    queryFn: getCoin,
  });

  return { isPending:isLoading, error, data };
}


export function useGetCoinsBySymbol(id) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["coins",id],
    queryFn: ()=>getCoinBySymbol(id),
    enabled: !!id,
  });

  return { isPending:isLoading, error, data };
}
