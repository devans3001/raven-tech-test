"use client";
import { ChartColumnIncreasing, Clock12, MoveDown, MoveUp } from "lucide-react";
import { BitcoinIcon } from "../atoms/BitcoinIcon";
import { useCoins } from "@/hooks/useCoinsProvider";
import { checkNumberSign, formatMoney } from "@/lib/helper";
import { Skeleton } from "../ui/skeleton";
import { useCustomCoin } from "@/hooks/useCustomCoin";

function TopInfo() {

  const {activeSymbol} = useCustomCoin()
  const { data:coins, isPending } = useCoins();


const data = coins?.find((coin) => coin.symbol === activeSymbol) || {};
  

  const { current_price, high_24h, low_24h, total_volume, price_change_24h } =
    data;
  return (
    <div className="topInfo bg-[#20252B] flex items-center px-4 py-3 w-[100dvw]">
      <div>
        <BitcoinIcon data={data} isPending={isPending} />
      </div>

      <div className="flex-1 flex items-center justify-around">
        {isPending ? (
          <Skeleton className="h-4 w-[100px]" />
        ) : (
          <div className="text-[#00C076]">
            {formatMoney(current_price.toString())}
          </div>
        )}

        {isPending ? (
          <Skeleton className="h-4 w-[100px]" />
        ) : (
          <Changes ch={price_change_24h} />
        )}

        {isPending ? (
          <Skeleton className="h-4 w-[100px]" />
        ) : (
          <High hi={high_24h} />
        )}
        {isPending ? (
          <Skeleton className="h-4 w-[100px]" />
        ) : (
          <Low lo={low_24h} />
        )}

        {isPending ? (
          <Skeleton className="h-4 w-[100px]" />
        ) : (
          <Volume vo={total_volume} />
        )}
      </div>
    </div>
  );
}
export default TopInfo;

function Changes({ ch }) {
  const num = checkNumberSign(ch);

  // console.log(num);

  return (
    <div className="flex flex-col gap-1 items-center text-[.7em] font-thin">
      <p className="flex gap-1 text-white items-center ">
        <Clock12 size={12} />
        <span>24h change</span>
      </p>
      <p
        className={`${
          num === "positive" ? "text-[var(--green)]" : "text-[var(--red)]"
        }`}
      >
        {ch}%
      </p>
    </div>
  );
}
function High({ hi }) {
  return (
    <div className="flex flex-col gap-1 items-center text-[.7em] font-thin ">
      <p className="flex gap-1 text-white items-center ">
        <MoveUp size={12} />
        <span className="text-[#A7B1BC]">24h high</span>
      </p>
      <p className="text-white">{hi}%</p>
    </div>
  );
}
function Low({ lo }) {
  return (
    <div className="flex flex-col gap-1 items-center text-[.7em] font-thin ">
      <p className="flex gap-1 text-white items-center ">
        <MoveDown size={12} />
        <span className="text-[#A7B1BC]">24h low</span>
      </p>
      <p className="text-white">{lo}</p>
    </div>
  );
}
function Volume({vo}) {
  return (
    <div className="flex flex-col gap-1 items-center text-[.7em] font-thin ">
      <p className="flex gap-1 text-white items-center ">
        <ChartColumnIncreasing size={12} />
        <span className="text-[#A7B1BC]">24h volume</span>
      </p>
      <p className="text-white">{vo}</p>
    </div>
  );
}
