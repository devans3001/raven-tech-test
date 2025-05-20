"use client";
import { useOrderBook } from "@/lib/service";
import { Table } from "@/components/atoms/Table";
import { Skeleton } from "@/components/ui/skeleton";

// src\components\atoms\Table.jsx

export default function OrderBook({ symbol = "BTCUSDT" }) {
  const { data, isPending } = useOrderBook(symbol);

  // if (isPending) return <p>Loading order book...</p>;
  // if (isError) return <p>Failed to load order book.</p>;
  // if (isPending) {

  // }

  // const { bids, asks } = data;
  const midPrice = 1232344;

  // console.log(data);

  return (
    <Table className="space-y-1">
      <Table.Header>
        <Table.Cell>Price (USDT)</Table.Cell>
        <Table.Cell>Amounts (BTC)</Table.Cell>
        <Table.Cell>Total</Table.Cell>
      </Table.Header>

      {isPending ? (
        <OrderLoder />
      ) : (
        <Table.Body>
          <>
            {data?.asks.slice(0, 5).map(([price, amount], i) => (
              <Table.Row key={`ask-${i}`} variant="ask">
                <Table.Cell>{parseFloat(price).toFixed(2)}</Table.Cell>
                <Table.Cell>{parseFloat(amount).toFixed(4)}</Table.Cell>
                <Table.Cell>
                  {(parseFloat(price) * parseFloat(amount)).toFixed(2)}
                </Table.Cell>
              </Table.Row>
            ))}

            {/* Mid Price */}
            <div className="flex justify-center py-2 font-semibold text-green-400">
              <span className="text-lg">{midPrice.toFixed(2)}</span>
              <span className="mx-1">↑</span>
              <span className="text-lg">{midPrice.toFixed(2)}</span>
            </div>

            {data?.bids.slice(0, 5).map(([price, amount], i) => (
              <Table.Row key={`bid-${i}`} variant="bid">
                <Table.Cell>{parseFloat(price).toFixed(2)}</Table.Cell>
                <Table.Cell>{parseFloat(amount).toFixed(4)}</Table.Cell>
                <Table.Cell>
                  {(parseFloat(price) * parseFloat(amount)).toFixed(2)}
                </Table.Cell>
              </Table.Row>
            ))}
          </>
        </Table.Body>
      )}
    </Table>
  );
}

function OrderLoder() {
  return (
    <div className="flex flex-col gap-5">
      <Table.Body>
        {[...Array(3)].map((_, i) => (
          <Table.Row key={`skeleton-${i}`}>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Row>
        <Table.Cell>
          <Skeleton className="h-4 w-20" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton className="h-4 w-20" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton className="h-4 w-20" />
        </Table.Cell>
      </Table.Row>

      <Table.Body>
        {[...Array(3)].map((_, i) => (
          <Table.Row key={`skeleton-${i}`}>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="h-4 w-15" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </div>
  );
}
