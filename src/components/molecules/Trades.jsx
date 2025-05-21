import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TradeChild from "./TradeChild";

export default function Trades({tabVal="buy"}) {
  return (
    <Tabs
      defaultValue={tabVal}
      className=" bg-[#20252B] p-3 rounded-xl trades h-full relative scrollable-div"
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

      <TradeChild val="buy"/>
      <TradeChild val="sell"/>
    </Tabs>
  );
}
