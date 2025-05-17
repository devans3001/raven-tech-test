import { useGetCoinsBySymbol } from "@/lib/service";
import { useSearchParamsHook } from "./useCustomParams";



export function useCustomCoin() {
 const { getParam } = useSearchParamsHook();
  const activeSymbol = getParam("symbol") || "btc";
    const { data:coin, isPending } = useGetCoinsBySymbol(activeSymbol);

    const data = coin?.[0] || {}

    return {data,isPending}
}