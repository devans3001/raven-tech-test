import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TradeBuy from "./TradeBuy";
import TradeSell from "./TradeSell";

export default function Trades() {
  return (
    <Tabs
      defaultValue="buy"
      className="  p-3 rounded-xl trades h-full relative"
    >
      <TabsList className="grid w-full grid-cols-2 bg-[#1C2127]">
        <TabsTrigger
          value="buy"
          className={
            "cursor-pointer text-[#A7B1BC] data-[state=active]:text-white data-[state=active]:bg-[#21262C]"
          }
        >
          Buy
        </TabsTrigger>
        <TabsTrigger
          value="sell"
          className={
            "cursor-pointer text-[#A7B1BC] data-[state=active]:text-white data-[state=active]:bg-[#21262C]"
          }
        >
          Sell
        </TabsTrigger>
      </TabsList>

      <TradeBuy />
      <TradeSell />
    </Tabs>
  );
}
