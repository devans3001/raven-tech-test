import { useQuery } from "@tanstack/react-query";
import { getCoin, getCoinBySymbol,fetchOrderBook, fetchChartKline } from "./actions";




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

export function useOrderBook(id) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["order",id],
    queryFn: ()=>fetchOrderBook(id),
    enabled: !!id,
  });

  return { isPending:isLoading, error, data };
}
export function useChartKline(id,int) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["candle",id,int],
    queryFn: ()=>fetchChartKline(id,int),
    enabled: !!id || !!int,
  });

  return { isPending:isLoading, error, data };
}
