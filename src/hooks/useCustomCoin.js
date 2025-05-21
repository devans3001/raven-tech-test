// import { useGetCoinsBySymbol } from "@/lib/service";
import { useSearchParamsHook } from "./useCustomParams";



export function useCustomCoin() {
 const { getParam } = useSearchParamsHook();
  const activeSymbol = getParam("symbol") || "btc";

    return {activeSymbol}
}