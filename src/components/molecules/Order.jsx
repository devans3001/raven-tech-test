import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderBook from "./OrderBook";
import RecentTrade from "./RecentTrade";

export default function Order() {
  return (
    <Tabs
      defaultValue="orderbook"
      className="  p-3 rounded-xl orderbook h-full relative bg-blue-500"
    >
      <TabsList className="grid w-full grid-cols-2 bg-[#1C2127]">
        <TabsTrigger
          value="orderbook"
          className={
            "text-[#A7B1BC] data-[state=active]:text-white data-[state=active]:bg-[#21262C] cursor-pointer"
          }
        >
          Order Book
        </TabsTrigger>
        <TabsTrigger
          value="trades"
          className={
            "text-[#A7B1BC] data-[state=active]:text-white data-[state=active]:bg-[#21262C] cursor-pointer"
          }
        >
          Recent Trades
        </TabsTrigger>
      </TabsList>
      <OrderBook />
      <RecentTrade />
    </Tabs>
  );
}
