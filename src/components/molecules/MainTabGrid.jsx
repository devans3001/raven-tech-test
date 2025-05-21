import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Charts from "./Charts";
import OrderBook from "./OrderBook";
import RecentTrade from "./RecentTrade";
import ChartChild from "./ChartChild";

function MainTabGrid() {
  const TAB_ITEMS = [
    { value: "charts", label: "Charts" },
    { value: "orderbook", label: "Order Book" },
    { value: "trades", label: "Recent Trades" },
  ];
  return (
    <Tabs
      defaultValue="orderbook"
      className="bg-[#21262C] mt-3 md:mt-0 p-3 md:rounded-xl orderbook h-full relative"
    >
      <TabsList className=" grid w-full grid-cols-3 bg-[#1C2127]">
        {TAB_ITEMS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={
              "text-[#A7B1BC] data-[state=active]:text-white data-[state=active]:bg-[#21262C] cursor-pointer"
            }
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <ChartChild/>
      <OrderBook />
    <RecentTrade />
    </Tabs>
  );
}
export default MainTabGrid;
