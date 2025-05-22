import { GridLoader } from "react-spinners";
import IntervalSelector from "../charts/IntervalSelector";
import ChartWrapper from "../charts/ChartWrapper";
import { useChartKline } from "@/lib/service";
import { useCustomCoin } from "@/hooks/useCustomCoin";
import { formatToBinanceSymbol } from "@/lib/helper";
import { useSearchParamsHook } from "@/hooks/useCustomParams";



function ChartCandle() {
  const { getParam, setParam } = useSearchParamsHook();
  const { activeSymbol } = useCustomCoin();
  const interval = getParam("interval") || "1m";
  const { data, isPending } = useChartKline(
    formatToBinanceSymbol(activeSymbol),
    interval
  );

  return (
    <>
      <IntervalSelector interval={interval} setParam={setParam} />

      {isPending ? (
        <div className="flex items-center justify-center h-full">
          <GridLoader color="#ccc" />
        </div>
      ) : (
        <ChartWrapper data={data} sym={activeSymbol} />
      )}
    </>
  );
}
export default ChartCandle;
