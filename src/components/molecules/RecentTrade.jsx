
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { TabsContent } from "../ui/tabs"
import { formatDistanceToNow } from "date-fns";

function RecentTrade() {

   const [recentTrades] = useLocalStorageState(
      "recentTrades",
      []
    );

    if (!recentTrades.length) {
      return (
        <TabsContent value="trades">

        <div className="text-muted-foreground text-sm py-4">
          No recent trades yet.
        </div>
        </TabsContent>
      );
    }

  return (
    <TabsContent value="trades">
     <div className="bg-[#1C2127] rounded-md p-4 w-full text-white ">
      <h2 className="text-md font-semibold mb-3">Recent Orders</h2>
      <ul className="space-y-2  scrollable-div">
        {recentTrades.map((order, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between text-xs bg-[#2B313A] px-3 py-2 rounded-md"
          >
            <div className="flex-1 space-y-2">
              <div className="font-medium">${order?.price} x ${order?.amount}</div>
              <div className="text-[#A7B1BC]">Total: ${order?.total}</div>
            </div>
            <div className="text-[10px] text-right text-[#6C757D]">
              {formatDistanceToNow(order.timestamp, { addSuffix: true })}
            </div>
          </li>
        ))}
      </ul>
    </div>
      </TabsContent>
  )
}
export default RecentTrade