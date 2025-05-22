"use client";
import { useSearchParamsHook } from "@/hooks/useCustomParams";
import { TabsContent } from "../ui/tabs";
import { useCustomCoin } from "@/hooks/useCustomCoin";
import { Table } from "../atoms/Table";
import { formatToBinanceSymbol } from "@/lib/helper";
import { MoveUp } from "lucide-react";
import DensityControls from "../atoms/DisplayControl";
import { useOrderBook } from "@/lib/service";
import OrderLoader from "../atoms/OrderLoader";
import BuySellButton from "../atoms/BuySellButton";

function OrderBook() {
  const { activeSymbol } = useCustomCoin();
  const { getParam } = useSearchParamsHook();
  const limit = parseInt(getParam("limit") || "6");

  const symbol = formatToBinanceSymbol(activeSymbol);
  const { data, isPending } = useOrderBook(symbol);

  const midPrice = 12323;

  return (
    <TabsContent value="orderbook" className={"h-full scrollable-div relative"}>
      <BuySellButton/>
      <DensityControls />
      <div className="flex flex-col justify-between h-full">
        <Table>
          <Table.Header className="text-[#A7B1BC] text-right text-sm">
            <Table.Cell>Price (USDT)</Table.Cell>
            <Table.Cell>Amounts (BTC)</Table.Cell>
            <Table.Cell>Total</Table.Cell>
          </Table.Header>

          {isPending ? (
            <OrderLoader limit={limit} />
          ) : (
            <div className="flex flex-col gap-5">
              <Table.Body className="">
                {data?.asks.slice(0, limit).map(([price, amount], i) => (
                  <Table.Row key={`ask-${i}`} variant="ask">
                    <Table.Cell>{parseFloat(price).toFixed(2)}</Table.Cell>
                    <Table.Cell>{parseFloat(amount).toFixed(4)}</Table.Cell>
                    <Table.Cell>
                      {(parseFloat(price) * parseFloat(amount)).toFixed(2)}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              {/* Mid Price */}

              <div className="flex gap-2 items-center justify-center text-xl">
                <p className="text-[#25C26E]">{midPrice.toFixed(2)}</p>
                <MoveUp size={14} color="#25C26E" />
                <p className="text-white">{midPrice.toFixed(2)}</p>
              </div>
              <Table.Body>
                {data?.bids.slice(0, limit).map(([price, amount], i) => (
                  <Table.Row key={`bid-${i}`} variant="bid">
                    <Table.Cell>{parseFloat(price).toFixed(2)}</Table.Cell>
                    <Table.Cell>{parseFloat(amount).toFixed(4)}</Table.Cell>
                    <Table.Cell>
                      {(parseFloat(price) * parseFloat(amount)).toFixed(2)}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </div>
          )}
        </Table>
      </div>
    </TabsContent>
  );
}
export default OrderBook;
