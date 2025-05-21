"use client";
import {
  createChart,
  CrosshairMode,
  ColorType,
  CandlestickSeries
} from "lightweight-charts";
import { useEffect, useRef, useState } from "react";


export default function ChartWrapper({ data,sym }) {

   
  const chartRef = useRef(null);
  const containerRef = useRef();

  const [legend, setLegend] = useState(null);
 

  useEffect(() => {
    if (!data || !containerRef.current) return;

  
    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
      layout: {
        background: { type: ColorType.Solid, color: "#20252B" },
        textColor: "#D1D5DB",
      },
      grid: {
        vertLines: { color: "#2A2E39" },
        horzLines: { color: "#2A2E39" },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
        timeVisible: true,
      },
    });

    
    chartRef.current = chart;

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });

      candlestickSeries.setData(data);
    chart.timeScale().fitContent();

     chart.subscribeCrosshairMove(param => {
      if (param?.seriesData) {
        const c = param.seriesData.get(candlestickSeries);
        if (c) {
          setLegend({
            o: c.open,
            h: c.high,
            l: c.low,
            c: c.close,
            change: (((c.close - c.open) / c.open) * 100).toFixed(2),
            amplitude: (((c.high - c.low) / c.low) * 100).toFixed(2),
          });
        }
      }
    });


    const handleResize = () => {
      chart.applyOptions({
        width: containerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div className="flex-1 w-full  rounded-md overflow-hidden">
         <div className="text-xs text-foreground px-2 py-1 flex items-center gap-6 bg-[var(--first)]">
        <span className="font-bold">{sym.toUpperCase()}</span>
        {legend && (
          <>
            <span>O <span className="text-[#00C076]">{legend.o}</span></span>
            <span>H <span className="text-[#00C076]">{legend.h}</span></span>
            <span>L <span className="text-[#00C076]">{legend.l}</span></span>
            <span>C <span className="text-[#00C076]">{legend.c}</span></span>
            <span>Change: <span className="text-[#00C076]">{legend.change}%</span></span>
            <span>Amplitude: <span className="text-[#00C076]">{legend.amplitude}%</span></span>
          </>
        )}
      </div>
      <div ref={containerRef}  className="h-full w-full"/>
    </div>
  );
}
