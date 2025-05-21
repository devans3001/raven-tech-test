import IntervalSelector from "../charts/IntervalSelector";
import ChartWrapper from "../charts/ChartWrapper";
import { useSearchParamsHook } from "@/hooks/useCustomParams";
import { useChartKline } from "@/lib/service";
import { useCustomCoin } from "@/hooks/useCustomCoin";
import { formatToBinanceSymbol } from "@/lib/helper";
import { GridLoader } from "react-spinners";

function Charts() {
  const { getParam, setParam } = useSearchParamsHook();
 const {activeSymbol} = useCustomCoin()
 const interval = getParam("interval") || "1m";
 const { data, isPending } = useChartKline(formatToBinanceSymbol(activeSymbol),interval)

  return (
    <div className="candle rounded-[20px] flex flex-col gap-2">
      <IntervalSelector  interval={interval} setParam={setParam}/>

     {isPending? 
     <div className="flex items-center justify-center h-full">

     <GridLoader color="#ccc"/>
     </div>
     
     : <ChartWrapper data={data} sym={activeSymbol}/>}
    </div>
  );
}
export default Charts;
