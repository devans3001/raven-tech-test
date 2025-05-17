import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

function Footer() {
  const tabArr = ["open_order", "position", "order_history", "trade_history"];
  return (
    <div className="max-w-screen h-screen mt-5 px-2">
      <Tabs
        defaultValue="open_order"
        className="  p-3 rounded-xl orderbook h-full relative"
      >
        <TabsList className="grid w-[60%] grid-cols-4 bg-[#1C2127]">
          {tabArr.map((ele) => {
            const item = ele.split("_").join(" ");

            return (
              <TabsTrigger
                key={ele}
                value={ele}
                className={
                  "capitalize text-[#A7B1BC] data-[state=active]:text-white data-[state=active]:bg-[#21262C] cursor-pointer"
                }
              >
                {item}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {/* <OrderBook/>
      <RecentTrade/> */}

        <TabsContent value="open_order" className="h-full">
            <div className="h-full flex items-center justify-center text-center flex-col">
            <h1 className="text-3xl">
                No Open Order
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Quaerat fugiat qui itaque dicta deleniti. Suscipit.
            </p>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default Footer;
