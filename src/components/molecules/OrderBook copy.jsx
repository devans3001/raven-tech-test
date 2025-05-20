"use client";

import { TabsContent } from "../ui/tabs";
import { useCustomCoin } from "@/hooks/useCustomCoin";
import { Table } from "../atoms/Table";
import { orderBookData } from "@/lib/fakeData";
import { formatToBinanceSymbol } from "@/lib/helper";
import { MoveUp } from "lucide-react";
import DensityControls from "../atoms/DisplayControl";
import { useEffect, useState } from "react";
import { useOrderBook } from "@/lib/service";

function OrderBook() {
  const [lol, setLol] = useState(0);
  const { activeSymbol } = useCustomCoin();

  const symbol = formatToBinanceSymbol(activeSymbol);
  const { data, isPending } = useOrderBook(symbol);
  const midPrice = 1232344;
  useEffect(() => {
    setLol(window.innerHeight);
  }, [lol]);
  return (
    <TabsContent value="orderbook" className={"h-full scrollable-div"}>
      <DensityControls />
      <div className="flex flex-col justify-between h-full">
        <Table>
          <Table.Header className="text-[#A7B1BC] text-right text-sm">
            <Table.Cell>Price (USDT)</Table.Cell>
            <Table.Cell>Amounts (BTC)</Table.Cell>
            <Table.Cell>Total</Table.Cell>
          </Table.Header>

          <Table.Body>
            {orderBookData.map((row, idx) => (
              <Table.Row key={idx}>
                <Table.Cell className="text-[#FF6838]">{row.price}</Table.Cell>
                <Table.Cell>{row.amount}</Table.Cell>
                <Table.Cell>{row.total}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <div className="flex gap-2 items-center justify-center text-xl">
          <p className="text-[#25C26E]">36,361.22</p>
          <MoveUp size={14} color="#25C26E" />
          <p className="text-white">36,361.22</p>
        </div>

        <Table>
          <Table.Body>
            {orderBookData.map((row, idx) => (
              <Table.Row key={idx}>
                <Table.Cell className="text-[#25C26E]">{row.price}</Table.Cell>
                <Table.Cell>{row.amount}</Table.Cell>
                <Table.Cell>{row.total}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </TabsContent>
  );
}
export default OrderBook;
